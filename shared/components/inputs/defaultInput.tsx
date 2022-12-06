interface inputElement {
    name: string;
    type: string;
    inputName: string;
    placeholder?: string;
    class?: string;
}

const DefaultInput = (props: inputElement) => {
    
    return ( 
        <div>
            <label htmlFor={props.name} className="block text-xs font-medium text-gray-700 capitalize mb-1">{props.inputName}</label>
            <div className="mt-1">
                <input 
                    type={props.type} 
                    name={props.name} 
                    id={props.name} 
                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${props.class }`} 
                    placeholder={props.placeholder} />
            </div>
        </div>
     );
}
 
export default DefaultInput;