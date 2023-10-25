"use client"
import { GrClose } from "react-icons/gr"
import { FaAngleRight } from "react-icons/fa"
import Link from "next/link"
import { appContext } from "./context"
import { useContext } from "react"

export default function SideBar() {

    const { toggleSideBar, sideBar, data } = useContext(appContext)

    return (
        <aside
            className={`${
                !sideBar ? "-translate-x-[100%]" : "translate-x-[]"
            } bg-gray-200 z-40 transition-all ease-in-out duration-500 text-black absolute top-0 left-0 w-3/4 md:hidden`}
        >
            <div className="h-screen py-3 px-5 space-y-12 ">
                <div className="flex justify-between items-center">
                    <h1 className="sm:text-8xl font-mono text-3xl text-center">
                        DU<span className="text-red-700">R</span>KI
                        <span className="text-sky-600">O</span>S
                    </h1>
                    <button onClick={() => toggleSideBar()} className="text-3xl">
                        <GrClose style={{ color: "red" }} />
                    </button>
                </div>

                <div className="space-y-4">
                    {data.map((item, index) => {
                        return (
                            <Link
                                href={item.href}
                                key={index}
                                className="flex justify-between items-center text-xl px-2 py-2 rounded-xl hover:bg-stone-400"
                            >
                                <div className="flex space-x-1 item-center">
                                    <div className="flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h3 className="capitalize">{item.name}</h3>
                                </div>

                                <div>
                                    <FaAngleRight />
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </aside>
    )
}
