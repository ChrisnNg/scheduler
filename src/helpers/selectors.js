
export default function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(days => days.name === day)
  const result = [];
  if (filteredDays.length === 0) {
    return result;
  }

  const dayAppointments = filteredDays[0].appointments;

  for (let keys in state.appointments) {
    for(let index of dayAppointments) {
      if (state.appointments[keys].id === index) {
        result.push(state.appointments[keys])
      }
    }
  }

  return result;
}