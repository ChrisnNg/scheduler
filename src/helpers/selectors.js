
export function getAppointmentsForDay(state, day) {
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

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  let newInterview = {...interview}
  console.log('newint', newInterview.interviewer)
  for(let keys in state.interviewers) {
    if (state.interviewers[keys].id === newInterview.interviewer) {
      newInterview.interviewer =  state.interviewers[keys]
      console.log('newinterview result', newInterview)
      return newInterview;
    }
  }
}

// export function getInterview(state, interview) {
//   let result = {};
//     for (let keys in state.appointments) {
//       if (state.appointments[keys].interview) {
//         console.log("getInterview", state.appointments[keys].interview)
//         result = {
//           "student": state.appointments[keys].interview.student,
//           "interviewer": {  
//             "id": state.appointments[keys].interviewer,
//             "name": state.interviewers[state.appointments[keys].interviewer].name,
//             "avatar": state.interviewers[state.appointments[keys].interviewer].avatar
//           }
//         }
  
//       } else {
//         console.log(`null detected at key=${keys}`)
//         return null
//       }
//     }
//     console.log('getinterview result', result)
//     return result
//   }
  