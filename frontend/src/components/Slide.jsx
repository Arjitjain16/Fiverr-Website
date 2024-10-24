import Slider from 'infinite-react-carousel';




const Slide = ({children,slidesToShow, arrowsScroll}) => {

  return (
    <div className=' px-48'>
        <div className='w-[100%]'>
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
        {children}
                
        </Slider>
        </div>
    </div>
  )
}

export default Slide