

import {Link }from "react-router-dom"

const CatCard = ({item}) => {
  return (
   <Link to='/gigs?cat=design'>
    <div className="w-[240px] h-[300px] text-white cursor-pointer relative rounded-lg">
      <img src={item.img} alt="" className="h-full w-full object-contain" />
      <span className="absolute left-8 top-3">{item.desc}</span>
      <span className="absolute left-8 top-10 text-2xl bold">{item.title}</span>
    </div>
   </Link>
  )
}

export default CatCard