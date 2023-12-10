import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API } from "../utils/constants";

const Head = () => {
  const [search, setSearch] = useState("");
  const [suggestions,setSuggestion]=useState([]);
  const [showSuggestion,setShowSuggestion]=useState(false);
  // console.log(search)
  useEffect(() => {
    const Timer = setTimeout(() => {
      fetchSearch();
    }, 200);
    return () => {
      clearTimeout(Timer);
    };
  }, [search]);

  const fetchSearch = async () => {
    const Data = await fetch(SEARCH_API + search);
    const DataJson = await Data.json();
    // console.log("API is called", search);
    setSuggestion(DataJson[1])
    setShowSuggestion(DataJson[1])
    // console.log(DataJson[1])
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 ml-[4px] mt-2 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="Hamburger Menu"
        />

        <img
          className="h-14 mb-2"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
          alt="YouTube"
        />
      </div>
      <div className="col-span-10 mt-2 ml-80">
        <div>
          <input
            className="w-1/2 text-center border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onfocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
            // onClick={()=>setSearch(su)}
            
          />
          <button className="border border-gray-400 p-2 rounded-r-full">
            Search
          </button>
        </div>
        {showSuggestion && <div className=" bg-white text-lg w-[30%] rounded-lg shadow-lg absolute">
          <ul>
            {/* <li className="pb-3 hover:bg-gray-100 rounded-lg">iphone pro</li>
            <li className="pb-3 hover:bg-gray-100 rounded-lg">iphone pro max</li>
            <li className="pb-3 hover:bg-gray-100 rounded-lg">iphone pro max1</li>
            <li className="pb-3 hover:bg-gray-100 rounded-lg">iphone pro max1</li>
            <li className="pb-3 hover:bg-gray-100 rounded-lg">iphone pro max1</li>
            <li className="pb-3 hover:bg-gray-100 rounded-lg">iphone pro max1</li> */}
            {
              suggestions.map((ele)=>
              (<li key={ele} className="hover:bg-gray-100 rounded-lg pl-5 py-1 ">{ele}</li>))
            }
          </ul>
        </div>}
      </div>
      <div>
        <img
          className="h-8 col-span-1 mt-4 "
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default Head;
