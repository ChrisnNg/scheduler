import React, { useState } from "react"
import Button from "components/Button"
import InterviewerList from "components/InterviewerList"

export default function Form(props) {
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [name ,setName] = useState(props.name || "");

  const reset = function() {
    setInterviewer(null);
    setName("");
  }

  const cancel = function() {
    reset()
    props.onCancel()
  }


  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            onChange={event => setName(event.target.value)}
            value={name}
            /*
              This must be a controlled component
            */
          />
        </form>
        <InterviewerList 
        interviewers={props.interviewers} 
        value={interviewer} 
        onChange={setInterviewer} 
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={(event) =>  cancel()} danger>Cancel</Button>
          <Button onClick={(event) => props.onSave(name, interviewer)} confirm>Save</Button>
        </section>
      </section>
    </main>
  )
}

// ? The Form component should track the following state:

// ? name:String
// ? interviewer:Number
// ? The Form component should have the following actions:

// ? setName:Function
// ? setInterviewer:Function
// ? The Form component should take the following props:

// ? name:String
// ? interviewers:Array
// ? interviewer:Number
// ? onSave:Function
// ? onCancel:Function