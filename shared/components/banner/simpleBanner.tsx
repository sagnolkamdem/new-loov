const SimpleBanner = (props: any) => {
    return ( 
        <header role="heading" className={props.class}>
            {props.children}
        </header>
     );
}
 
export default SimpleBanner;