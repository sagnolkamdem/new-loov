import Link from "next/link";
import AuthLayout from "..";
import ButtonWithIcon from "../../../shared/components/buttons/buttonWithIcon";
import Checkbox from "../../../shared/components/inputs/checkbox";
import DefaultInput from "../../../shared/components/inputs/simpleInput";

const Login = () => {
    const title = "Connectez-vous";
    return ( 
        <AuthLayout title="Connectez-vous">
            
            left= () {
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

                        <DefaultInput class="mb-8" type="email" label="email" name="email" placeholder="janeDoe@gmail.com" />

                        <DefaultInput type="password" label="password" name="password" placeholder="*****" />

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
            }

            right={
                <>
                    <div className="fixed right-0 -z-10 h-28 w-3/5 flex justify-end">
                        <div className="w-4/5 h-full bg-gradient-to-r from-white via-primary-500 to-primary-900"></div>
                    </div>
                    <div className="flex justify-end items-center w-full h-full">

                        <div className="h-4/5 w-4/5">
                            <img src="/images/dashboard.png" alt="partial dashboard preview" />
                        </div>

                    </div>

                </>
            }

        </AuthLayout>
     );
}
 
export default Login;