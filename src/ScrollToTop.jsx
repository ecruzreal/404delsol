import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function ScrollToTop({children}){
    const path_name = useLocation();

    useEffect(() =>{
        console.log('scrolling')
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [path_name]);

    return <>{children}</>;
};

export default ScrollToTop;

