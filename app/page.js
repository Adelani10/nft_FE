"use client"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
import { useWeb3Contract } from "react-moralis"
import { whitelistAbi, nftAbi } from "@/constants"
import { useState, useEffect, useContext } from "react"
import { ethers } from "ethers"
import { useNotification } from "@web3uikit/core"
import { appContext } from "@/context"

export default function Home() {
    const [amtMinted, setAmtMinted] = useState("0")
    const [maxNumberOfTokens, setMaxNumberOfTokens] = useState("0")
    const [uiPrice, setUiPrice] = useState("0")
    const [isAddyWhitelisted, setIsAddyWhitelisted] = useState(null)
    const dispatch = useNotification()

    const { nftContractAddress, whitelistContractAddress, isWeb3Enabled, images, account } =
        useContext(appContext)

    const {
        runContractFunction: getMaxNumberOfTokens,
        isFetching: isFetchingMaxNumberOfTokens,
        isLoading: isLoadingMaxNumberOfTokens,
    } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: nftContractAddress,
        functionName: "getMaxNumberOfTokens",
        params: {},
    })

    const {
        runContractFunction: totalSupply,
        isFetching: isFetchingTotalSupply,
        isLoading: isLoadingTotalSupply,
    } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: nftContractAddress,
        functionName: "totalSupply",
        params: {},
    })

    const { runContractFunction: getPrice } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: nftContractAddress,
        functionName: "getPrice",
        params: {},
    })

    const { runContractFunction: isAddressWhitelisted } = useWeb3Contract({
        abi: whitelistAbi,
        contractAddress: whitelistContractAddress,
        functionName: "isAddressWhitelisted",
        params: {
            _address: account,
        },
    })

    const {
        runContractFunction: mint,
        isFetching: isFetchingMint,
        isLoading: isLoadingMint,
    } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: nftContractAddress,
        functionName: "mint",
        params: {},
        msgValue: isAddyWhitelisted ? "0" : uiPrice,
    })

    const handleMintSuccess = async (tx) => {
        try {
            await tx.wait(1)
            updateUI()
            dispatch({
                type: "success",
                message: "Minted successfully",
                title: "Mint Notification",
                position: "topR",
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUI()
        }
    }, [isWeb3Enabled])

    const updateUI = async () => {
        const totalSupplyFromCall = (await totalSupply()).toString()
        const maxNumberOfTokensFromCall = (await getMaxNumberOfTokens()).toString()
        const priceFromCall = (await getPrice()).toString()
        const isAddressWhitelistedFromCall = await isAddressWhitelisted()
        setAmtMinted(totalSupplyFromCall)
        setMaxNumberOfTokens(maxNumberOfTokensFromCall)
        setUiPrice(priceFromCall)
        setIsAddyWhitelisted(isAddressWhitelistedFromCall)
    }

    return (
        <main className="pt-4 px-6 container mx-auto ">
            {isWeb3Enabled ? (
                <div className="flex flex-col space-y-8">
                    <h1 className="sm:text-8xl text-6xl text-center">
                        DU<span className="text-red-700">R</span>KI
                        <span className="text-sky-600">O</span>S
                    </h1>
                    <section className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 px-5 sm:px-0">
                        <div className="flex flex-col space-y-1 sm:max-w-[50%]">
                            <h2 className="capitalize font-bold text-2xl text-stone-400">
                                every Durk is unique!
                            </h2>
                            <p className="tracking-widest sm:tracking-tighter text-stone-300 sm:test-sm">
                                The Durkios are 20 uniquely generated characters built and developed
                                on the Ethereum blockchain. Each Duck is different and can be owned
                                by a single person. Mint your Ducks for just 0.01 ETH, or apply for
                                whitelist in order to be eligible to mint for free. Early minters
                                will have the chance to win free Durk Nft airdrops and take part in
                                upcoming giveaways, as well as get the chance to win whitelists from
                                collab projects in the future. Don't miss out!!!
                            </p>
                        </div>

                        <div className="rounded-lg items-center bg-white text-sky-700 font-bold md:w-1/2 w-[75%] mx-auto flex flex-col p-6 space-y-4">
                            <h2 className="text-2xl">
                                {amtMinted}/{maxNumberOfTokens} minted
                            </h2>
                            <h2 className="">
                                1 DCK = {ethers.utils.formatUnits(uiPrice, "ether")} ETH
                            </h2>

                            <button
                                onClick={async () =>
                                    await mint({
                                        onError: (error) => console.log(error),
                                        onSuccess: handleMintSuccess,
                                    })
                                }
                                className="bg-red-600 py-3 disabled:bg-red-400 uppercase rounded-xl flex justify-center items-center text-white tracking-widest w-full shadow-md hover:shadow-sky-800"
                                disabled={isFetchingMint || isLoadingMint}
                            >
                                {isFetchingMint || isLoadingMint ? (
                                    <div className="spinner-border animate-spin h-8 w-8 border-b-2 rounded-full"></div>
                                ) : (
                                    "mint"
                                )}
                            </button>
                        </div>
                    </section>

                    <div className="flex flex-col justify-center items-center sm:space-x-6 space-y-3 sm:max-w-full sm:space-y-0 sm:flex-row">
                        {images.map((image, index) => (
                            <Image
                                alt={"Durkio"}
                                key={index}
                                src={image}
                                width={200}
                                height={200}
                            />
                        ))}
                    </div>

                    <div className="flex items-center justify-between container mx-auto text-3xl">
                        <div className="flex items-center space-x-6">
                            <Link href="www.github.com/Adelani10" className="hover:text-sky-600">
                                <FaGithub />
                            </Link>

                            <Link
                                href="www.twitter.com/laniplaydirty"
                                className="hover:text-sky-600"
                            >
                                <FaTwitter />
                            </Link>

                            <Link
                                href="www.twitter.com/laniplaydirty"
                                className="hover:text-sky-600"
                            >
                                <FaLinkedin />
                            </Link>
                        </div>

                        <div>
                            <Link
                                href="https://sepolia.etherscan.io/address/0xe0E8CA6553C3079e2027103552e07B3d203DC21C"
                                className="contract underline hover:text-sky-600"
                                target="_blank"
                            >
                                Contract
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Web3 is currently not enabled. Connect wallet!</div>
            )}
        </main>
    )
}
