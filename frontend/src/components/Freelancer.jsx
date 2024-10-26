
const Freelancer = () => {
  return (
    <div className="w-full h-[100vh] flex py-8 px-3 rounded-2xl">
        <div className="w-1/2 flex flex-col gap-9 h-full">
          <h1 className="text-4xl">A whole world of freelance talent at your fingertips</h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/categories.72379ee.svg" alt="" />
                <h2 className="text-2xl">Over 700 categories</h2>
            </div>
            <h1 className="text-2xl text-[#747686]">Get results from skilled freelancers from all over the world, for every task, at any price point.</h1>
          </div>
          <div  className="flex flex-col">
            <div  className="flex items-center gap-3">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/handshake.287b5d3.svg" alt="" />
                <h2>Clear, transparent pricing</h2>
            </div>
            <h1 className="text-2xl text-[#747686]">Pay per project or by the hour (Pro). Payments only get released when you approve..</h1>
          </div>
          <div  className="flex flex-col">
            <div  className="flex items-center gap-3">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lightning.2cded3f.svg" alt="" />
                <h2>Quality work done faster</h2>
            </div>
            <h1 className="text-2xl text-[#747686]">Filter to find the right freelancers quickly and get great work delivered in no time, every time.</h1>
          </div>
          <div  className="flex flex-col">
            <div  className="flex items-center gap-3">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/support.660ad7f.svg" alt="" />
                <h2>24/7 award-winning support</h2>
            </div>
            <h1 className="text-2xl text-[#747686]">Chat with our team to get your questions answered or resolve any issues with your orders.</h1>
          </div>
        </div>
        <div className="w-1/2 h-full">
        <video 
            autoPlay  
            loop 
            muted 
            className="w-full object-cover h-[100%] rounded" 
            src='/public/img/How Fiverr Works EN Subs 4x5.mp4'
            onError={(e) => console.error("Video failed to load:", e)}
        ></video>
        </div>
    </div>
  )
}

export default Freelancer