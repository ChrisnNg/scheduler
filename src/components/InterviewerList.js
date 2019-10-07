import PropTypes from "prop-types";
import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

// ? Our InterviewerListItem takes in the following props:
// ? id:number - the id of the interviewer
// ? name:string - the name of the interviewer
// ? avatar:url - a url to an image of the interviewer
// ? selected:boolean - to determine if an interview is selected or not
// ? setInterviewer:function - sets the interviewer upon selection

export default function InterviewerList(props) {
  InterviewerList.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired
  };

  const interviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={event => props.onChange(interviewer.id)}
      />
    );
  });
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
}
