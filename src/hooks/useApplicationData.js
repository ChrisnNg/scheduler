import React, { useReducer, useEffect } from "react";
import axios from "axios";
// move the logic used to manage the state

// Our useApplicationData Hook will return an object with four keys.

// The state object will maintain the same structure.
// The setDay action can be used to set the current day.
// The bookInterview action makes an HTTP request and updates the local state.
// The cancelInterview action makes an HTTP request and updates the local state.

export default function useApplicationData(props) {
  const SET_DAY = "SET_DAY";
  const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
  const SET_INTERVIEW = "SET_INTERVIEW";

  function reducer(state, action) {
    switch (action.type) {
      case SET_DAY:
        return { ...state, ...action.value };
      case SET_APPLICATION_DATA:
        return { ...state, ...action.value };
      case SET_INTERVIEW: {
        let newState = { ...state };
        for (let index of newState.days) {
          if (index.name === state.day) {
            index.spots += action.spot;
          }
        }
        return { ...newState, ...action.value };
      }
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => dispatch({ type: SET_DAY, value: { day } });

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get("/api/days")),
      Promise.resolve(axios.get("/api/appointments")),
      Promise.resolve(axios.get("/api/interviewers"))
    ]).then(all => {
      dispatch({
        type: SET_APPLICATION_DATA,
        value: {
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data
        }
      });
    });
  }, []);

  function bookInterview(id, interview) {
    let spot = -0.5;
    if (state.appointments[id].interview) {
      spot = 0;
    }
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return Promise.resolve(
      axios
        .put(`/api/appointments/${id}`, {
          interview
        })
        .then(() =>
          dispatch({ type: SET_INTERVIEW, value: { appointments }, spot })
        )
    );
  }

  function cancelInterview(id) {
    let spot = 0.5;
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return Promise.resolve(
      axios.delete(`/api/appointments/${id}`, null).then(() => {
        dispatch({ type: SET_INTERVIEW, value: { appointments }, spot });
      })
    );
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}
