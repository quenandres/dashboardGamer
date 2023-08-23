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
  RiSearchLine
} from "react-icons/ri";

export default function App() {
  const[showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }


  return (
    <div className='bg-[#141414] min-h-screen'>
      <sidebar className={`bg-[#141414] fixed top-0 w-80 h-full  border-r border-gray-800 p-8 flex flex-col justify-between transition-all lg:left-0 ${showMenu ? "left-0" : "-left-full"}`}>
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
      className="lg:hidden bg-blue-600 text-white fixed bottom-4 right-6 p-2 text-lg rounded-full">
        { showMenu ? <RiCloseFill /> : <RiMenu5Line /> }
      </button>
    </sidebar>
    <header className="fixed pl-[340px] w-full flex items-start justify-between p-8 text-white">
      <nav className="flex items-center gap-4">
          <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-full">Discover</a>
          <a href="#" className="text-gray-500 py-2 px-4 rounded-full">Browse</a>
          <a href="#" className="text-gray-500 py-2 px-4 rounded-full">Wish List</a>
      </nav>
      <div>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#" className="text-gray-500 text-lg">
                {"  "}
                <RiNotification3Line />
              </a>
              </li>
              <li>
                <form className="relative">
                  <RiSearchLine className="text-gray-500 absolute top-3 left-1"/>
                  <input type="text" placeholder="search" className="bg-[#232323] outline-none text-gray-300 pl-8 pr-4 rounded-full" />
                </form>
              </li>
          </ul>
      </div>
    </header>
  </div>
  )
}