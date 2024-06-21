/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import HeroSection from "./Hero";
import ButtonGrp from "./ButtonGrp";
import Shimmer from "./ShimmerUI";
import NewsContainer from "./NewsContainer";
import useDebounce from "../hook/useDebounce "
import toast from "react-hot-toast";

export default function Wrapper() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery] = useState('');
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('all'); 
  const articlesPerPage = 8;

  const debouncedSearchQuery = useDebounce(searchQuery, 500); 

  const apiKey = "a3b74535337f48e5a6cdfeaca366f2a6";
  const baseUrl = "https://newsapi.org/v2/top-headlines";


  const getData = async () => {
    setLoading(true);
    try {
      const categoryQuery = category === 'all' ? '' : `&category=${category}`;
      const response = await axios.get(`${baseUrl}?country=us&page=${page}&pageSize=${articlesPerPage}&q=${debouncedSearchQuery}${categoryQuery}&apiKey=${apiKey}`);
      console.log("response", response);
      setData(response?.data?.articles || []);
      setTotalResults(response?.data?.totalResults || 0);
    } catch (error) {
      toast.error("Error while fetching data " , error.message)
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [page, debouncedSearchQuery, category]); 


  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPage(1); // Reset to the first page on category change
  };

  return (
    <>
      <HeroSection />
      <ButtonGrp handleCategoryChange={handleCategoryChange} category={category} />
      {loading ? <Shimmer /> : <NewsContainer data={data} />}
      <div style={{ margin: "20px", textAlign: "center" }}>
        <button onClick={handlePreviousPage} className="button" disabled={page === 1}>
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>Page {page}</span>
        <button onClick={handleNextPage} className="button" disabled={page * articlesPerPage >= totalResults}>
          Next
        </button>
      </div>
    </>
  );
}
