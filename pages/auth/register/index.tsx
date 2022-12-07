import Link from "next/link";
import AuthLayout from "..";
import SimpleButton from "../../../shared/components/buttons/simpleButton";
import Checkbox from "../../../shared/components/inputs/checkbox";
import InputWithIcon from "../../../shared/components/inputs/inputWithIcon";
import SimpleInput from "../../../shared/components/inputs/simpleInput";

const Register = () => {
    const title = "Connectez-vous";
    return ( 
        <AuthLayout title="Connectez-vous">
            
            left={
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
            }

            right={
                <>
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

                </>
            }

        </AuthLayout>
     );
}
 
export default Register;