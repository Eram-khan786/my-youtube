import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const Sidebar = () => {
  const isMenuOpen=useSelector((store) => store.app.isMenuOpen)

  // Early Return pattern
  if (!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-56 '>
      <div className='pt-5'>    
      <Link to="/">
         <div className='mb-2 hover:bg-gray-200 p-2 rounded-lg'>Home</div>
      </Link>
       
        <div className='mb-2  hover:bg-gray-200 p-2 rounded-lg'>Shorts</div>
        <div className='mb-5  hover:bg-gray-200 p-2 rounded-lg'>Subscriptions</div>
      </div>
      <div>
        <div className='mb-2  hover:bg-gray-200 p-2 rounded-lg'>Library</div>
        <div className='mb-2  hover:bg-gray-200 p-2 rounded-lg'>History</div>
        <div className='mb-2  hover:bg-gray-200 p-2 rounded-lg'>Watch Later</div>
        <div className='mb-5  hover:bg-gray-200 p-2 rounded-lg'>Liked videos</div>
      </div>
      <div>
        <div className='font-bold mb-2  hover:bg-gray-200 p-2 rounded-lg'>Explore</div>
        <div className='mb-2  hover:bg-gray-200 p-2 rounded-lg'>Trending</div>
        <div className='mb-2  hover:bg-gray-200 p-2 rounded-lg'>Shopping</div>
        <div className='mb-2  hover:bg-gray-200 p-2 rounded-lg'>Music</div>
        <div className='mb-2  hover:bg-gray-200 p-2 rounded-lg'>Films</div>
        <div className='mb-2  hover:bg-gray-200 p-2 rounded-lg'>Live</div>
        <div className='mb-2  hover:bg-gray-200 p-2 rounded-lg'>Gaming</div>
        <div className='mb-2  hover:bg-gray-200 p-2 rounded-lg'>News</div>
        <div className='mb-2  hover:bg-gray-200 p-2 rounded-lg'>Sport</div>
        <div className='mb-2  hover:bg-gray-200 p-2 rounded-lg'>Learning</div>
        <div className='mb-2  hover:bg-gray-200 p-2 rounded-lg'>Fashion & beauty</div>
      </div>
    </div>
  )
}

export default Sidebar