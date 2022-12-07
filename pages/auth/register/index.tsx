import Link from "next/link";
import AuthLayout from "..";
import SimpleButton from "../../../shared/components/buttons/simpleButton";
import Checkbox from "../../../shared/components/inputs/checkbox";
import InputWithIcon from "../../../shared/components/inputs/inputWithIcon";
import SimpleInput from "../../../shared/components/inputs/simpleInput";
import Logo from "../../../shared/components/logo";

const Register = () => {
    const title = "Connectez-vous";
    return ( 
        <AuthLayout title="Connectez-vous">

            <section className="col-span-2 grid place-items-center py-8 max-sm:py-0 z-20">

                <div className="">

                    <div className="w-36 h-14 mb-6">
                        <Logo />
                    </div>

                    <h1 className="font-semibold text-2xl leading-9 text-slate-900 mb-2">Créer votre compte</h1>


                    <div className="max-w-[434px]">

                        <form className="mb-6">

                            <SimpleInput class="mb-8" type="text" label="Name" name="name" placeholder="Jane Doe" />
                            
                            <InputWithIcon class="mb-8" type="text" label="Numéro" name="phone" placeholder="654536728" />
                            
                            <SimpleInput class="mb-8" type="email" label="email" name="email" placeholder="janeDoe@gmail.com" />

                            <SimpleInput type="password" label="password" name="password" placeholder="*****" />

                            <div className="flex justify-between mb-9">
                                <Checkbox name="optin" label="En vous inscrivant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité. " />
                            </div>

                            <SimpleButton text="Crèer votre compte" />

                            <div className="flex my-8 gap-1 justify-center">
                                <p className="font-normal text-sm text-slate-500">Vous avez deja un compte?</p>
                                <Link href="/auth/login" className="flex items-end font-medium text-sm text-primary-700">Connectez-vous</Link>
                            </div>

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
                <div className="relative w-full h-full">

                    <div className="absolute z-20 h-[90%] bottom-0 inset-x-0 bg-gradient-to-b from-transparent via-[#6E4EB3] to-primary-900">

                        <div className="mt-56 max-w-[719px] mx-auto">
                            <img className="mb-4" src="/svg/star.svg" alt="star" />
                            <h2 className="inline-block text-white gap-0.5 mb-6 text-6xl font-bold max-w-[654px]">
                                Loov Solutions pour accepter les
                                <span className="relative text-primary-400 ml-2"> 
                                    paiements

                                    <svg className="w w-80 h-2 absolute bottom-0 right-0" viewBox="0 0 311 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.734131 7.19995C88.0178 3.46755 272.109 -2.88005 310.196 1.59995Z" fill="#D4ABD4"/>
                                    </svg>
                                </span>
                            </h2>
                            <p className="mb-10 text-xl font-normal text-primary-400">Conçu pour les marchants qui ont besoin d'accepter des paiements sur leur site internet ou application mobile.</p>

                            <div className="flex gap-3 items-center">
                                <div className="flex">
                                    <div className="w-8 h-8 rounded-full border-2 first-of-type:-ml-0 -ml-3 border-white bg-gray-700"></div>
                                    <div className="w-8 h-8 rounded-full border-2 first-of-type:-ml-0 -ml-3 border-white bg-gray-700"></div>
                                    <div className="w-8 h-8 rounded-full border-2 first-of-type:-ml-0 -ml-3 border-white bg-gray-700"></div>
                                    <div className="w-8 h-8 rounded-full border-2 first-of-type:-ml-0 -ml-3 border-white bg-gray-700"></div>
                                    <div className="w-8 h-8 rounded-full border-2 first-of-type:-ml-0 -ml-3 border-white bg-gray-700"></div>
                                    <div className="w-8 h-8 rounded-full border-2 first-of-type:-ml-0 -ml-3 border-white bg-gray-700"></div>
                                    <div className="w-8 h-8 rounded-full border-2 first-of-type:-ml-0 -ml-3 border-white bg-gray-700"></div>
                                    <div className="w-8 h-8 rounded-full border-2 first-of-type:-ml-0 -ml-3 border-white bg-gray-700"></div>
                                    <div className="w-8 h-8 rounded-full border-2 first-of-type:-ml-0 -ml-3 border-white bg-gray-700"></div>
                                </div>
                                <p className="font-normal text-sm text-primary-400">Rejoignez 2000+ Marchants sur Loov Solutions</p>
                            </div>

                        </div>

                    </div>

                    <img src="/images/person.png" alt="person" />

                </div>

            </section>

            <section className="absolute -z-10 inset-x-0 bottom-0 h-64 overflow-hidden">
                <div className="inset-x-0 bottom-0 h-64 fixed bg-gradient-to-t from-transparent to-white overflow-hidden"></div>
                <img src="/svg/pattern.svg" alt="pattern design" />
            </section>

        </AuthLayout>
            
     );
}
 
export default Register;