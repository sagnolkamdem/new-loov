import Head from "next/head";
import Navbar from "./navbar";
import SideBar from "./sideBar";

const Layout = (props: any) => {
    return ( 
        <main className="h-screen overflow-hidden">
            <Head>
                <title>Loov</title>
                <meta name="description" content="Loov Payment" />
                <link rel="icon" href="/loov-white.svg" />
            </Head>


            <section className="h-full flex flex-col bg-gray-100 gap-10">
                <Navbar />

                <div className="grid lg:grid-cols-5 flex-1 overflow-scroll">
                    <SideBar />

                    <div className="col-span-4 px-4 sm:pl-6 sm:pr-8">
                        {props.children}
                    </div>

                </div>

            </section>
        </main>
     );
}
 
export default Layout;