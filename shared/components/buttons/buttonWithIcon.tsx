interface ButtonElement {
    text: string;
    children: any;
}

const ButtonWithIcon = (props: ButtonElement) => {
    return ( 
        <button 
            type="button" 
            className="inline-flex w-full relative capitalize items-center justify-center rounded-md border border-transparent bg-primary-900 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:ring-offset-2">
            <div className="absolute left-3">
                {props.children}
            </div>
            <p className="text-center">{props.text}</p>
        </button>
     );
}
 
export default ButtonWithIcon;