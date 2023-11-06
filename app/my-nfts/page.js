"use client"
import { useState, useContext, useEffect } from "react"
import { useNFTBalances } from "react-moralis"
import { appContext } from "@/context"

export default function MyNfts() {
    const [nftBalances, setNftBalances] = useState(null)
    const { account, chainIdHex, isWeb3Enabled } = useContext(appContext)
    const { getNFTBalances, data, error, isLoading, isFetching } = useNFTBalances()

    const updateUI = async () => {
        const response = await getNFTBalances({
            params: {
                chain: chainIdHex,
                address: account,
            },
        })
        console.log(response)
        setNftBalances(response)
    }

    useEffect(() => {
        updateUI()
    }, [account, isWeb3Enabled])

    return (
        <div className="container mx-auto px-6">
            {isWeb3Enabled ? (
                <div className="">Currently in the works</div>
            ) : (
                <div>Please connect wallet</div>
            )}
        </div>
    )
}
