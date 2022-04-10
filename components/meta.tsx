import Head from "next/head";

type Props = {
    title: string;
}

export function Meta({ title }: Props) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="My personal website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}