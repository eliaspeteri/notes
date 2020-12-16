import React, { useState, useEffect } from "react";
import EventService from "./EventService";
import moment from "moment";
const EventForm = (props) => {
  return (
    <form onSubmit={props.addEvent}>
      <div>
        Title: <input value={props.title} onChange={props.htc} />
      </div>
      <div>
        Description: <input value={props.event} onChange={props.hec} />
      </div>
      <div>
        Time: <input value={props.time} onChange={props.hdc} />
      </div>
      <div>
        <button type="submit">save</button>
      </div>
    </form>
  );
};

const EventList = (props) => {
  return (
    <div>
      {props.currentDate}
      {props.events.map((event) =>
        moment(event.date).format("DD.MM.YYYY") === props.currentDate ? (
          <p key={event.time}>
            Title: {event.title} <br />
            Description: {event.description} <br />
            Time: {event.time} <br />
          </p>
        ) : null
      )}
    </div>
  );
};

const Event = (props) => {
  const [events, setEvents] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newEvent, setNewEvent] = useState("");
  const [newTime, setNewTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };
  const handleEventChange = (event) => {
    setNewEvent(event.target.value);
  };

  const handleTimeChange = (event) => {
    setNewTime(event.target.value);
  };

  const hook = () => {
    EventService.getAll().then((response) => {
      setEvents(response.data);
      if (response.status === 200) {
        console.log("get successful");
      }
    });
  };

  useEffect(hook, []);

  const addEvent = (event) => {
    event.preventDefault();
    const EventObject = {
      title: newTitle,
      description: newEvent,
      date: moment(props.date).format("LL"),
      time: newTime,
      id: "",
    };

    EventService.create(EventObject)
      .then((returnedEvent) => {
        setEvents(events.concat(returnedEvent));
        setNewTitle("");
        console.log("post successful");
      })
      .catch((error) => {
        setErrorMessage(`Error`);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
  };
  return (
    <div
      id="event"
      onClick={(e) => {
        e?.stopPropagation();
      }}
    >
      <EventList events={events} currentDate={props.date} />
      <EventForm
        title={newTitle}
        description={newEvent}
        date={props.date}
        time={newTime}
        addEvent={addEvent}
        htc={handleTitleChange}
        hec={handleEventChange}
        hdc={handleTimeChange}
      />
    </div>
  );
};

export default Event;
