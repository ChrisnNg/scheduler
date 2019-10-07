export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(days => days.name === day);
  const result = [];
  if (filteredDays.length === 0) {
    return result;
  }

  const dayAppointments = filteredDays[0].appointments;

  for (let keys in state.appointments) {
    for (let index of dayAppointments) {
      if (state.appointments[keys].id === index) {
        result.push(state.appointments[keys]);
      }
    }
  }
  return result;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  let newInterview = { ...interview };
  for (let keys in state.interviewers) {
    if (state.interviewers[keys].id === newInterview.interviewer) {
      newInterview.interviewer = state.interviewers[keys];
      return newInterview;
    }
  }
}

export function getInterviewersForDay(state, day) {
  const filteredDays = state.days.filter(days => days.name === day);
  const result = [];
  if (filteredDays.length === 0) {
    return result;
  }

  const dayInterviewers = filteredDays[0].interviewers;

  for (let keys in state.interviewers) {
    for (let index of dayInterviewers) {
      if (state.interviewers[keys].id === index) {
        result.push(state.interviewers[keys]);
      }
    }
  }
  return result;
}
