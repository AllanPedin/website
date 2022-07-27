import React from 'react';


export default function SideBar(){
    const [sideBar, setSideBar] =  React.useState(false)
    function toggleSideBar(){
        console.log(sideBar)
        setSideBar(!sideBar);
    }
    return (
        <>
            <nav className={sideBar ? "Side-Bar-Open" : "Side-Bar-Closed"}>
                <ul>
                    {}
                </ul>
            </nav>
        </>
    )
}