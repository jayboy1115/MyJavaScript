const classTimings = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];

function getAfternoonClasses(timings) {
  return timings.filter(time => {
    const [hour, period] = time.split(' ');
    return period == 'PM' && hour >= '1';
  });
}

const afternoonClasses = getAfternoonClasses(classTimings);
module.exports = {getAfternoonClasses};
