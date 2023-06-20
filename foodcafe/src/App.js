import "./App.css";
import Category from "./Category";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Menu from "./menuapi";
import { useState } from "react";
import Increment from "./Components/increment";
import Addition from "./Components/Addition";
import Decrement from "./Components/Decrement";
function App() {
  const [data, setdata] = useState(Menu);
 

  const uniquelist=Menu.map((curelm)=>curelm.category)

  return (
    <>
      <NavBar />

      <header>
        <div class="py-4 px-2 lg:mx-4 xl:mx-12 text-center">
          <div class="">
            <nav class=" flex items-center justify-between flex-wrap  ">
              <div class="block lg:hidden">
                <button class="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                  <svg
                    class="fill-current h-6 w-6 text-gray-700"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
              <div
                id="main-nav"
                class="w-full flex-grow flex items-center lg:w-auto "
              >
                <div class="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8">
                  <Category data={uniquelist}  Menu={Menu} setdata={setdata}/>
                  <a
                 href="#home"
                 class="block lg:inline-block text-md font-bold  text-orange-500  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                onClick={()=>setdata(Menu)}
               >
                 ALL
               </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-3">
        <Card data={data} />
      </div>
      <Increment/>
      <hr className="p-0.5 bg-red-500"/>
      <Addition/>
      <hr className="p-0.5 bg-red-500"/>
      <Decrement/>
      <Footer />
    </>
  );
}

export default App;
