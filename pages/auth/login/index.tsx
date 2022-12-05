import Link from "next/link";
import AuthLayout from "..";

const Login = () => {
    const title = "Connectez-vous";
    return ( 
        <AuthLayout title={title}>
            <div className="font-medium text-sm">
                <p className="font-medium text-sm">
                    Connectez-vous à votre compte marchand ou 
                </p>
                <Link href="" className="font-medium text-sm">
                    Créez votre compte maintenant
                </Link>
            </div>
        </AuthLayout>
     );
}
 
export default Login;