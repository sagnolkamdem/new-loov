interface InputWithIconElement {
    name: string;
    type: string;
    label: string;
    placeholder?: string;
    class?: string;
}

const InputWithIcon = (props: InputWithIconElement) => {
    return (
        <div className={props.class}>
            <label htmlFor={props.name} className="block text-sm font-medium text-gray-700">{props.label}</label>
            <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">

                    <svg className="h-5 w-5" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect y="0.5" width="20" height="20" fill="url(#pattern0)"/>
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_315_4514" transform="scale(0.00195312)"/>
                            </pattern>
                            <image id="image0_315_4514" width="512" height="512" xlinkHref="data:image/png;base64,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"/>
                        </defs>
                    </svg>


                </div>
                <input type={props.type} name={props.name} id={props.name} className="block w-full rounded-md border-gray-300 pl-10 focus:border-primary-500 focus:ring-primary-500 sm:text-sm" placeholder={props.placeholder} />
            </div>
        </div>
     );
}
 
export default InputWithIcon;