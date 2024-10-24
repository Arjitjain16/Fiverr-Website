import Features from "../components/Features"
import Slide from "../components/Slide"
import {cards} from "../data"
import CatCard from '../components/CatCard';
import Freelancer from "../components/Freelancer";




const Home = () => {
  return (
    <div>
      <Features/> 
      <Slide arrowsScroll={5} slidesToShow={5}>
        {cards.map((card)=>(
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
      <Freelancer/>
    </div>
  )
}

export default Home