import { useState } from "react";

function Forum() {

  const [topics, setTopics] = useState([]);

  const [title, setTitle] = useState("");

  const [discussion, setDiscussion] = useState("");

  const handleTopic = (e) => {

    e.preventDefault();

    const newTopic = {
      title,
      discussion,
    };

    setTopics([...topics, newTopic]);

    setTitle("");
    setDiscussion("");

    alert("Discussion Added 🎉");

  };

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Community Forum 💬
      </h1>

      {/* Discussion Form */}

      <form
        onSubmit={handleTopic}
        className="bg-white p-6 rounded-2xl shadow-lg mb-10 space-y-4"
      >

        <input
          type="text"
          placeholder="Discussion Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-4 rounded-xl"
          required
        />

        <textarea
          placeholder="Start discussion..."
          value={discussion}
          onChange={(e) => setDiscussion(e.target.value)}
          className="w-full border p-4 rounded-xl h-32"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Post Discussion
        </button>

      </form>

      {/* Discussion Cards */}

      <div className="space-y-6">

        {topics.map((topic, index) => (

          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >

            <h2 className="text-2xl font-bold text-blue-700">
              {topic.title}
            </h2>

            <p className="text-gray-700 mt-3">
              {topic.discussion}
            </p>

            <button
              className="mt-5 bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Reply
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Forum;