
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout =()=>{
    return(
        <div>
           <main className="min-h-screen container">
            {/* header */}
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