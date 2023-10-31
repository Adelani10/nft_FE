"use client"
import { appContext } from "@/context"
import { useContext } from "react"
import { Card } from "@web3uikit/core"
import NftBox from "../components/nftBox"
// import { useWeb3Contract } from "react-moralis"
// import { marketplaceAbi } from "@/constants"
// import { ethers } from "ethers"

export default function Listings() {
    const { marketplaceContractAddress, loading, listedNfts, isWeb3Enabled } =
        useContext(appContext)

    // const {
    //     runContractFunction: listItem,
    //     isFetching: isFetchingList,
    //     isLoading: isLoadingList,
    // } = useWeb3Contract({
    //     abi: marketplaceAbi,
    //     contractAddress: marketplaceContractAddress,
    //     functionName: "listItem",
    //     params: {
    //         nftAddress: nftContractAddress,
    //         tokenId: 1,
    //         price: ethers.utils.parseEther("0.02"),
    //     },
    // })

    return (
        <div className="flex flex-col container mx-auto">
            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div>
                        {listedNfts.activeItems.map((item, index) => {
                            const { id, buyer, seller, nftAddress, tokenId, price } = item
                            return (
                                <NftBox
                                    key={index}
                                    buyer={buyer}
                                    seller={seller}
                                    nftAddress={nftAddress}
                                    tokenId={tokenId}
                                    price={price}
                                />
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}
