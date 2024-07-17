// Script untuk update waktu
document.addEventListener('DOMContentLoaded', function () {
  const timeZoneMappings = {
    'tz-utc': { offset: 0, label: 'UTC' },
    'tz-gmt7': { offset: 7, label: 'Etc/GMT-7' },
    'tz-gmt8': { offset: 8, label: 'Etc/GMT-8' },
    'tz-gmt9': { offset: 9, label: 'Etc/GMT-9' },
  };

  let currentInterval;

  Object.keys(timeZoneMappings).forEach((id) => {
    document.getElementById(id).addEventListener('click', function () {
      const timeZone = timeZoneMappings[id];
      updateTimeZone(timeZone.offset, timeZone.label);
    });
  });

  function updateTimeZone(offset, label) {
    if (currentInterval) {
      clearInterval(currentInterval);
    }
    function updateTime() {
      const now = new Date();

      // Get the current time in UTC and adjust for the selected timezone
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const localTime = new Date(utcTime + 3600000 * offset);

      const date = localTime.toLocaleDateString('en-GB');
      const time = localTime.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      document.getElementById('date').innerText = date;
      document.getElementById('clock').innerText = time;
      document.getElementById('timezone').innerText = label;

      localStorage.setItem(
        'selectedTimeZone',
        JSON.stringify({ date, time, label, offset }),
      );
    }
    updateTime();
    currentInterval = setInterval(updateTime, 1000); // Update every second
  }

  const savedTimeZone = JSON.parse(localStorage.getItem('selectedTimeZone'));
  if (savedTimeZone) {
    updateTimeZone(savedTimeZone.offset, savedTimeZone.label);
  } else {
    // Set default timezone to user's local timezone if none is saved
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localOffset = -new Date().getTimezoneOffset() / 60;

    // Find the nearest matching offset in timeZoneMappings
    const matchedTimeZone = Object.values(timeZoneMappings).find(
      (tz) => tz.offset === localOffset,
    );

    if (matchedTimeZone) {
      updateTimeZone(matchedTimeZone.offset, matchedTimeZone.label);
    } else {
      // Use the offset and a generic label if not in mappings
      updateTimeZone(
        localOffset,
        `GMT${localOffset >= 0 ? `+${localOffset}` : localOffset}`,
      );
    }
  }
});
