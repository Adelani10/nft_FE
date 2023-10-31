"use client"

import { Form } from "@web3uikit/core"
import { ethers } from "ethers"
import { nftAbi, marketplaceAbi } from "@/constants"
import { useContext, useEffect, useState } from "react"
import { appContext } from "@/context"
import { useWeb3Contract } from "react-moralis"
import { useNotification } from "@web3uikit/core"
import Button from "@web3uikit/core"

export default function Sell() {
    const { runContractFunction } = useWeb3Contract()
    const dispatch = useNotification()
    const { marketplaceContractAddress, account, isWeb3Enabled, chainId } = useContext(appContext)
    const [proceeds, setProceeds] = useState("0")

    const approveAndList = async (data) => {
        console.log("Approving...")
        const nftAddress = data.data[0].inputResult
        const tokenId = data.data[1].inputResult
        const price = ethers.utils.parseEther(data.data[2].inputResult).toString()

        const approveOptions = {
            abi: nftAbi,
            contractAddress: nftAddress,
            functionName: "approve",
            params: {
                to: marketplaceContractAddress,
                tokenId: tokenId,
            },
        }
        await runContractFunction({
            params: approveOptions,
            onSuccess: (tx) => handleApproveSuccess(tx, nftAddress, tokenId, price),
            onError: (error) => console.log(error),
        })
    }

    const handleApproveSuccess = async (tx, nftAddress, tokenId, price) => {
        await tx.wait(1)
        console.log("Time to list")
        const listOptions = {
            abi: marketplaceAbi,
            contractAddress: marketplaceContractAddress,
            functionName: "listItem",
            params: {
                nftAddress: nftAddress,
                tokenId: tokenId,
                price: price,
            },
        }
        await runContractFunction({
            params: listOptions,
            onSuccess: () => handleListSuccess(),
            onError: (error) => console.log(error),
        })
    }

    const handleListSuccess = async () => {
        dispatch({
            type: "success",
            message: "Successfully listed your NFT!",
            title: "Nft Listing",
            position: "topR",
        })
    }

    const setUpUI = async () => {
        const returnedProceeds = await runContractFunction({
            params: {
                abi: marketplaceAbi,
                contractAddress: marketplaceContractAddress,
                functionName: "getProceeds",
                params: {
                    _address: account,
                },
            },
            onError: (error) => console.log(error),
        })
        if (returnedProceeds) {
            setProceeds(returnedProceeds.toString())
        }
    }

    useEffect(() => {
        setUpUI()
    }, [proceeds, account, isWeb3Enabled, chainId])

    const handleWithdrawSuccess = async () => {
        dispatch({
            type: "success",
            message: "Successfully withdrawn your proceeds!",
            title: "Proceeds Withdrawal",
            position: "topR",
        })
    }

    return (
        <div className="flex flex-col bg-white h-screen">
            <Form
                onSubmit={approveAndList}
                data={[
                    {
                        name: "Nft Address",
                        type: "text",
                        value: "",
                        key: "nftAddress",
                    },
                    {
                        name: "Token Id",
                        type: "number",
                        value: "",
                        key: "tokenId",
                    },
                    {
                        name: "Price (in ETH!)",
                        type: "number",
                        value: "",
                        key: "price",
                    },
                ]}
                title="Sell (List) your NFT!"
                id="Main Form"
            />

            {proceeds != "0" ? (
                <Button
                    onClick={async () => {
                        await runContractFunction({
                            params: {
                                abi: marketplaceAbi,
                                contractAddress: marketplaceContractAddress,
                                functionName: "withdrawProceeds",
                                params: {},
                            },
                            onError: (error) => console.log(error),
                            onSuccess: () => handleWithdrawSuccess,
                        })
                    }}
                    text="Withdraw"
                    type="button"
                />
            ) : (
                <div>No proceeds detected!</div>
            )}
        </div>
    )
}
