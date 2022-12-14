const EmptyButton = (props: any) => {
    return ( 
        <button 
            type="button" 
            onClick={props.callback}
            className={` ${props.class} inline-flex w-full relative capitalize items-center justify-center text-sm font-medium text-slate-900`}>
            {props.children}
        </button>
     );
}
 
export default EmptyButton;