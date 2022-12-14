interface SearchInputElement {
    name: string;
    class?: string;
    placeholder?: string;
}

const SearchInput = (props: SearchInputElement) => {
    return ( 
        <div className={props.class}>
            <div className="relative flex items-center">
                
                <span aria-hidden="true" className="absolute inset-y-0 left-0 flex items-center pl-1.5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z" fill="#94A3B8"/>
                        </g>
                    </svg>
                </span>

                <input type="text" placeholder={props.placeholder} name={props.name} id={props.name} className="pl-10 text-slate-900 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
                
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                    <kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">⌘K</kbd>
                </div>
            </div>
        </div>
     );
}
 
export default SearchInput;