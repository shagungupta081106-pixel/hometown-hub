import { useEffect, useState } from "react";

function SavedPosts() {

  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {

    const posts =
      JSON.parse(localStorage.getItem("savedPosts")) || [];

    setSavedPosts(posts);

  }, []);

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Saved Posts ⭐
      </h1>

      <div className="space-y-4">

        {savedPosts.map((post, index) => (

          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-md"
          >

            <h2 className="text-2xl font-bold">
              {post.title}
            </h2>

            <p className="mt-2">
              {post.content}
            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default SavedPosts;