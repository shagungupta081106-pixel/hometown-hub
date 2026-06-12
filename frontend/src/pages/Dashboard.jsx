import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import PostCard from "../components/PostCard";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  const fetchPosts = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "posts")
      );

      const postData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPosts(postData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "posts", id));

      alert("Post Deleted Successfully 🎉");

      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title?.toLowerCase().includes(search.toLowerCase()) ||
      post.content?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Community Dashboard
      </h1>

      {/* Stats Section */}

      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold">120</h2>
          <p className="text-gray-600">
            Community Members
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold">35</h2>
          <p className="text-gray-600">
            Active Events
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold">
            {posts.length}
          </h2>
          <p className="text-gray-600">
            Total Posts
          </p>
        </div>

      </div>

      {/* Search */}

      <div className="bg-white p-4 rounded-xl shadow-md mb-6">

        <input
          type="text"
          placeholder="🔍 Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

      </div>

      {/* Posts */}

      <div className="bg-white p-6 rounded-xl shadow-md">

        <h2 className="text-2xl font-bold mb-4">
          Community Posts
        </h2>

        <div className="space-y-4">

          {filteredPosts.length > 0 ? (

            filteredPosts.map((post) => (

              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                image={post.image}
                onDelete={handleDelete}
              />

            ))

          ) : (

            <p className="text-gray-500">
              No posts found.
            </p>

          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;