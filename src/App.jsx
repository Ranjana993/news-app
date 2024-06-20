/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import axios from "axios";
import NewsContainer from "./components/NewsContainer";
import HeroSection from "./components/Hero";
import useDebounce from "./hook/useDebounce ";
import Header from "./components/Navbar";
import Shimmer from "./components/ShimmerUI";


export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const articlesPerPage = 8;

  const debouncedSearchQuery = useDebounce(searchQuery, 500); // Optional debouncing

  const apiKey = "a3b74535337f48e5a6cdfeaca366f2a6";
  const baseUrl = "https://newsapi.org/v2/top-headlines";

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}?country=us&category=business&page=${page}&pageSize=${articlesPerPage}&q=${debouncedSearchQuery}&apiKey=${apiKey}`);
      console.log("response", response);
      setData(response?.data?.articles || []);
      setTotalResults(response?.data?.totalResults || 0); // Total results to manage pagination
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [page, debouncedSearchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setPage(1); // Reset to the first page on search query change
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <>
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <HeroSection />
      {loading ? <Shimmer /> : <NewsContainer data={data} />}
      <div style={{ margin: "20px", textAlign: "center" }}>
        <button
          onClick={handlePreviousPage}
          className="button"
          disabled={page === 1}
        >
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>Page {page}</span>
        <button
          onClick={handleNextPage}
          className="button"
          disabled={page * articlesPerPage >= totalResults}
        >
          Next
        </button>
      </div>
    </>
  );
}
