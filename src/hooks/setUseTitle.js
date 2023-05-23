import { useEffect } from "react"

const setUseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Bistro Boss`
    },[title])
}

export default setUseTitle;