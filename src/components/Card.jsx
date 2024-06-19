/* eslint-disable react/prop-types */
// src/Card.js

import { Link } from "react-router-dom";

const truncateText = (text, wordLimit) => {
  if (text === "[Removed]") return <p>There are variations Lorem Ipsum available, but the majority have suffered in some form, by injected humour.</p>
  if (!text) return '';
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return (
    <>
      {words.slice(0, wordLimit).join(' ')}{' '}
      <span className="text-red-500">read more...</span>
    </>
  );
};

const Card = ({ item }) => {
  const truncatedDescription = truncateText(item?.description || "There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour, or randomised words which don't look even slightly believable.", 15);

  return (
    <div className="w-[90%] lg:w-[22%] ">
      <div className="rounded-lg shadow-lg bg-pure-greys-5 border border-pure-greys-25">
        <a href="#">
          <img className="rounded-t-lg w-full" src={item?.urlToImage || "https://i.insider.com/667114ee764df161125a9e20?width=1200&format=jpeg"} alt="News" />
        </a>
        <div className="py-5 px-1" >
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700">
            {truncatedDescription}
          </p>
          {/* <Link to={item?.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
