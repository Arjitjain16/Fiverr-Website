import Features from "../components/Features"
import Slide from "../components/Slide"
import {cards} from "../data"
import CatCard from '../components/CatCard';
import Freelancer from "../components/Freelancer";
import FiverrPro from "../components/FiverrPro";




const Home = () => {
  return (
    <div className="px-20 py-8">
      <Features/> 
      <Slide arrowsScroll={5} slidesToShow={5}>
        {cards.map((card)=>(
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
      <Freelancer/>
      < FiverrPro/>
    </div>
  )
}

export default Home