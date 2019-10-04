import React, { useState, useEffect } from "react";
import axios from "axios"
// move the logic used to manage the state

// Our useApplicationData Hook will return an object with four keys.

// The state object will maintain the same structure.
// The setDay action can be used to set the current day.
// The bookInterview action makes an HTTP request and updates the local state.
// The cancelInterview action makes an HTTP request and updates the local state.



export default function useApplicationData(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get("/api/days")),
      Promise.resolve(axios.get("/api/appointments")),
      Promise.resolve(axios.get("/api/interviewers"))
    ]).then((all) => {
      console.log('all', all)
      setState({...state, days: all[0].data, appointments: all[1].data, interviewers: all[2].data})
      console.log(state.appointments)
    })
  }, [])

  function bookInterview(id, interview) {
    console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return Promise.resolve(axios.put(`/api/appointments/${id}`, {
      interview
    })
      .then(() => setState({...state, appointments})))
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return Promise.resolve(axios.delete(`/api/appointments/${id}`, null)
      .then(() => setState({...state, appointments})))
  }



  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
}

