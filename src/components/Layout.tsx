/*
THE MAIN LAYOUT OF THE APP.
PAGES WILL BE RECIVED AS A CHILDREN PROP, AND RENDERED IN THE MAIN TAG.
*/

import React from "react"
import Header from "./Header";

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-200 flex flex-col font-mono overflow-hidden">
            <Header />
            <main className="px-4 py-6 flex flex-col flex-1 items-center overflow-x-hidden">
                {children}
            </main>
        </div>
    );
};

export default Layout;