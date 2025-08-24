import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { jobs } from "./data/jobs";
import JobDetails from "./pages/JobDetails";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full bg-gray-100">
        {/* Navbar */}
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            JobFinder
          </Link>
          <Link
  to="/login"
  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
>
  Login
</Link>
        </nav>

        {/* Routes */}
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                {/* Hero */}
                {/* Hero */}
                <header className="flex-1 flex flex-col items-center justify-center bg-blue-600 text-white px-6 text-center py-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Find Your Next Dream Job 🚀
                  </h2>
                  <p className="text-base md:text-lg mb-8">
                    Search thousands of jobs in tech, design, and more.
                  </p>

                  {/* Search Bar with visible border and text */}
                  <form
                    onSubmit={handleSearch}
                    className="flex w-full max-w-lg border-2 border-white rounded-lg overflow-hidden bg-white"
                  >
                    <input
                      type="text"
                      placeholder="Search by job title..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="flex-1 px-4 py-2 text-gray-800 placeholder-gray-400 outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-gray-400 font-lightbold px-4 md:px-6 py-2 hover:bg-gray-500"
                    >
                      Search
                    </button>
                  </form>
                </header>

                {/* Main */}
                <main className="flex-grow p-6 bg-gray-50">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">
                    Latest Jobs
                  </h3>
                  {filteredJobs.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredJobs.map((job) => (
                        <div
                          key={job.id}
                          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                        >
                          <h4 className="font-bold text-lg text-gray-600">
                            {job.title}
                          </h4>
                          <p className="text-gray-600">
                            Company: {job.company}
                          </p>
                          <p className="text-gray-500">
                            Location: {job.location}
                          </p>
                          <Link
                            to={`/job/${job.id}`}
                            className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            View Details
                          </Link>

                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 mt-6">
                      No jobs found for "{search}".
                    </p>
                  )}
                </main>
              </>
            }
          />

          {/* Job Details */}
          <Route path="/job/:id" element={<JobDetails />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-white shadow-inner py-4 text-center text-gray-600">
          © {new Date().getFullYear()} JobFinder. Built by Kudostech with React & Tailwind.
        </footer>
      </div>
    </Router>
  );
}

export default App;
