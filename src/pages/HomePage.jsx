import { useEffect, useState } from "react";
import { fetchJobs } from "../services/jobAPI";
import JobList from "../components/JobList";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const getJobs = async () => {
            const data = await fetchJobs();
            setJobs(data);
        };
        getJobs();
    }, []);

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Job Finder App 🚀</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <JobList jobs={filteredJobs} />
        </div>
    );
};

export default HomePage;
