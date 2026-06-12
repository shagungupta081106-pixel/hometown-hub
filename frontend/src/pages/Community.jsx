import { useState } from "react";

function Community() {

  const communitiesData = [

    {
      name: "Delhi Community",
      location: "Delhi",
    },

    {
      name: "Mumbai Community",
      location: "Mumbai",
    },

    {
      name: "Lucknow Community",
      location: "Lucknow",
    },

    {
      name: "Jaipur Community",
      location: "Jaipur",
    },

  ];

  const [search, setSearch] = useState("");

  const filteredCommunities =
    communitiesData.filter((community) =>
      community.location
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Communities
      </h1>

      {/* Search Box */}

      <input
        type="text"
        placeholder="Search city or village..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-3 rounded-lg mb-8"
      />

      {/* Community Cards */}

      <div className="grid md:grid-cols-2 gap-6">

        {filteredCommunities.map((community, index) => (

          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md"
          >

            <h2 className="text-2xl font-bold text-blue-600">
              {community.name}
            </h2>

            <p className="text-gray-600 mt-2">
              📍 {community.location}
            </p>

            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Join Community
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Community;