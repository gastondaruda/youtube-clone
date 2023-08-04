import { useEffect } from "react"
import { fetchFunction } from "../../utils/fetchFromAPI"


export default function Videos() {
    useEffect(() => {
        fetchFunction() 
        
    },[])

    return (
        <div>
            Videooos
        </div>
    )
}

