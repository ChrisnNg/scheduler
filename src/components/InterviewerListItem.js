// ? Our InterviewerListItem takes in the following props:
// ? id:number - the id of the interviewer
// ? name:string - the name of the interviewer
// ? avatar:url - a url to an image of the interviewer
// ? selected:boolean - to determine if an interview is selected or not
// ? setInterviewer:function - sets the interviewer upon selection

import React from "react";
import "components/InterviewerListItem.scss";

import classnames from 'classnames';

export default function InterviewerListItem(props) {
  console.log(props)
  const interviewerClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  const displayName = function(props) {
    if (props.selected) {
      console.log(props)
      return props.name;
    }
  }

  return (
  <li className={interviewerClass}>
    <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
    />
   {displayName(props)}
  </li>
  );
}
