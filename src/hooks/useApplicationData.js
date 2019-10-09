import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer, {
  SET_DAY,
  SET_APPLICATION_DATA,
  SET_INTERVIEW
} from "reducers/application";

export default function useApplicationData(props) {
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
    let spot = -1;
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
    let spot = 1;
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
