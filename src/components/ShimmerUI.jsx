
const Shimmer = () => {
  return (
    <div className="p-4 flex flex-col lg:flex-row flex-wrap gap-8 items-center justify-center">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="bg-pure-greys-100 rounded-lg p-4 animate-pulse w-[90%] mt-8 lg:w-[20%] flex flex-col space-y-4"
        >
          <div className="h-48 bg-gray-400 rounded-lg"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded w-3/4"></div>
            <div className="h-4 bg-gray-400 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
