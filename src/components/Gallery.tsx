import PhotoSwipeLightbox from "photoswipe/lightbox";
import 'photoswipe/style.css';
import { useEffect, useState } from "preact/hooks";

interface Images {
    name: string,
    thumb: string,
    img: string,
    width: string | number,
    height: string | number,
    isVertical: boolean
}

interface Props {
    galeria: Images[]
}

export const Gallery = ({ galeria }: Props) => {
    const verticalImages = galeria.filter((image) => image.isVertical === true)
    const horizontalImages = galeria.filter((image) => image.isVertical === false)

    const [visibleHorizontalImages, setHorizontalVisibleImages] = useState(4)
    const [visibleVerticalImages, setVerticalVisibleImages] = useState(2)
    const [loading, setLoading] = useState(false)


    const handleLoadMore = async () => {
        setLoading(true)
        setHorizontalVisibleImages(prev => prev + 3)
        setVerticalVisibleImages(prev => prev + 2)
        setLoading(false)
    }

    const visibleVerticalImagesArray = verticalImages.slice(0, visibleVerticalImages)
    const visibleHorizontalImagesArray = horizontalImages.slice(0, visibleHorizontalImages)


    const currentImagesCount = visibleVerticalImagesArray.length + visibleHorizontalImagesArray.length

    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#gallery',
            children: 'a',
            pswpModule: () => import('photoswipe')
        });
        lightbox.init()
        return 
    }, [])
    
    window.addEventListener('scroll', () => {
        const loadButton = document.getElementById('loadButton');
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

        if (loadButton && scrollPercentage >= 90) {
            loadButton.classList.add('show');
            loadButton.classList.remove('hide');
        } else {
            loadButton?.classList.add('hide');
            loadButton?.classList.remove('show');
        }
    });

    return (
        <>
            <article className="lg:flex lg:justify-center grid grid-cols-1 max-w-[300px] lg:max-w-full gap-2 md:mt-24 mt-10" id="gallery">
                <div className="grid grid-cols-1 gap-2 self-start">
                    {visibleVerticalImagesArray.map(({ name, width, thumb, height, img, isVertical }) => (
                        isVertical && (
                            <a key={name} className='shadow-lg shadow-black/25 overflow-hidden transition-all ease-out duration-300 w-full rounded-md border border-transparent dark:border-transparent hover:border-violet-600 dark:hover:border-blue-300/60 animate-fade-up'
                                href={img}
                                target="_blank"
                                data-pswp-width={width}
                                data-pswp-height={height}
                            >
                                <img
                                    loading="lazy"
                                    src={thumb}
                                    alt={name}
                                />
                            </a>
                        )
                    ))}
                </div>
                <div className="grid grid-cols-1 gap-2 self-start">
                    {visibleHorizontalImagesArray.map(({ name, width, thumb, height, img, isVertical }) => (
                        !isVertical && (
                            <a key={name} className='shadow-lg shadow-black/25 overflow-hidden hover:scale-[1.01] transition-all ease-out duration-300 w-full rounded-md border border-transparent dark:border-transparent hover:border-violet-600 dark:hover:border-blue-300/60 animate-fade-up'
                                href={img}
                                target="_blank"
                                data-pswp-width={width}
                                data-pswp-height={height}
                            >
                                <img
                                    loading="lazy"
                                    src={thumb}
                                    alt={name}
                                />
                            </a>
                        )
                    ))}
                </div>
            </article>
            {currentImagesCount < galeria.length &&
                <button 
                    class={'py-2 px-4 bg-black/20  border rounded-3xl text-white border-white/20 my-8 backdrop-blur-sm fixed md:bottom-12 bottom-20 z-10 hover:text-yellow-200 hover:scale-105 transition-all' + (loading ? ' cursor-not-allowed' : ' cursor-pointer')}  
                    onClick={handleLoadMore}
                    id="loadButton"
                    >
                        {loading ? 'Cargando...' : 'Cargar más'}
                </button>
            }
        </>
    )
}