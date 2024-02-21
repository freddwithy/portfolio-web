import { useEffect, useState } from "preact/hooks"


export const ToggleButton = () => {
    const [theme, setTheme] = useState(null)

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector('html').classList.add("dark")
        } else {
            document.querySelector('html').classList.remove("dark")
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark")
    }

    return (
        <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" onChange={handleChangeTheme}/>
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-violet-600">
            </div>
        </label>
    )
}

