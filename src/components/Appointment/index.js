import "components/Appointment/styles.scss"
import React from "react"
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import useVisualMode from "hooks/useVisualMode.js"
import Form from "components/Appointment/Form.js"
import Status from "components/Appointment/Status.js"
import Confirm from "components/Appointment/Confirm.js"

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE"
  const SAVING = "SAVING"
  const CONFIRM = "CONFIRM"
  const DELETING = "DELETING"
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
    
  const onAdd = function(){
    transition(CREATE)
  }
  const onCancel = function(){
    back()
  }
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW))

  }
 function onDelete() {
    transition(CONFIRM)
  }
  function confirmDelete() {
    transition(DELETING)
    props.cancelInterview(props.id)
    .then(() => transition(EMPTY))
  }

  return (
  <article className="appointment">
    <Header 
    time={props.time}
    />
  {mode === EMPTY && 
  <Empty 
  onAdd={onAdd} 
  />}
  {mode === SHOW && (
  <Show
    student={props.interview.student}
    interviewers={props.interview.interviewer}
    onDelete={onDelete}
  />
)}  
  {mode === CREATE && (
  <Form
  interviewers={props.interviewers}
  onCancel={onCancel}
  onSave={save}
  />
)}
  {mode === SAVING && (
  <Status
    message="Saving"
  />
)}  
  {mode === CONFIRM && (
  <Confirm
    message="Are you sure you would like to delete?"
    onCancel={back}
    onConfirm={confirmDelete}
  />
)}  
  {mode === DELETING && (
  <Status
    message="Deleting"
  />
)}  
  </article>
  )

}
// ? The Form component should take the following props:

// ? name:String
// ? interviewers:Array
// ? interviewer:Number
// ? onSave:Function
// ? onCancel:Function
// {props.cancelInterview(props.id)}