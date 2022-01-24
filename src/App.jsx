import Header from "./Components/Header"
import React from 'react'
import FeedBackList from "./Components/FeedBackList"
import FeedBackStats from "./Components/FeedBackStats"
import FeedBackForms from "./Components/FeedBackForms"
import About from "./Components/Pages/About"
import{BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AboutIconLink from "./Components/AboutIconLink"
import {FeedBackProvider} from "./Context/FeedbackContext"


export default function App() {    
      
    return (
       <>
       <FeedBackProvider>
       <Router>
       <Header />
        <div className="container">
           <Routes>
               <Route exact path="/" element={
                   <>
                   <FeedBackForms />
            <FeedBackStats  />
            <FeedBackList />
                   </>
               }
               > 
               </Route>
               <Route path="/about" element={<About/>}/>
           </Routes>
           <AboutIconLink/>
        </div>
       </Router>
       </FeedBackProvider>
       </>
    )
}
