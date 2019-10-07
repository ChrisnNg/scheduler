import React, { useState, useEffect } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props) {
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [name, setName] = useState(props.name || "");
  const [error, setError] = useState("");
  const reset = function() {
    setInterviewer(null);
    setName("");
  };

  const cancel = function() {
    reset();
    props.onCancel();
  };

  function validate() {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }

    props.onSave(name, interviewer);
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
            value={name}
            onChange={event => {
              setName(event.target.value);
            }}
            data-testid="student-name-input"
          />
          <section className="appointment__validation">{error}</section>
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={event => cancel()} danger>
            Cancel
          </Button>
          <Button onClick={event => validate()} confirm>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
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
