import React from "react"
import Header from "./components/Header"
import Body from "./components/Body"
import Recomended from "./components/Recomended"
import UpcomingEvents from "./components/UpcomingEvents"
function App() {
  return (
    <>
      <div className="">
        <Header />
        <Body className='absolute'/>
        <div className="relative md:mt-[-10%] mt-[-30%] flex justify-center items-center">
          <Recomended  />
        </div>
        <UpcomingEvents/>
      </div>
    </>
  )
}

export default App
