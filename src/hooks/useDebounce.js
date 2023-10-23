import {useEffect, useState} from "react"

export default function useDebounce(intitializeValue = "", delay = 1000) {
    const [debounceValue, setDebounceValue] = useState(intitializeValue);

    useEffect(() => {
        const timer = setTimeout( () => {
            setDebounceValue(intitializeValue);
        },delay)
        return () => {
            clearTimeout(timer);
        }
    },[delay, intitializeValue])
    return debounceValue;
}