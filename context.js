"use client"
import { createContext, useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { ImRoad } from "react-icons/im"
import { BsImages } from "react-icons/bs"
import { usePathname } from "next/navigation"
import { contractAddresses } from "./constants"
import { useMoralis } from "react-moralis"
import { useQuery } from "@apollo/client"
// import GET_ACTIVE_ITEMS from "./constants/subgraphQueries"

const appContext = createContext(null)

function Context({ children }) {
    const pathname = usePathname()
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
    const images = ["/duck-8.svg", "/duck-15.svg", "/duck-17.svg"]
    const { isWeb3Enabled, account, chainId: chainIdhex } = useMoralis()
    const chainId = parseInt(chainIdhex)
    const nftContractAddress =
        chainId in contractAddresses ? contractAddresses[chainId]["Nft"][0] : null
    const whitelistContractAddress =
        chainId in contractAddresses ? contractAddresses[chainId]["Whitelist"][0] : null
    const marketplaceContractAddress =
        chainId in contractAddresses ? contractAddresses[chainId]["Marketplace"][0] : null

//    const {data: listing, error, loading} = useQuery(GET_ACTIVE_ITEMS)
//    const {activeItems} = listing
//    console.log(activeItems)


    const toggleSideBar = () => {
        setSideBar(!sideBar)
    }

    return (
        <appContext.Provider
            value={{
                sideBar,
                toggleSideBar,
                data,
                images,
                pathname,
                chainId,
                isWeb3Enabled,
                account,
                nftContractAddress,
                whitelistContractAddress,
                marketplaceContractAddress,
            }}
        >
            {children}
        </appContext.Provider>
    )
}

export { appContext, Context }
