import { appContext } from "@/context"
import { useContext } from "react"
// import { useWeb3Contract } from "react-moralis"
// import { marketplaceAbi } from "@/constants"
// import { ethers } from "ethers"

export default function Listings() {
    const { marketplaceContractAddress, nftContractAddress, } = useContext(appContext)

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
        <div className="flex flex-col container capitalize mx-auto">
            <button>list</button>
        </div>
    )
}
