import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import loader from "../assets/loader.gif"

const DetailedPage = () => {
  const { name } = useParams();
  const [article, setArticle] = useState(null);
  const [latestNews, setLatestNews] = useState([]);
  const apiKey = "a3b74535337f48e5a6cdfeaca366f2a6";
  const baseUrl = "https://newsapi.org/v2/top-headlines";
  const navigate = useNavigate();

  const getArticleData = async () => {
    try {
      const response = await axios.get(`${baseUrl}?country=us&apiKey=${apiKey}`);
      setLatestNews(response.data.articles);
      const articleData = response.data.articles.find(
        (article) => article.source.name === decodeURIComponent(name)
      );
      setArticle(articleData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getArticleData();
  }, [name]);

  if (!article) {
    return <div className="flex items-center justify-center w-full h-screen"> <img className="items-center w-12" src={loader} alt="loader" /> </div> ;
  }

  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (!text) return "In publishing and graphic design, Lorem ipsum is a placeholder.";
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <>
      <div className="flex items-end justify-end">
        <div className="py-4 px-8">
          <p>Published on <span> {formattedDate}</span></p>
        </div>
      </div>
      <div className="bg-white gap-2 px-4">
        <div>
          <h4 className="text-5xl py-4 font-playfair text-pure-greys-700">{article.title}</h4>
          <span className="text-lg text-blue-200 cursor-pointer">
            <Link to={article?.url} target="_blank">Click to know More</Link>
          </span>
          <p className="pr-4 text-lg text-gray-700 font-mono py-12 pt-8">{article.content}</p>
        </div>
        <div>
          <img className="w-[90%] lg:w-[65%]" src={article?.urlToImage} alt="" />
          <p>Author<span className="text-pure-greys-600 text-sm"> {article?.author}</span></p>
        </div>
        <div className="">
          <div className="py-4">
            <p className="pr-4 text-lg text-pure-greys-600">{article.description}</p>
          </div>
        </div>
      </div>

      {/* Latest news */}
      <div className="px-4">
      <h1 className="pt-8 underline text-xl text-pure-greys-500">See other latest news </h1>
        <div className="p-4 flex flex-col lg:flex-row flex-wrap gap-8 items-center justify-center">
          {latestNews.slice(0, 5).map((item, index) => (
            <div key={index} onClick={() => navigate(`/details/${encodeURIComponent(item.source.name)}`)} className="w-[90%] lg:w-[15%] cursor-pointer">
              <div className="rounded-lg border bg-pure-greys-5  border-pure-greys-50 transition-all duration-700 hover:scale-105">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <img className="rounded-t-lg w-full h-40 object-cover" src={item.urlToImage || "https://i.insider.com/667114ee764df161125a9e20?width=1200&format=jpeg"} alt="News" />
                </a>
                <div className="py-2 px-4">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <h5 className="mb-2 text-md font-bold tracking-tight font-playfair text-pure-greys-800">
                      {truncateText(item.title, 60)}
                    </h5>
                  </a>
                  <p className="mb-3 text-sm font-normal text-gray-700 text-pure-greys-400">
                    {truncateText(item.description, 30)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailedPage;
