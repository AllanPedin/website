import React from "react"
import * as FaIcons from "react-icons/fa"

import "./TopBar.css"
import { constants } from "../../constants"
import SideBar from "../SideBar/SideBar"


export default function TopBar(){
    const [sideBar, setSideBar] =  React.useState(false)
    function toggleSideBar(){
        console.log(sideBar)
        setSideBar(!sideBar);
    }
    return (
        <>
            <div className='Top-Bar'>
                <div>
                    <FaIcons.FaBars onclick = {toggleSideBar} size = {50} color = "red" className="Nav-Menu-Botton"/>
                </div>
                <div className="Title-Container">
                    <div className="Title">{constants.WEBSITE_TITLE}</div>
                </div>
                <SideBar/>
            </div>
            
        </>
    )
}

   