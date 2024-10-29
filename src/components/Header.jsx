import Navbar from './Navbar.jsx';


const Header = () => {
  return (
    <header className="bg-blue-900 p-2 text-white">
      <div className="flex flex-row justify-between">
        <div className="flex text-[8px] sm:text-xs gap-2 sm:gap-6">
          <h1 className="text-xs sm:text-xl font-extrabold mt-1.5 ml-2">BookMe</h1>
          {/* <button>Home</button>
          <button>About</button>
          <button>Categories</button>
          <button>Contact</button> */}
          <Navbar />
        </div>
        <form className="text-right">
          <input
            type='text'
            name='title'
            placeholder='Search here...'
            // className='font-semibold text-[6px] sm:text-xs text-black bg-white  mb-1 p-0.5 sm:p-1 pl-1 sm:pl-2 rounded-xl w-9/12 p-[0 1.6rem]'
            className='border-1 border-gray-300 text-black bg-white mt-1 h-5 px-1 pr-2 rounded-lg text-[8px] sm:text-xs focus:outline-none'
          // onChange={handleChange}
          >
          </input>
          <button className=''><i className="fa-solid fa-cart-shopping p-1 text-[12px] sm:text-sm"></i></button>
        </form>
      </div>

    </header>
  );
};

export default Header;
