import Head from "next/head";
import { useState } from "react";
import Navbar from "./navbar";
import SideBar from "./sideBar";

const Layout = (props: any) => {

    const [showSide, setShowSide] = useState(false);

    const setShowSideVar = () => {
        showSide === false ? setShowSide(true) : setShowSide(false);
        console.log(showSide);
    }

    return ( 
        <main className="h-screen overflow-hidden">
            <Head>
                <title>Loov</title>
                <meta name="description" content="Loov Payment" />
                <link rel="icon" href="/loov-white.svg" />
            </Head>


            <section className="h-full flex flex-col bg-gray-100 gap-10 overflow-hidden">
                <Navbar callback={setShowSideVar}/>

                <div className="grid lg:grid-cols-5 flex-1 overflow-auto">
                    <SideBar showSide={showSide} callback={setShowSideVar} />

                    <div className="col-span-4 px-4 sm:pl-6 sm:pr-8">
                        {props.children}
                    </div>

                </div>

            </section>
        </main>


     );
}
 
export default Layout;