interface CheckboxElement{
    name: string;
    label?: string;
    class?: string;
}

const Checkbox = (props: CheckboxElement) => {
    return ( 

        <fieldset className={`space-y-5 ${props.class}`}>

            <legend className="sr-only">Notifications</legend>
            <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                    <input
                        id={props.name}
                        aria-describedby="comments-description"
                        name={props.name}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                </div>
                <div className="ml-2 text-sm">
                    <label htmlFor={props.name} className={`font-normal text-sm text-slate-500`}>{props.label}</label>
                </div>
            </div>
            
        </fieldset>
     );
}
 
export default Checkbox;