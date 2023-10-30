import { ConnectButton } from "@web3uikit/web3"
import Link from "next/link"

export default function MarketplaceHeader() {
    return (
        <nav>
            <div className="flex justify-between">
                <h1 className="sm:text-8xl text-6xl text-center">
                    DU<span className="text-red-700">R</span>KI
                    <span className="text-sky-600">O</span>S
                </h1>

                <div className="flex items-center">
                    <Link href="/marketplace/sell">
                        Sell Nfts
                    </Link>
                </div>
                <ConnectButton />
            </div>
        </nav>
    )
}
