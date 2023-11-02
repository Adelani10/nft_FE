import { appContext } from "@/context"
import { Modal, Input } from "@web3uikit/core"
import { useContext, useState } from "react"
import { marketplaceAbi } from "@/constants"
import { ethers } from "ethers"
import { useNotification } from "@web3uikit/core"
import { useWeb3Contract } from "react-moralis"

export default function UpdateListing({ nftAddress, tokenId }) {
    const [priceToUpdateListingWith, setPriceToUpdateListingWith] = useState("0")
    const { handleModalFalse, showModal, marketplaceContractAddress } = useContext(appContext)
    const dispatch = useNotification()

    const {
        runContractFunction: updateListing,
        isFetching: isFetchingUpdate,
        isLoading: isLoadingUpdate,
    } = useWeb3Contract({
        abi: marketplaceAbi,
        contractAddress: marketplaceContractAddress,
        functionName: "updateListing",
        params: {
            nftAddress: nftAddress,
            tokenId: tokenId,
            newPrice: ethers.utils.parseEther(priceToUpdateListingWith),
        },
    })

    const {
        runContractFunction: cancelListing,
        isFetching: isFetchingCancellation,
        isLoading: isLoadingCancellation,
    } = useWeb3Contract({
        abi: marketplaceAbi,
        contractAddress: marketplaceContractAddress,
        functionName: "cancelListing",
        params: {
            nftAddress: nftAddress,
            tokenId: tokenId,
        },
    })

    const handleUpdateListingSuccess = async (tx) => {
        try {
            await tx.wait(1)
            dispatch({
                type: "success",
                message: "Price updated successfully",
                title: "Update Listing",
                position: "topR",
            })
            handleModalFalse()
            setPriceToUpdateListingWith("0")
        } catch (error) {
            console.log(error)
        }
    }

    const handleCancelSuccess = async (tx) => {
        try {
            await tx.wait(1)
            dispatch({
                type: "success",
                message: "Listing cancelled",
                title: "Cancel Listing",
                position: "topR",
            })
            handleModalFalse()
            setPriceToUpdateListingWith("0")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Modal
                cancelText="Cancel"
                id="regular"
                isVisible={showModal}
                isOkDisabled={isFetchingUpdate || isLoadingUpdate}
                isCancelDisabled={isFetchingUpdate || isLoadingUpdate}
                okText={"Update"}
                onCancel={async () => {
                    await cancelListing({
                        onError: (error) => console.log(error),
                        onSuccess: handleCancelSuccess
                    })
                }}
                onCloseButtonPressed={handleModalFalse}
                onOk={async () => {
                    await updateListing({
                        onError: (error) => console.log(error),
                        onSuccess: handleUpdateListingSuccess,
                    })
                }}
                title="Update Listing"
            >
                <Input
                    label="Update Listing Price in ETH"
                    name="New Listing Price"
                    type="number"
                    width="100%"
                    onChange={(event) => setPriceToUpdateListingWith(event.target.value)}
                />
            </Modal>
        </div>
    )
}
