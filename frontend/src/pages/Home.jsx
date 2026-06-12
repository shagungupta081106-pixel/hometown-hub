import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center px-6">

      <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}

        <div>

          <h1 className="text-5xl md:text-6xl font-bold text-blue-700 leading-tight">

            Welcome to
            <span className="block text-black">
              Hometown Hub 🌍
            </span>

          </h1>

          <p className="text-gray-700 text-lg mt-6 leading-relaxed">

            Connect with people from your hometown,
            share memories, organize events,
            and build a strong local community digitally.

          </p>

          <div className="flex gap-4 mt-8 flex-wrap">

            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transition-all"
            >
              Get Started
            </Link>

            <Link
              to="/community"
              className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transition-all"
            >
              Explore Communities
            </Link>

          </div>

        </div>

        {/* Right Card */}

        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Why Hometown Hub?
          </h2>

          <div className="space-y-5">

            <div className="bg-blue-50 p-4 rounded-xl">

              <h3 className="font-bold text-lg">
                🌐 Local Communities
              </h3>

              <p className="text-gray-600 mt-1">
                Join communities from your city or village.
              </p>

            </div>

            <div className="bg-blue-50 p-4 rounded-xl">

              <h3 className="font-bold text-lg">
                📅 Community Events
              </h3>

              <p className="text-gray-600 mt-1">
                Organize meetups and local events easily.
              </p>

            </div>

            <div className="bg-blue-50 p-4 rounded-xl">

              <h3 className="font-bold text-lg">
                🖼️ Share Memories
              </h3>

              <p className="text-gray-600 mt-1">
                Post photos and hometown updates instantly.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Home;