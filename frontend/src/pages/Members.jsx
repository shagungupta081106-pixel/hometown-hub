function Members() {

  const members = [

    {
      name: "Rahul Sharma",
      city: "Delhi",
    },

    {
      name: "Priya Verma",
      city: "Lucknow",
    },

    {
      name: "Aman Gupta",
      city: "Jaipur",
    },

    {
      name: "Sneha Singh",
      city: "Mumbai",
    },

  ];

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Community Members 👥
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {members.map((member, index) => (

          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
          >

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">

                {member.name.charAt(0)}

              </div>

              <div>

                <h2 className="text-2xl font-bold text-blue-700">
                  {member.name}
                </h2>

                <p className="text-gray-600">
                  📍 {member.city}
                </p>

              </div>

            </div>

            <button
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl"
            >
              View Profile
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Members;