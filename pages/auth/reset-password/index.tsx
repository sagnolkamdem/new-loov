import Link from "next/link";
import AuthLayout from "..";
import ButtonWithIcon from "../../../shared/components/buttons/buttonWithIcon";
import SimpleButton from "../../../shared/components/buttons/simpleButton";
import Checkbox from "../../../shared/components/inputs/checkbox";
import SimpleInput from "../../../shared/components/inputs/simpleInput";
import Logo from "../../../shared/components/logo";

const ForgotPassword = () => {
    return ( 
        <AuthLayout>
            <section className="col-span-5 grid place-items-center py-8 max-sm:py-0 z-20">

                <div className="mx-auto">

                    <div className="w-36 h-14 mb-6">
                        <Logo />
                    </div>

                    <h1 className="font-semibold text-2xl leading-9 text-slate-900 mb-2">Changement de mot de passe</h1>


                    <div className="max-w-sm">
                        <div className="font-medium text-sm">
                            <p className="font-medium text-sm text-slate-500">
                                Saisissez votre nouveau mot de passe et confirmez le pour pouvoir le conserver.
                            </p>
                        </div>

                        <form className="flex flex-col w-full items-end mt-9 mb-6">

                            <SimpleInput class="mb-6" blockClass="w-full" type="password" label="Nouveau mot de passe" name="password" placeholder="********" />

                            <SimpleInput class="mb-6" blockClass="w-full" type="password" label="Confirmation de mot de passe" name="same-password" placeholder="********" />

                            <SimpleButton class="mb-2 max-w-fit mx-auto" text="Confirmez le nouveau mot de passe"></SimpleButton>

                            <div className="flex justify-between items-center gap-1">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.21967 16.2803C6.51256 16.5732 6.98744 16.5732 7.28033 16.2803C7.57322 15.9874 7.57322 15.5126 7.28033 15.2197L6.21967 16.2803ZM3 12L2.46967 11.4697C2.17678 11.7626 2.17678 12.2374 2.46967 12.5303L3 12ZM7.28033 8.78033C7.57322 8.48744 7.57322 8.01256 7.28033 7.71967C6.98744 7.42678 6.51256 7.42678 6.21967 7.71967L7.28033 8.78033ZM21 12.75C21.4142 12.75 21.75 12.4142 21.75 12C21.75 11.5858 21.4142 11.25 21 11.25V12.75ZM7.28033 15.2197L3.53033 11.4697L2.46967 12.5303L6.21967 16.2803L7.28033 15.2197ZM3.53033 12.5303L7.28033 8.78033L6.21967 7.71967L2.46967 11.4697L3.53033 12.5303ZM21 11.25H3V12.75H21V11.25Z" fill="#583E91"/>
                                </svg>

                                <Link href="" className="flex items-end font-medium text-sm text-[#583E91]">Retourner à la page de connexion</Link>
                            </div>

                            

                        </form>
                    </div>


                    <div className="flex items-center justify-between">
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
        </AuthLayout>
     );
}
 
export default ForgotPassword;