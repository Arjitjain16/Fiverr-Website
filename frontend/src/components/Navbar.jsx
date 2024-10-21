import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
    const isActive = ()=>{
        return window.scrollY > 0? setActive(true) : setActive(false);
    }

    useEffect(()=>{
        window.addEventListener('scroll', isActive)
        return () => window.removeEventListener('scroll', isActive)
    }, [])
    
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const {pathname} = useLocation()
    
    const currentUser = {
        id: 1,
        username: 'tevas',
        isSeller : true
    }
  return (
   <div className={active || pathname !== '/' ? `bg-white text-black` : `w-full flex flex-col bg-[#113118] text-white`}>
     <div className="flex items-center justify-between py-3 px-48" style={{transition : `0.8s all ease`}}>
        <h1 className="text-2xl font-bold">Fiverr.</h1>
        <div className="flex items-center gap-5 font-semibold text-sm">
            <h3>Fiverr Business</h3>
            <h3>Explore</h3>
            <h3>English</h3>
            <button>Sign In</button>
            {!currentUser?.isSeller && <h3>Become a Selller</h3>}
           {!currentUser && <button className="border border-white rounded px-3 py-1">Join</button> }
           {currentUser && (
            <div className="flex items-center gap-3 relative" onClick={()=>setOpen(!open)}>
                <img src="https://example.com/profile_pic.jpg" alt="Profile Pic" className="w-8 h-8 rounded-full cursor-pointer"/>
                <span>{currentUser.username}</span>
                {open && (<div className="flex flex-col gap-1 absolute top-11 right-0 bg-white text-gray-300 py-5 px-5 w-44 rounded">
                    {currentUser?.isSeller && (
                         <>
                         <Link to='/gigs'>Gigs</Link>
                         <Link to='/gig'>Add a new Gigs</Link>
                        </> 
                    )}
                    <Link to='/orders'>Order</Link>
                    <Link to='/messages'>Messages</Link>
                    <Link to='/logout'>Logout</Link>
                </div>)}
            </div>
           )}
            
        </div>
      </div>
      {
        active || pathname !=='/' && (
        <>
           <hr className="w-full border-[0.2px] border-gray-200" style={{}}/>  
            <div className="flex item-center justify-between px-48">
                <span>test1</span>
                <span>test2</span>
                <span>test2</span>
                <span>test2</span>
                <span>test2</span>
                <span>test2</span>
                <span>test2</span>
                <span>test2</span>
            </div>
        </>
      )}
   </div>
  )
}

export default Navbar