import Link from "next/link";
import AuthLayout from "..";
import ButtonWithIcon from "../../../shared/components/buttons/buttonWithIcon";
import Checkbox from "../../../shared/components/inputs/checkbox";
import SimpleInput from "../../../shared/components/inputs/simpleInput";
import Logo from "../../../shared/components/logo";

const Login = () => {
    return ( 
        <AuthLayout>
            <section className="col-span-2 grid place-items-center py-8 max-sm:py-0 z-20">

                <div className="">

                    <div className="w-36 h-14 mb-6">
                        <Logo />
                    </div>

                    <h1 className="font-semibold text-2xl leading-9 text-slate-900 mb-2">Connectez-vous</h1>


                    <div className="max-w-sm">
                        <div className="font-medium text-sm">
                            <p className="font-medium text-sm text-slate-500">
                                Connectez-vous à votre compte marchand ou 
                                <Link href="/auth/register" className="font-medium text-sm text-secondary-default ml-1">
                                    créez votre compte maintenant
                                </Link>
                            </p>
                        </div>

                        <form className="mt-9 mb-6">

                            <SimpleInput class="mb-8" type="email" label="email" name="email" placeholder="janeDoe@gmail.com" />

                            <SimpleInput type="password" label="password" name="password" placeholder="*****" />

                            <div className="flex justify-between mb-9">
                                <Checkbox name="optin" label="Se souvenir de moi" />
                                <Link href="" className="flex items-end font-medium text-sm text-primary-700">Mot de passe oublié ?</Link>
                            </div>

                            <ButtonWithIcon text="Se connecter">

                                <svg className="h-5 w-5" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5 1C8.01472 1 6 3.01472 6 5.5V9H5.5C4.39543 9 3.5 9.89543 3.5 11V17C3.5 18.1046 4.39543 19 5.5 19H15.5C16.6046 19 17.5 18.1046 17.5 17V11C17.5 9.89543 16.6046 9 15.5 9H15V5.5C15 3.01472 12.9853 1 10.5 1ZM13.5 9V5.5C13.5 3.84315 12.1569 2.5 10.5 2.5C8.84315 2.5 7.5 3.84315 7.5 5.5V9H13.5Z" fill="#C289C3"/>
                                </svg>

                            </ButtonWithIcon>

                        </form>
                    </div>


                    <div className="flex items-center justify-between pt-6">
                        <p className="text-sm leading-5 text-slate-500 dark:text-slate-400">Copyright © 2022 SK, inc.</p>
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

            </section>

            <section className="col-span-3 z-20 lg:block hidden">
                <div className="fixed right-0 -z-10 h-28 w-3/5 flex justify-end">
                    <div className="w-4/5 h-full bg-gradient-to-r from-white via-primary-500 to-primary-900"></div>
                </div>
                <div className="flex justify-end items-center w-full h-full">

                    <div className="h-4/5 w-4/5">
                        <img src="/images/dashboard.png" alt="partial dashboard preview" />
                    </div>

                </div>
            </section>

            <section className="absolute -z-10 inset-x-0 bottom-0 h-64 overflow-hidden">
                <div className="inset-x-0 bottom-0 h-64 fixed bg-gradient-to-t from-transparent to-white overflow-hidden"></div>
                <img src="/svg/pattern.svg" alt="pattern design" />
            </section>

        </AuthLayout>
     );
}
 
export default Login;