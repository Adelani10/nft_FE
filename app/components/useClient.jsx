"use client"

import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "@web3uikit/core"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.studio.thegraph.com/query/54625/marketplace/v0.0.1"
})

export {MoralisProvider, NotificationProvider, ApolloClient, ApolloProvider, client}