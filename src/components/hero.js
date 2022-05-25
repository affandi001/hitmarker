export default function Hero() {
    return (

        <>
            <div className="container mx-auto pb-20 ">
                <div className="md:flex ">
                    <div className=" px-12 md:px-20  pt-40 md:w-[50%]">
                        <h1 className="text-4xl text-white font-semibold leading-10">The home of gaming<br></br>
                            and esports jobs</h1>

                        <p className="text-white pt-8 text-sm">
                            With over 8,000 active listings from more than 50 countries,<br></br>
                            Hitmarker is the largest gaming and esports jobs platform in the<br></br>
                            world. Find your dream career. Hire top talent. Make your mark.<br></br>
                        </p>

                        <div className="flex space-x-4 md:space-x-12">
                            <div className="pt-12">
                                <button class="bg-orange-600 text-white text-sm  px-8 py-2 hover:bg-orange-400  border border-orange-600 rounded-md font-medium cursor-pointer">View Jobs</button>
                            </div>
                            <div className="flex">
                                <div className="pt-12">
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="21" cy="21" r="20.75" fill="white" fill-opacity="0.12" stroke="white" stroke-width="0.5" />
                                        <path d="M16 19.6667V22.3333C16 25.3105 16 26.799 16.971 27.3817C17.942 27.9643 19.2555 27.2638 21.8824 25.8627L24.3824 24.5294C27.2941 22.9765 28.75 22.2 28.75 21C28.75 19.8 27.2941 19.0235 24.3824 17.4706L21.8824 16.1373C19.2555 14.7362 17.942 14.0357 16.971 14.6183C16 15.201 16 16.6895 16 19.6667Z" fill="white" />
                                    </svg>
                                </div>
                                <div className="pt-14 px-2">
                                    <h1 className="text-white">
                                        Watch our video
                                    </h1>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="md:pt-40 pt-16  lg:pt-20 md:w-[50%]">
                        <img src="./assets/hero.png" />
                    </div>





                </div>

            </div>



        </>

    )
}