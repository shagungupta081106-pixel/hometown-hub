import { useState } from "react";

function PostCard({
  id,
  title,
  content,
  image,
  onDelete,
}) {

  const [likes, setLikes] = useState(0);

  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([]);

  const handleLike = () => {

    setLikes(likes + 1);

  };

  const handleComment = () => {

    if (comment.trim() === "") return;

    setComments([...comments, comment]);

    setComment("");

  };

  return (

    <div className="bg-gray-100 p-5 rounded-xl shadow-md">

      <h2 className="text-2xl font-bold text-blue-600">
        {title}
      </h2>

      <p className="text-gray-700 mt-2">
        {content}
      </p>

      {image && (

        <img
          src={image}
          alt="Post"
          className="w-full h-64 object-cover rounded-xl mt-4"
        />

      )}

      {/* Buttons */}

      <div className="flex gap-3 mt-4">

        <button
          onClick={handleLike}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          ❤️ Like ({likes})
        </button>

        <button
  onClick={() => {
    const savedPosts =
      JSON.parse(localStorage.getItem("savedPosts")) || [];

    const newPost = {
      title,
      content,
      image,
    };

    localStorage.setItem(
      "savedPosts",
      JSON.stringify([...savedPosts, newPost])
    );

    alert("Post Saved ⭐");
  }}
  className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
>
  Save
</button>

        <button
          onClick={() => onDelete(id)}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>

      </div>

      {/* Comments */}

      <div className="mt-5">

        <input
          type="text"
          placeholder="Write a comment..."
          className="w-full border p-2 rounded-lg"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button
          onClick={handleComment}
          className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Add Comment
        </button>

        <div className="mt-4 space-y-2">

          {comments.map((item, index) => (

            <p
              key={index}
              className="bg-white p-2 rounded-lg"
            >
              💬 {item}
            </p>

          ))}

        </div>

      </div>

    </div>

  );
}

export default PostCard;