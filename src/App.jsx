import { RiHome3Line, RiFirefoxFill, RiLayoutGridLine, RiUserSettingsLine, RiLiveLine } from "react-icons/ri";

export default function App() {
  return (
    <div className='bg-[#141414] min-h-screen'>
      <siderbar className='bg-[#141414] fixed left-0 top-0 w-80 h-full  border-r border-gray-800 p-8'>
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
      </siderbar>
    </div>
  )
}