// User should be able to add/create new meetups
import axios from "axios";
import { useState, useEffect } from "react";
export const AddMeetup = () => {
  const [title, setTitle] = useState({});
  const [location, setLocation] = useState({});
  const [date, setDate] = useState({});
  const [time, setTime] = useState({});
  const [theme, setTheme] = useState({});
  const [description, setDescription] = useState({});
  const [image, setImage] = useState({});

  const addMeet = () => {
    axios.post("http://localhost:8080/meetups", {
      title: title,
      location: location,
      date: date,
      time: time,
      theme: theme,
      description: description,
      image: image,
    });
  };
  return (
    <div className="addMeetupContainer">
      <form>
        <h1>Add Meetup</h1>
        <label>title</label>
        <input
          type="text"
          className="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <label>Location</label>
        <select
          value={""}
          className="location"
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        >
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>date</label>
        <input
          type="text"
          className="date"
          onChange={(event) => {
            setDate(event.target.value);
          }}
          placeholder="format YYYY-MM-DD"
          required
        />
        <br />
        <label>time</label>
        <input
          type="text"
          className="time"
          onChange={(event) => {
            setTime(event.target.value);
          }}
          placeholder="format HH:MM"
          required
        />
        <br />
        <label>Theme</label>
        <select
          value={""}
          className="theme"
          onChange={(event) => {
            setTheme(event.target.value);
          }}
        >
          <option value="">-----------</option>
          <option value="technology">Technology</option>
          <option value="food">Food</option>
          <option value="movies">Movies</option>
          <option value="culture">Culture</option>
          <option value="art">Art</option>
          <option value="drama">Drama</option>
        </select>
        <label>description</label>
        <input
          type="text"
          className="description"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          placeholder="Description"
          required
        />
        <br />
        <label>Image</label>
        <input
          type="text"
          className="image"
          onChange={(event) => {
            setImage(event.target.value);
          }}
          required
        />
        <br />
        <input className="submitMeetupForm" type="submit" onClick={addMeet} />
      </form>
    </div>
  );
};
