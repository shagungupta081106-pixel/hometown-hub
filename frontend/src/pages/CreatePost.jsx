import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { db, storage } from "../firebase";

import { collection, addDoc } from "firebase/firestore";

import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

function CreatePost() {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [image, setImage] = useState(null);

  const handlePost = async (e) => {

    e.preventDefault();

    try {

      let imageUrl = "";

      if (image) {

        const imageRef = ref(
          storage,
          `posts/${Date.now()}-${image.name}`
        );

        await uploadBytes(imageRef, image);

        imageUrl = await getDownloadURL(imageRef);

      }

      await addDoc(collection(db, "posts"), {

        title,
        content,
        image: imageUrl,

      });

      alert("Post Created Successfully 🎉");

      navigate("/dashboard");

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-8">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-blue-700">
            Create Community Post
          </h1>

          <p className="text-gray-500 mt-2">
            Share updates, memories & hometown moments ✨
          </p>

        </div>

        <form
          onSubmit={handlePost}
          className="space-y-6"
        >

          {/* Title */}

          <div>

            <label className="block text-gray-700 font-semibold mb-2">
              Post Title
            </label>

            <input
              type="text"
              placeholder="Enter post title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          {/* Content */}

          <div>

            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>

            <textarea
              placeholder="Write something about your hometown..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-gray-300 p-4 rounded-xl h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>

          </div>

          {/* Image Upload */}

          <div>

            <label className="block text-gray-700 font-semibold mb-2">
              Upload Image
            </label>

            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full border border-gray-300 p-3 rounded-xl bg-gray-50"
            />

          </div>

          {/* Button */}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-4 rounded-xl text-lg font-semibold shadow-lg"
          >
            🚀 Publish Post
          </button>

        </form>

      </div>

    </div>

  );

}

export default CreatePost;