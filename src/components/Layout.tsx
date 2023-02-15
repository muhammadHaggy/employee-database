import Head from "next/head";
import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) =>
    <main className="vh-100 max-w-full m-0 rounded bg-white shadow-md shadow-gray-200 overflow-hidden md:mx-16 md:my-auto md:max-w-7xl">
        <Head>
            <title>Database Pegawai KSP Indosurya</title>
        </Head>
        {children}
    </main>
