import Logo from "../../shared/components/logo";

interface AuthElement {
    title: string;
    child1: any;
    child2: any;
}

const AuthLayout = (props: AuthElement) => {
    
    return ( 
        <main className="h-screen grid grid-cols-5">

            <div className="col-span-2 grid place-items-center">
                <div className="max-w-sm">

                    <div className="w-36 h-14 mb-6">
                        <Logo />
                    </div>

                    <h1 className="font-semibold text-2xl leading-9 text-slate-900 mb-2">{ props.title }</h1>


                    { props.child1 }


                    <div className="flex items-center justify-between py-6">
                        <p className="text-sm leading-5 text-slate-500 dark:text-slate-400">Copyright © 2022 ISDG SARL.</p>
                        <div className="flex items-center space-x-5">
                        <a href="https://www.facebook.com/laravelcm" target="_blank" className="text-slate-400 hover:text-slate-500 dark:text-slate-300 dark:hover:text-white">
                            <span className="sr-only">Facebook</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://twitter.com/laravelcm" target="_blank" className="text-slate-400 hover:text-slate-500 dark:text-slate-300 dark:hover:text-white">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="col-span-3">
                {props.child2}
            </div>

        </main>
     );
}
 
export default AuthLayout;