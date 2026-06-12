import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Community from "./pages/Community";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import CreatePost from "./pages/CreatePost";
import Notifications from "./pages/Notifications";
import Members from "./pages/Members";
import Stats from "./pages/Stats";
import Forum from "./pages/Forum";
import Contact from "./pages/Contact";
import SavedPosts from "./pages/SavedPosts";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/community" element={<Community />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard"element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/notifications"element={<Notifications />}/>
        <Route path="/members" element={<Members />}/>
        <Route path="/stats" element={<Stats />}/>
        <Route path="/forum"element={<Forum />}/>
        <Route path="/contact"element={<Contact />}/>
        <Route path="/saved-posts" element={<SavedPosts />}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;