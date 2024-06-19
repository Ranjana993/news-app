import { useState } from "react";
import Header from "./components/Navbar";
import NewsContainer from "./components/NewsContainer";
import { useEffect } from "react";
import axios from "axios";
import HeroSection from "./components/Hero";

export default function App() {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a3b74535337f48e5a6cdfeaca366f2a6")
    console.log(response?.data?.articles);
    setData(response?.data?.articles)
  }
  useEffect(() => {

    getData()
  }, [])
  return (
    <>
      <Header />
      <HeroSection/>
      <NewsContainer data={data} />
    </>

  )
}