import Link from "next/link"

function Titulo() {
  return (
    <nav className="bg-yellow-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between py-2">
        <a href="#" className="flex items-center mx-4">
          <img src="./logo.png" className="h-8" alt="Tontera logo" />
        </a>
        <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-multi-level" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
          <ul className="flex flex-col font-medium md:p-0 rounded-lg bg-yellow-100 md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-yellow-100">
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 bg-yellow-100 rounded md:bg-yellow-100 md:text-orange-400 md:p-0" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-yellow-100 md:hover:bg-yellow-100 md:border-0 md:hover:text-orange-400 md:p-0">News</a>
            </li>
            <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-yellow-100 md:hover:bg-yellow-100 md:border-0 md:hover:text-orange-400 md:p-0 md:w-auto">Wiki <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg></button>
              <div id="dropdownNavbar" className="z-10 hidden font-normal bg-yellow-100 divide-y divide-gray-100 rounded-lg shadow w-44">
                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-yellow-100">Npcs</a>
                  </li>
                  <li aria-labelledby="dropdownNavbarLink">
                    <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-yellow-100">Monstros<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg></button>
                    <div id="doubleDropdown" className="z-10 hidden bg-yellow-100 divide-y divide-gray-100 rounded-lg shadow w-44">
                      <ul className="py-2 text-sm text-gray-700" aria-labelledby="doubleDropdownButton">
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-yellow-100">Anfibios</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-yellow-100">Mágicos</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-yellow-100">Humanos</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-yellow-100">Lesmass</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-yellow-100">Quests</a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100">Recompensas</a>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-yellow-100 md:hover:bg-yellow-100 md:border-0 md:hover:text-orange-400 md:p-0">Ranking</a>
            </li>
            <li>
              <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg px-5 py-1 text-center">
                <Link href="/login">
                  Entrar
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Titulo
