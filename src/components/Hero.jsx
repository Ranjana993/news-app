import React from 'react';

const HeroSection = () => {
  const headline = "Breaking News: Major Event Unfolds";
  const summary = "World leaders convene at the Global Summit 2024 to discuss and strategize on urgent climate action. Explore the key takeaways, impactful speeches, and future plans unveiled at this historic event."; 

  return (
    <div className="relative bg-gray-800 p-8">
      <div className="absolute inset-0 ">
        <img
          src={"https://i.pinimg.com/564x/b1/39/13/b13913b5fc9ef1e9af780195763d7c75.jpg"}
          alt="Headline News"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{headline}</h1>
        <p className="mb-6">{summary}</p>
        <div className="flex space-x-4">
          <a href="#" className="bg-blue-600 px-4 py-2 rounded text-sm">Read More</a>
          <a href="#" className="bg-gray-700 px-4 py-2 rounded text-sm">Trending</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
