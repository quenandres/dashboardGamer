import { useState } from "react";
import { 
  RiHome3Line, 
  RiFirefoxFill, 
  RiLayoutGridLine, 
  RiUserSettingsLine, 
  RiLiveLine, 
  RiSettings2Line, 
  RiMailDownloadLine,
  RiCheckboxBlankCircleFill,
  RiMenu5Line,
  RiCloseFill,
  RiNotification3Line,
  RiSearchLine,
  RiArrowRightSFill
} from "react-icons/ri";

export default function App() {
  const[showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }


  return (
    <div className='bg-[#141414] min-h-screen'>
      <sidebar className={`bg-[#141414] fixed top-0 w-80 h-full  border-r border-gray-800 p-8 flex flex-col justify-between transition-all lg:left-0 z-50 ${showMenu ? "left-0" : "-left-full"}`}>
        <div>
          {/* Logo */}
          <h1 className="text-gray-300 uppercase font-bold text-2-xl tracking-[5px] mb-10">Logo</h1>
          <ul>
            <li>
              <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                <RiHome3Line />
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                <RiFirefoxFill />
                Store
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                <RiLayoutGridLine />
                Library
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                <RiUserSettingsLine />
                Users
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                <RiLiveLine />
                Live
              </a>
            </li>
          </ul>
        </div>
        <div>
        <ul>
          <li>
            <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
              <RiMailDownloadLine />
              Downloads
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
              <RiSettings2Line />
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="relative text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
              <img src="https://img.freepik.com/fotos-premium/photo-of-character-cartoon-anime_963769-1805.jpg" className="w-6 h-6 object-cover rounded-full"/>
              <RiCheckboxBlankCircleFill className="absolute text-green-600 bottom-2 left-8 text-[8px]"/>
              Tron Legacy
            </a>
          </li>
        </ul>
      </div>
      {/* Boton movil */}
      <button 
      onClick={toggleMenu}
      className="lg:hidden bg-blue-600 text-white fixed bottom-4 right-6 p-2 text-lg rounded-full z-50">
        { showMenu ? <RiCloseFill /> : <RiMenu5Line /> }
      </button>
    </sidebar>
    <header className="fixed bg-[#242424] lg:pl-[340px] w-full flex flex-col md:flex-row items-center lg:justify-between gap-4 p-8 text-white z-40">
      <nav className="flex items-center gap-4 order-1 lg:order-none">
          <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-full">Discover</a>
          <a href="#" className="text-gray-500 py-2 px-4 rounded-full">Browse</a>
          <a href="#" className="text-gray-500 py-2 px-4 rounded-full">Wish List</a>
      </nav>
      <div>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#" className="text-gray-500 text-lg">
                {"  "}
                <RiNotification3Line />{"  "}
              </a>
              </li>
              <li className="flex-1">
                <form className="relative">
                  <RiSearchLine className="text-gray-500 absolute top-3 left-2"/>
                  <input 
                  type="text" 
                  placeholder="Search" 
                  className="bg-[#232323] outline-none text-gray-300 py-2 pl-8 pr-4 pt-1 rounded-full w-full" />
                </form>
              </li>
          </ul>
      </div>
    </header>

    {/* Content */}
    <main className="lg:pl-[340px] p-8 pt-36 ">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
        <div className="md:col-span-5 relative">
          <img 
          className="w-full h-[500px] object-cover lg:rounded-tr-xl lg:rounded-br-xl"
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
          <h1 className="absolute top-4 left-4 text-3xl text-white font-bold">League of legends</h1>
          <div className="absolute left-0 bottom-0 p-8 max-w-xl">
            <p className="text-gray-200">Update</p>
            <h2 className="text-4xl text-white font-bold mb-4">The hunt began</h2>
            <button className="bg-blue-600 text-white py-4 px-6 rounded-xl flex items-center gap-4 text-lg group">
              Play for free{" "}
              <RiArrowRightSFill className="group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>

        {/* Games */}
        <div className="col-span-1 h-[500px] bg-[#232323] lg:rounded-tr-xl lg:rounded-br-xl w-full">
          <ul className="p-4 flex flex-col gap-6 h-full overflow-y-scroll">
            <li>
              <a href="#" className="flex items-center gap-4 text-white text-lg md:flex-col lg:flex-row">
                <img src="https://images2.alphacoders.com/131/thumbbig-1319576.webp" 
                className="w-20 h-full object-cover"
                />{" "}
                <span>Sett</span>
              </a>
            </li>          
            <li>
              <a href="#" className="flex items-center gap-4 text-white text-lg md:flex-col lg:flex-row">
                <img src="https://images.alphacoders.com/681/681587.png" 
                className="w-20 h-full object-cover"
                />{" "}
                <span>Zed</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-white text-lg md:flex-col lg:flex-row">
                <img src="https://images4.alphacoders.com/132/thumbbig-1327233.webp" 
                className="w-20 h-full object-cover"
                />{" "}
                <span>Gwen</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-white text-lg md:flex-col lg:flex-row">
                <img src="https://images2.alphacoders.com/132/thumbbig-1327240.webp" 
                className="w-20 h-full object-cover"
                />{" "}
                <span>Nautilus</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-white text-lg md:flex-col lg:flex-row">
                <img src="https://images2.alphacoders.com/131/thumbbig-1319576.webp" 
                className="w-20 h-full object-cover"
                />{" "}
                <span>Sett</span>
              </a>
            </li>          
            <li>
              <a href="#" className="flex items-center gap-4 text-white text-lg md:flex-col lg:flex-row">
                <img src="https://images.alphacoders.com/681/681587.png" 
                className="w-20 h-full object-cover"
                />{" "}
                <span>Zed</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-white text-lg md:flex-col lg:flex-row">
                <img src="https://images4.alphacoders.com/132/thumbbig-1327233.webp" 
                className="w-20 h-full object-cover"
                />{" "}
                <span>Gwen</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-white text-lg md:flex-col lg:flex-row">
                <img src="https://images2.alphacoders.com/132/thumbbig-1327240.webp" 
                className="w-20 h-full object-cover"
                />{" "}
                <span>Nautilus</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
  )
}