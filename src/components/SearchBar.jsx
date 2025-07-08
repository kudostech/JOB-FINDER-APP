/* eslint-disable react/prop-types */
const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="mb-6 flex justify-center">
            <input
                type="text"
                placeholder="Search jobs by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border rounded p-2 w-full max-w-md focus:outline-none focus:ring focus:border-blue-300"
            />
        </div>
    );
};

export default SearchBar;
