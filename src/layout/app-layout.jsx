
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

const AppLayout =()=>{
    return(
        <div>
           <main className="container min-h-screen">
            <Header/>
            {/* body */}
           </main>
           <Outlet/>
           <div className="p-10 mt-10 text-center bg-gray-800">
            Made With ❤ By Piyush Tirpude
           </div>
        </div>
    )
}


export default AppLayout;