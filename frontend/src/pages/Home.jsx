import Features from "../components/Features"
import Slide from "../components/Slide"
import {cards} from "../data"
import CatCard from '../components/CatCard';




const Home = () => {
  return (
    <div>
      <Features/> 
      <Slide arrowsScroll={5} slidesToShow={5}>
        {cards.map((card)=>(
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
    </div>
  )
}

export default Home