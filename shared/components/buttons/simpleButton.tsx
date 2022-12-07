interface SimpleButtonElement {
    text: string;
}

const SimpleButton = (props: SimpleButtonElement) => {
    return ( 
        <button 
            type="button" 
            className="inline-flex w-full relative capitalize items-center justify-center rounded-md border border-transparent bg-primary-900 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:ring-offset-2">
            <p className="text-center">{props.text}</p>
        </button>
    );
}
 
export default SimpleButton;