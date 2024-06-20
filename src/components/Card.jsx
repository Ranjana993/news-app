/* eslint-disable react/prop-types */

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
  if (!item) return <h2>No data Found </h2>
  return (
    <div className="w-[90%] lg:w-[20%] cursor-pointer">
      <div className="rounded-lg shadow-lg bg-pure-greys-5 border border-pure-greys-25  transition-all duration-700 hover:scale-105">
        <a href="#">
          <img className="rounded-t-lg w-full" src={item?.urlToImage || "https://i.insider.com/667114ee764df161125a9e20?width=1200&format=jpeg"} alt="News" />
        </a>
        <div className="py-5 px-1 p-1" >
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight font-playfair text-pure-greys-800">
              {item?.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 text-pure-greys-400">
            {truncatedDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
