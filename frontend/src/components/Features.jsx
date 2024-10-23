
const Features = () => {
  return (
    <div className="bg-[#113118] px-48 flex text-white w-full">
        <div className="flex flex-col justify-center gap-3 w-1/2 ">
            <h1 className="text-3xl font-bold w-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
            <div className="w-full relative">
              <input type="text" className="w-[75%] border py-1 text-black rounded" />
              <button className="bg-red-300 px-3 py-1 absolute right-44">Click me</button>
            </div>
            <div className="flex">
              <h1>popular</h1>
              <button className="bg-slate-200">web Developer</button>
              <button>Wordpress</button>
              <button>Mobile App Developer</button>
              <button>AI dev</button>
            </div>
        </div>
        <div className="w-1/2" >
          <img src="https://github.com/safak/youtube23/blob/fiverr-ui/public/img/man.png?raw=true" alt="" />
        </div>
    </div>
  )
}

export default Features