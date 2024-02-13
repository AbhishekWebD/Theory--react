import { useEffect, useState } from "react";
export default () => {
    const [theme, setTheme] = useState("#ffffff")
    const switchTheme = () => {
        if (theme !== "#000000") {
            localStorage.setItem("theme", "#000000")
            setTheme("#000000")
        } else {
            localStorage.setItem("theme", "#ffffff")
            setTheme("#ffffff")
        };
    }
    useEffect(() => {
        const localTheme = localStorage.getItem("theme")
        if (localTheme) {
            setTheme(localTheme)
        }
    })
    return {
        theme,
        switchTheme
    }

}