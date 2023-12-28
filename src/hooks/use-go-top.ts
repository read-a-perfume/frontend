import { useEffect } from "react";

const useGoTop = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
}

export default useGoTop