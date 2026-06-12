import { useState } from "react";

function Events() {

  const [events, setEvents] = useState([]);

  const [title, setTitle] = useState("");

  const [date, setDate] = useState("");

  const [location, setLocation] = useState("");

  const handleEvent = (e) => {

    e.preventDefault();

    const newEvent = {
      title,
      date,
      location,
    };

    setEvents([...events, newEvent]);

    setTitle("");
    setDate("");
    setLocation("");

    alert("Event Created Successfully 🎉");

  };

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Community Events
      </h1>

      {/* Event Form */}

      <form
        onSubmit={handleEvent}
        className="bg-white p-6 rounded-xl shadow-md mb-10 space-y-4"
      >

        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          placeholder="Event Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Create Event
        </button>

      </form>

      {/* Event Cards */}

      <div className="grid md:grid-cols-2 gap-6">

        {events.map((event, index) => (

          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md"
          >

            <h2 className="text-2xl font-bold text-blue-600">
              {event.title}
            </h2>

            <p className="text-gray-600 mt-2">
              📅 {event.date}
            </p>

            <p className="text-gray-600 mt-2">
              📍 {event.location}
            </p>

            <button
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Join Event
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Events;