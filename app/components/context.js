"use client"
import { createContext, useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { ImRoad } from "react-icons/im"
import { BsImages } from "react-icons/bs"

const appContext = createContext(null)

function Context({ children }) {
    const [sideBar, setSideBar] = useState(false)
    const data = [
        {
            href: "/marketplace",
            name: "marketplace",
            icon: <AiOutlineShoppingCart />,
        },
        {
            href: "/roadmap",
            name: "roadmap",
            icon: <ImRoad />,
        },
        {
            href: "/my-nfts",
            name: "my-nfts",
            icon: <BsImages />,
        },
    ]

    const toggleSideBar = () => {
        setSideBar(!sideBar)
    }

    return (
        <appContext.Provider
            value={{
                sideBar,
                toggleSideBar,
                data
            }}
        >
            {children}
        </appContext.Provider>
    )
}

export { appContext, Context }
