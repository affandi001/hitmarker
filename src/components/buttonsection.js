export default function Button() {
    return (

        <>
            <div className="container mx-auto pl-24 pr-16 pt-12 ">
                <div className=" bg-[#FF6810] border-2-white  py-4 px-2 rounded-lg shadow-xl hover:bg-orange-600 text-white">
                    <div className="flex justify-between">
                        <div className="">
                            <h1 className="px-4 pt-2 text-xl font-semibold">Promote Your job</h1>

                            <p className="px-4 pt-2">Listings that are promoted average over 200% more views and 150% more applications.</p>
                        </div>
                        <div className="pt-4 px-8 ">
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1_471)">
                                    <circle cx="28" cy="24" r="24" fill="white" />
                                </g>
                                <path d="M25.3333 29.3333L30.6666 24L25.3333 18.6667" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <filter id="filter0_d_1_471" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_471" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_471" result="shape" />
                                    </filter>
                                </defs>
                            </svg>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}