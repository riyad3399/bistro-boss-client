import { useEffect } from "react"

const setUseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Bistro Boss Restaurant`
    },[title])
}

export default setUseTitle;