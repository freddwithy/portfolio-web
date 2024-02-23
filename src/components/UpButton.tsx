import { useEffect } from "preact/hooks";
import ArrowUp from "../icons/ArrowUp";
export const UpButton = () => { 

    useEffect(() => {
        const upButton = document.getElementById('upButton');
        if (upButton) {
            upButton.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    upButton.classList.add('show');
                    upButton.classList.remove('hide');
                } else {
                    upButton.classList.remove('show');
                    upButton.classList.add('hide');
                }
            });
        }
    }, []);

    return (
        <div
            class="bg-black/30 border border-white/20 p-2 flex text-white justify-center items-center fixed bottom-28 right-16 md:bottom-20 md:right-64 rounded-full size-10 cursor-pointer backdrop-blur-lg z-10 hover:scale-105 transition-all hover:text-yellow-200 duration-150"
            id="upButton"
        >
            <ArrowUp />
        </div>
    )
}
