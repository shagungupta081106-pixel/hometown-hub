function Stats() {

  const stats = [

    {
      title: "Total Members",
      value: "1,250",
      icon: "👥",
    },

    {
      title: "Communities",
      value: "85",
      icon: "🌍",
    },

    {
      title: "Posts Shared",
      value: "3,420",
      icon: "📝",
    },

    {
      title: "Events Created",
      value: "120",
      icon: "📅",
    },

  ];

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-10">
        Community Statistics 📊
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((item, index) => (

          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
          >

            <div className="text-5xl mb-4">
              {item.icon}
            </div>

            <h2 className="text-3xl font-bold text-blue-700">
              {item.value}
            </h2>

            <p className="text-gray-600 mt-2 text-lg">
              {item.title}
            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Stats;