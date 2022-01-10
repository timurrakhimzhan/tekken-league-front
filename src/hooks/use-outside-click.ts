import {RefObject, useEffect} from "react";

const useOutsideClick = <T extends HTMLElement = HTMLElement>(callback: () => void, ref: RefObject<T>) => {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: Event) {
            if (event.target instanceof HTMLElement && ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }

        // Bind the event listener
        document.addEventListener("click", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref, callback]);
}

export default useOutsideClick;
