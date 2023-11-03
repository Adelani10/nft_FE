"use client"

import Link from "next/link"
import { GrTextAlignCenter } from "react-icons/gr"
import { ImRoad } from "react-icons/im"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io"
import { BsImages } from "react-icons/bs"
import { Modal, useNotification, Input } from "@web3uikit/core"
import { useContext, useEffect, useState } from "react"
import { whitelistAbi } from "@/constants"
import { useWeb3Contract } from "react-moralis"
import { appContext } from "../../context"
import { ConnectButton } from "@web3uikit/web3"

export default function Header() {
    const [dropDown, setDropDown] = useState(false)
    const [address, setAddress] = useState("0x00000000")
    const [addWhitelistModal, setAddWhitelistModal] = useState(false)
    const [isWhitelisted, setIsWhitelisted] = useState(null)
    const [showCheckModal, setShowCheckModal] = useState(false)
    const dispatch = useNotification()

    const {
        toggleSideBar,
        pathname,
        whitelistContractAddress,
        showModal,
        handleModalFalse,
        handleModalTrue,
        account,
        isWeb3Enabled,
    } = useContext(appContext)

    const {
        runContractFunction: addWhitelist,
        isFetching: isFetchingAddingwhitelist,
        isLoading: isLoadingAddingWhitelist,
    } = useWeb3Contract({
        abi: whitelistAbi,
        contractAddress: whitelistContractAddress,
        functionName: "removeWhitelist",
        params: {
            _address: address,
        },
    })

    const {
        runContractFunction: removeWhitelist,
        isFetching: isFetchingRemovingingwhitelist,
        isLoading: isLoadingRemovingingWhitelist,
    } = useWeb3Contract({
        abi: whitelistAbi,
        contractAddress: whitelistContractAddress,
        functionName: "addWhitelist",
        params: {
            _address: address,
        },
    })

    const {
        runContractFunction: isAddressWhitelisted,
        isFetching: isFetchingIfAddressIsWhitelisted,
        isLoading: isLoadingIfAddressIsWhitelisted,
    } = useWeb3Contract({
        abi: whitelistAbi,
        contractAddress: whitelistContractAddress,
        functionName: "isAddressWhitelisted",
        params: {
            _address: account,
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

    const handleRemovalSuccess = async (tx) => {
        try {
            await tx.wait(1)
            dispatch({
                type: "success",
                message: "Removed Whitelist",
                title: "WL Removal",
                position: "topR",
            })
            handleModalFalse()
        } catch (error) {
            console.log(error)
        }
    }

    const returnModal = (confirmText, func, title) => {
        return (
            <Modal
                cancelText="Cancel"
                id="regular"
                isVisible={showModal}
                okText={confirmText}
                onCancel={handleModalFalse}
                onCloseButtonPressed={handleModalFalse}
                onOk={func}
                title={title}
            >
                <Input
                    label="Address"
                    width="100%"
                    onChange={(event) => setAddress(event.target.value)}
                />
            </Modal>
        )
    }

    const handleWlSuccess = async () => {
        const isWled = await isAddressWhitelisted()
        setIsWhitelisted(isWled)
        if (isWhitelisted === true) {
            dispatch({
                type: "success",
                message: "Congrats, Whitelist",
                title: "WL Status",
                position: "topR",
            })
        } else {
            dispatch({
                type: "error",
                message: "Not, Whitelisted",
                title: "WL Status",
                position: "topR",
            })
        }
        handleModalFalse()
    }

    return (
        <nav className="py-8 border-b pl-6">
            <div className="container mx-auto flex justify-between items-center ">
                <button onClick={() => isWeb3Enabled ? toggleSideBar() : ""} className="lg:hidden text-2xl">
                    <GrTextAlignCenter />
                </button>
                {!pathname.includes("/marketplace") ? (
                    <div className="flex justify-between items-center pl-5 md:pl-0">
                        {addWhitelistModal
                            ? returnModal(
                                  "Whitelist",
                                  async () => {
                                      await addWhitelist({
                                          onSuccess: handleWhitelistingSuccess,
                                          onError: (error) => console.log(error),
                                      })
                                  },
                                  "Add Whitelist",
                              )
                            : returnModal(
                                  "Remove Whitelist",
                                  async () => {
                                      await removeWhitelist({
                                          onSuccess: handleRemovalSuccess,
                                          onError: (error) => console.log(error),
                                      })
                                  },
                                  "Remove Whitelist",
                              )}

                        <div className="lg:flex hidden items-center space-x-3 lg:space-x-8 sm:space-x-5">
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

                        {isWeb3Enabled ? (
                            <div className=" ">
                                <div className="relative lg:hidden hover:scale-125">
                                    {account.localeCompare(
                                        "0xeD670599BacD6B6e50431B49288c4dCE266a26EF",
                                        undefined,
                                        { sensitivity: "base" },
                                    ) === 0 ? (
                                        <button
                                            onClick={() => setDropDown(!dropDown)}
                                            className="flex text-lg space-x-1 bg-sky-800 md:px-4 rounded-lg p-2 items-center justify-center"
                                        >
                                            <h3>Whitelist</h3>
                                            {!dropDown ? (
                                                <IoIosArrowDropdown />
                                            ) : (
                                                <IoIosArrowDropup />
                                            )}
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                setShowCheckModal(true)
                                            }}
                                            className="flex text-lg space-x-1 bg-sky-800 rounded-lg p-2 items-center justify-center"
                                        >
                                            Check WL
                                        </button>
                                    )}
                                </div>

                                {showCheckModal && (
                                    <Modal
                                        cancelText="Cancel"
                                        id="regular"
                                        isVisible={showCheckModal}
                                        okText="Check"
                                        onCancel={() => setShowCheckModal(false)}
                                        onCloseButtonPressed={() => setShowCheckModal(false)}
                                        onOk={async () => {
                                            await isAddressWhitelisted({
                                                onError: (error) => console.log(error),
                                                onSuccess: handleWlSuccess,
                                            })
                                        }}
                                        title="Check WL Status"
                                    >
                                        <Input
                                            label="Address"
                                            width="100%"
                                            onChange={(event) => setAddress(event.target.value)}
                                        />
                                    </Modal>
                                )}

                                <div className="lg:flex hidden text-lg space-x-2 xl:space-x-8">
                                    <button
                                        onClick={() => {
                                            setAddWhitelistModal(true)
                                            handleModalTrue()
                                        }}
                                        className=" bg-sky-800 w-48 rounded-lg py-2"
                                    >
                                        Add WL!! 🫡
                                    </button>
                                    <button
                                        onClick={() => {
                                            setAddWhitelistModal(false)
                                            handleModalTrue()
                                        }}
                                        className=" bg-sky-800 w-48 rounded-lg py-2"
                                    >
                                        Remove WL!! 😡
                                    </button>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                ) : (
                    <div className="flex item-center space-x-24 lg:space-x-48">
                        <Link href="/" className="hidden md:inline-block">
                            Home
                        </Link>
                        <Link href="/marketplace" className="hidden md:inline-block">
                            Listings
                        </Link>
                        <Link href="/marketplace/sell" className="">
                            Sell
                        </Link>
                    </div>
                )}

                <div className="">
                    <ConnectButton />
                </div>

                {dropDown && (
                    <div className="bg-white rounded-md flex -translate-x-[22%] md:-translate-x-[19%] border text-sky-800 flex-col absolute p-2 min-w-[200px]">
                        <button
                            onClick={() => {
                                setDropDown(false)
                                setAddWhitelistModal(true)
                                handleModalTrue()
                            }}
                            className="hover:bg-stone-200 md:px-4 rounded-lg p-2"
                        >
                            Add WL!! 🫡
                        </button>

                        <button
                            onClick={() => {
                                setDropDown(false)
                                setAddWhitelistModal(false)
                                handleModalTrue()
                            }}
                            className=" md:px-4 hover:bg-stone-200 rounded-lg p-2"
                        >
                            Remove WL!! 😡
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}
