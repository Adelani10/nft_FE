"use client"

import Link from "next/link"
import { GrTextAlignCenter } from "react-icons/gr"
import { ImRoad } from "react-icons/im"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsImages } from "react-icons/bs"
import { ConnectButton } from "@web3uikit/web3"
import { Modal, useNotification, Input } from "@web3uikit/core"
import { useState } from "react"
import { whitelistAbi, contractAddresses } from "@/constants"
import { useMoralis, useWeb3Contract } from "react-moralis"

export default function Header() {
    const [showModal, setShowModal] = useState(false)
    const [address, setAddress] = useState("0x00000000")
    const { isWeb3Enabled, chainId: chainIdhex, account } = useMoralis()
    const chainId = parseInt(chainIdhex)
    const dispatch = useNotification()

    const contractAddress =
        chainId in contractAddresses ? contractAddresses[chainId]["Whitelist"][0] : null

    const handleModalFalse = () => {
        setShowModal(false)
    }

    const handleModalTrue = () => {
        setShowModal(true)
    }

    const {
        runContractFunction: addWhitelist,
        isFetching: isFetchingAddingwhitlist,
        isLoading: isLoadingAddingWhitelist,
    } = useWeb3Contract({
        abi: whitelistAbi,
        contractAddress: contractAddress,
        functionName: "addWhitelist",
        params: {
            _address: address,
        },
    })

    const handleWhitelistingSuccess = async (tx) => {
        try {
            await tx.wait(1)
            dispatch({
                type: "success",
                message: "Whitelisted",
                title: "Tx Success",
                position: "topR",
            })
            handleModalFalse()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <nav className="py-8 border-b">
            <div className=" container mx-auto flex justify-between pl-5 md:pl-0 items-center">
                <button className="md:hidden text-2xl">
                    <GrTextAlignCenter />
                </button>

                <div className="md:flex hidden items-center space-x-3 lg:space-x-8 sm:space-x-5">
                    <Link href="/marketplace" className="flex space-x-1 item-center">
                        <AiOutlineShoppingCart />
                        <h3>Marketplace</h3>
                    </Link>
                    <Link href="/roadmap" className="flex space-x-1 item-center">
                        <ImRoad />
                        <h3>Roadmap</h3>
                    </Link>
                    <Link href="/my-nfts" className="flex space-x-1 item-center">
                        <BsImages />
                        <h3>My Nfts</h3>
                    </Link>
                </div>

                <div className=" ">
                    <Modal
                        cancelText="Cancel"
                        id="regular"
                        isVisible={showModal}
                        okText="Whitelist"
                        onCancel={handleModalFalse}
                        onCloseButtonPressed={handleModalFalse}
                        onOk={async () => {
                            await addWhitelist({
                                onSuccess: handleWhitelistingSuccess,
                                onError: (error) => {
                                    dispatch({
                                        type: "error",
                                        message: "Tx Failed!",
                                        title: "Tx Error",
                                        position: "topR",
                                    })
                                    console.log(error)
                                }
                            })
                        }}
                        title="Add To Whitelist"
                    >
                        <Input
                            label="Address"
                            width="100%"
                            onChange={(event) => setAddress(event.target.value)}
                        />
                    </Modal>
                    <button
                        onClick={() => handleModalTrue()}
                        className="bg-sky-800 md:px-4 rounded-lg p-2"
                    >
                        Add WL!!
                    </button>
                </div>

                <div className="">
                    <ConnectButton />
                </div>
            </div>
        </nav>
    )
}
