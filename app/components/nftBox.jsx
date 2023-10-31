import { appContext } from "@/context"
import { useContext, useEffect, useState } from "react"
import { useWeb3Contract } from "react-moralis"
import { nftAbi, marketplaceAbi } from "@/constants"
import Image from "next/image"
import { Card } from "@web3uikit/core"
import UpdateListing from "./updateListing"
import { FaAngleRight } from "react-icons/fa"
import { useNotification } from "@web3uikit/core"
import { ethers } from "ethers"

export default function NftBox({ buyer, seller, nftAddress, tokenId, price }) {
    const [imageUri, setImageUri] = useState("")
    const [tokenName, setTokenName] = useState("")
    const [tokenDescription, setTokenDescription] = useState("")
    const {
        isWeb3Enabled,
        nftContractAddress,
        marketplaceContractAddress,
        account,
        showModal,
        handleModalTrue,
        handleModalFalse,
    } = useContext(appContext)
    const dispatch = useNotification()

    const {
        runContractFunction: tokenURI,
        isFetching: isFetchingTokenURI,
        isLoading: isLoadingTokenURI,
    } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: nftContractAddress,
        functionName: "tokenURI",
        params: {
            _tokenId: tokenId,
        },
    })

    const {
        runContractFunction: buyItem,
        isFetching: isFetchingbuyItem,
        isLoading: isLoadingbuyItem,
    } = useWeb3Contract({
        abi: marketplaceAbi,
        contractAddress: marketplaceContractAddress,
        functionName: "buyItem",
        params: {
            nftAddress: nftAddress,
            tokenId: tokenId,
        },
        msgValue: price
    })

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUI()
        }
    }, [isWeb3Enabled])

    const handleBuySuccess = async (tx) => { 
        try {
            await tx.wait(1)
            dispatch({
                type: "success",
                message: "Price updated successfully",
                title: "Update Listing",
                position: "topR",
            })
        } catch (error) {
            console.log(error)
        }
    }

    const isOwnedByUser = seller === account || seller === undefined
    const notSellerFormatting = `${seller.slice(0, 4)}...${account.slice(seller.length - 4)}`
    const formattedSellerAddress = isOwnedByUser ? "you" : notSellerFormatting

    const updateUI = async () => {
        const tokenUriFromCall = await tokenURI()
        if (tokenUriFromCall) {
            const requestURL = tokenUriFromCall.replace("ipfs://", "https://ipfs.io/ipfs/")
            const tokenURIResponse = await (await fetch(requestURL)).json()
            const imageURI = tokenURIResponse.image
            const imageURIURL = imageURI.replace("http://", "https://ipfs.io/ipfs/")
            setImageUri(imageURIURL)
            setTokenName(tokenURIResponse.name)
            setTokenDescription(tokenURIResponse.description)
        }
    }

    return (
        <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold">Recently Listed</h1>
            <div className="grid sm:grid-cols-3 lg:grid-cols-5 justify-center gap-2">
                {showModal && <UpdateListing nftAddress={nftAddress} tokenId={tokenId} />}
                {imageUri ? (
                    <Card
                        title={tokenName}
                        description={tokenDescription}
                        className="flex flex-col space-y-2"
                        onClick={async () => {
                            if (isOwnedByUser) {
                                handleModalTrue()
                            } else {
                                await buyItem({
                                    onError: (error) => console.log(error),
                                    onSuccess: handleBuySuccess
                                })
                            }
                        }}
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="text-bold text-2xl self-end">{`#${tokenId}`}</h2>
                            <FaAngleRight />
                        </div>
                        <h2>Owned by {formattedSellerAddress}</h2>
                        <Image
                            alt="Nft"
                            src={imageUri}
                            width={150}
                            height={150}
                            className="mx-auto"
                        />
                        <h2>{ethers.utils.formatUnits(price, "ether")} ETH</h2>
                    </Card>
                ) : (
                    <div className="animate-spin spinner-border rounded-full h-5 w-5 border-b-2"></div>
                )}
            </div>
        </div>
    )
}
