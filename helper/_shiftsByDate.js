export function getShiftsByDate(activeFacilities) {
    const shiftsByDate = activeFacilities.reduce((result, facility) => {
      facility.Shifts.forEach((shift) => {
        const date = shift.start.toISOString().slice(0, 10);
        if (!result[date]) {
          result[date] = [];
        }
        result[date].push(shift);
      });
      return result;
    }, {});
  
    return shiftsByDate;
  }
  