import { useState } from "react";
import Logo from "../../shared/components/logo";

const AuthLayout = (props: any) => {

    const [counter, setCounter] = useState(0);
    
    return (

        <main className="h-screen grid lg:grid-cols-5 overflow-hidden overflow-y-scroll max-lg:p-8">

            {props.children}

        </main>

     );
}
 
export default AuthLayout;