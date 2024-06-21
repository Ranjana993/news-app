/* eslint-disable react/prop-types */


const ButtonGrp = ({ category, handleCategoryChange }) => {
  return (
    <div>
      <div className="flex justify-center  mt-8 px-8">
        <button onClick={() => handleCategoryChange('all')} className={`transition-all duration-500 hover:scale-110 button text-white${category === 'all' ? 'bg-blue-600 text-white' : ''}`}>
          All
        </button>
        <button onClick={() => handleCategoryChange('business')} className={`transition-all duration-500 hover:scale-110 button text-white ${category === 'business' ? 'bg-blue-600 text-white' : ''}`}>
          Business
        </button>
        <button onClick={() => handleCategoryChange('technology')} className={`transition-all duration-500 hover:scale-110 button text-white ${category === 'technology' ? 'bg-blue-600 text-white' : ''}`}>
          Technology
        </button>
        <button onClick={() => handleCategoryChange('entertainment')} className={`transition-all duration-500 hover:scale-110 button text-white ${category === 'entertainment' ? 'bg-blue-600 text-white' : ''}`}>
          Entertainment
        </button>
      </div>
    </div>
  )
}

export default ButtonGrp