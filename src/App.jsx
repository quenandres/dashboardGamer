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
  RiCloseFill
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
  </div>
  )
}