function EventCard({ title, date, location }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-2xl font-bold mb-2">
        {title}
      </h2>

      <p className="text-gray-600 mb-2">
        Date: {date}
      </p>

      <p className="text-gray-600 mb-4">
        Location: {location}
      </p>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Join Event
      </button>

    </div>
  );
}

export default EventCard;