/* eslint-disable react/prop-types */
import Card from "./Card"

const NewsContainer = ({ data }) => {
  return (
    <div className="p-4 flex flex-col lg:flex-row  flex-wrap gap-3 items-center justify-center">
      {data?.map((item, index) => (

        <Card key={index} item={item} />
      ))}
    </div>
  )
}

export default NewsContainer