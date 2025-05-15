import { useState } from "react";
export function useClientWH() {

    const [isMobile, setIsMobile] = useState<boolean>(false)
    
    const handleResize = debounce(() => {
        const { innerWidth } = window;
        setIsMobile(() => innerWidth < 768)
    }, 300)

    window.addEventListener("resize", handleResize)

    return {
        isMobile,
        cancelResize: () => {
            window.removeEventListener("resize", handleResize)
        }
    }

}


function debounce(func: () => void, delay: number) {
    let timer: number | null = null;
    return (...args: []) => {
        if (timer) {
            clearTimeout(timer as number);
        }
        timer = setTimeout(() => func.apply(args), delay) as unknown as number;
    }

}