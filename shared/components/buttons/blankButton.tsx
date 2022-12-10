interface BlankButtonElement {
    text: string;
    class?: string;
}

const BlankButton = (props: BlankButtonElement) => {
    return ( 
        <button 
            type="button" 
            className={` ${props.class} inline-flex w-full relative capitalize items-center justify-center rounded-md border border-gray-300 transition duration-300 ease-in-out bg-white px-3 py-2 text-sm font-medium text-slate-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:ring-offset-2`}>
            <p className="text-center">{props.text}</p>
        </button>
    );
}
 
export default BlankButton;