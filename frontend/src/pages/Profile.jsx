import { useState } from "react";

function Profile() {

  const [name, setName] = useState("");

  const [hometown, setHometown] = useState("");

  const [bio, setBio] = useState("");

  const [image, setImage] = useState("");

  const handleSave = (e) => {

    e.preventDefault();

    const profileData = {
      name,
      hometown,
      bio,
      image,
    };

    localStorage.setItem(
      "profile",
      JSON.stringify(profileData)
    );

    alert("Profile Updated Successfully 🎉");

  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          My Profile
        </h1>

        <form
          onSubmit={handleSave}
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Enter Hometown"
            value={hometown}
            onChange={(e) => setHometown(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Write Bio..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full border p-3 rounded-lg h-28"
          ></textarea>

          <input
            type="text"
            placeholder="Profile Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Save Profile
          </button>

        </form>

      </div>

    </div>

  );

}

export default Profile;