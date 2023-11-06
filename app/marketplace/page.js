"use client"
import { appContext } from "@/context"
import { useContext } from "react"
import NftBox from "../components/nftBox"

export default function Listings() {
    const { loading, listedNfts } = useContext(appContext)

    return (
        <div className="flex flex-col container mx-auto px-6">
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
