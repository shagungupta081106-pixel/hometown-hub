import { createContext, useState } from "react";

export const PostContext = createContext();

function PostProvider({ children }) {

  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {

    setPosts([...posts, newPost]);
  };

  return (
    <PostContext.Provider
      value={{ posts, addPost }}
    >
      {children}
    </PostContext.Provider>
  );
}

export default PostProvider;