"use client"
import Image from "next/image"
import { useState } from "react"
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io"

export default function Roadmap() {
    const [roadmapData, setRoadmapData] = useState([
        {
            id: "1",
            show: false,
            heading: "Q1 - Burn Durk",
            paragraph: "Coming soon",
        },
        {
            id: "2",
            show: false,
            heading: "Q2 - Block the top",
            paragraph:
                "Set up socials and community portals, as well as the contract and website, then complete presale. Hold giveaways for early supporters, then launch on website and a few other outlets like opensea. Secondly, grow the community organically (Celebrity marketing endorsements) and launch a durk merch",
        },
        {
            id: "3",
            show: false,
            heading: "Q3 - Pressure Building",
            paragraph:
                "Set up organization and competition structure. Integrate NFT into further exchanges and push marketing full tilt. Set up live streaming giveaways and focus on maintaining DAPP",
        },
        {
            id: "4",
            show: false,
            heading: "Q4 - Blow off the top",
            paragraph:
                "Gain sponsorship from OG Nft investors (as much as possible), then have them market merch. Grow organization globally by collaborating with top NFT projects from around the world and making holders the top priority",
        },
    ])

    return (
        <div className="">
            <div className="flex flex-col items-center container mx-auto text-white px-6 w-full md:w-[75%]">
                <Image alt="durk" src="/duck-17.svg" height={120} width={120} />

                <div className="text-3xl flex flex-col items-center uppercase">
                    <h1>roadmap</h1>
                    <h5 className="text-sm tracking-wider">2023/2024</h5>
                </div>

                {roadmapData.map((item) => {
                    return (
                        <div
                            id={item.id}
                            onClick={(event) => {
                                if (event.currentTarget.id === item.id) {
                                    const newArr = roadmapData.map((item) => {
                                        return {
                                            ...item,
                                            show: !item.show,
                                        }
                                    })
                                    setRoadmapData(newArr)
                                } else {
                                    return { ...item }
                                }
                            }}
                            key={item.id}
                            className="flex cursor-pointer flex-col space-y-4 mt-6 w-full p-3 "
                        >
                            <div className="flex justify-between rounded-t-xl border-t  items-center">
                                <h2 className="text-2xl">{item.heading}</h2>
                                <div>
                                    {!item.show ? <IoIosArrowDropdown /> : <IoIosArrowDropup />}
                                </div>
                            </div>
                            <p
                                className={`${
                                    item.show ? "inline-block" : "hidden"
                                } bg-gray-600 p-2 rounded-b-xl`}
                            >
                                {item.paragraph}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
