/* eslint-disable react/prop-types */
import Card from "./Card"

const NewsContainer = ({ data }) => {
  return (
    <>
      <h2 className="pt-6 text-3xl text-pure-greys-800 ml-4 font-playfair">Trendy News </h2>
      <div className="p-4 flex flex-col lg:flex-row flex-wrap gap-8 items-center justify-center">
        {
          data?.map((item, index) => (
            <Card key={index} item={item} />
          ))
        }
      </div>
    </>
  )
}

export default NewsContainer