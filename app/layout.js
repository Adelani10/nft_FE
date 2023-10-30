import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import {
    MoralisProvider,
    NotificationProvider,
    ApolloProvider,
    client,
} from "./components/useClient"
import SideBar from "./components/SideBar"
import { Context } from "../context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "An Nft website",
    description: "Mint, list, buy & sell tokens",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <MoralisProvider initializeOnMount={false}>
                    <Context>
                        <ApolloProvider client={client}>
                            <NotificationProvider>
                                <SideBar />
                                <Header />
                                {children}
                            </NotificationProvider>
                        </ApolloProvider>
                    </Context>
                </MoralisProvider>
            </body>
        </html>
    )
}
