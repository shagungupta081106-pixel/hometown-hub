function Notifications() {

  const notifications = [

    "🎉 New community post added",

    "📅 New event created in your community",

    "🌍 Someone joined your hometown community",

    "❤️ Your post received a like",

    "💬 New comment on your post",

  ];

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Notifications 🔔
      </h1>

      <div className="space-y-4">

        {notifications.map((note, index) => (

          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-md"
          >

            <p className="text-lg">
              {note}
            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Notifications;