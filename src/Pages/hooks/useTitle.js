import { useEffect } from "react"

const useTitle = title => {
    useEffect( () => {
        document.title = `${title} - Zoo Toys`;
    } , [title])
};

export default useTitle;