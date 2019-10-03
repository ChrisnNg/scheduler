import "components/Appointment/styles.scss"
import React from "react"
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import useVisualMode from "hooks/useVisualMode.js"
import Form from "components/Appointment/Form.js"

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE"
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
    
  const onAdd = function(){
    transition(CREATE)
  }
  const onCancel = function(){
    back()
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
  />
)}  
  {mode === CREATE && (
  <Form
  interviewers={[]}
  onCancel={onCancel}
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