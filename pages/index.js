import Head from "next/head"
import ManualHeader from "../components/ManualHeader.js"
import Header from "../components/Header.js"
import LotteryEntrance from "../components/LotteryEntrance.js"

export default function Home() {
    return (
        <>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our Smart Contract Lottery" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <LotteryEntrance />
        </>
    )
}
