import React from 'react'

const FiverrPro = () => {
  return (
    <div className='w-full  bg-[#003912] flex rounded py-10 text-white px-14 rounded-2xl'>
        <div className='w-1/2 flex flex-col gap-6'>
         <h1 className='text-4xl font-bold'>fiverr.pro</h1>
         <h1 className='text-5xl leading-[60px] w-[70%]'>New e-Commerce
         project management service made for your business</h1>
         <h4 className='text-xl w-[88%] font-semibold'>An experienced e-Commerce project manager will plan, coordinate, and execute your project. Overseeing a team of e-Commerce experts, they'll handle everything from site building, design and content to optimization, marketing strategies, and UGC videos.</h4>
         <h4 className='text-xl font-semibold'>To get started, you should have :</h4> 
         <div className='pl-3'>
            <h4 className='text-xl font-semibold'>An e-Commerce project requiring expertise in various fields</h4>
            <h4 className='text-xl font-semibold'>A budget exceeding $1000</h4>
            <h4 className='text-xl font-semibold'>A desire to get things done, without the hassle</h4>
         </div>
         <div>
         <button className='bg-[#FC832B] py-3 px-9 rounded font-bold'>Get Started</button>
         </div>
        </div>
        <div className='w-1/2 h-full flex items-center justify-center py-28'>
         <div className='w-full'>
         <img className='object-cover' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d85c8f7113e7f18d6fca144840de5afa-1718619183018/X1.png" alt="" />
         </div>
        </div>
    </div>
  )
}

export default FiverrPro