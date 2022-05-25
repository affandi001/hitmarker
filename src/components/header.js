import React from 'react';
import Modal from 'react-modal'
import { useState } from 'react';

export default function Header() {
    const [modalIsOpen, setmodalIsOpen] = useState(false)
    return (

        <>
            <div className="container mx-auto">

                <div className="md:flex ">
                    <div className="py-12 px-12 md:px-20 md:w-[30%]">
                        <img src="../assets/logo.png" />
                    </div>
                    <div className=" md:mt-[50px] md:w-[50%] w-[100%] md:px-24 md:flex md:justify-center px-12   text-white md:space-x-8 ">
                        <h1>Find a job</h1>
                        <h1>Post a job</h1>
                        <h1>Career Advice</h1>
                    </div>


                    <div className="md:w-[30%] flex md:justify-end px-12 lg:block sm:hidden md:hidden">
                        <div className=" mt-[50px] text-white ">
                            <span>Login</span>

                        </div>


                        <div className=" mt-[45px] px-4    text-white  ">
                            <button onClick={() => setmodalIsOpen(true)} class="bg-orange-600 text-white px-4 py-2 hover:bg-orange-400  border border-orange-600 rounded-lg font-medium cursor-pointer">Create Account</button>
                        </div>
                        <Modal isOpen={modalIsOpen}>

                            <section class="h-screen">
                                <div class="px-6 h-full text-gray-800">
                                    <div className=' '>
                                        <div className='text-center text-4xl font-semibold'>
                                            <h1>Create Account





                                                
                                            </h1>
                                        </div>
                                        <div className='absolute top-8 right-8 cursor-pointer'>
                                            <svg className='' onClick={() => setmodalIsOpen(false)} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                            </svg>
                                        </div>

                                    </div>
                                    <div
                                        class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                                    >
                                        <div
                                            class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                                        >
                                            <img
                                                src="./assets/hero.png"
                                                class="w-full"
                                                alt="Sample image"
                                            />
                                        </div>
                                        <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                                            <form>
                                                <div class="flex flex-row items-center justify-center lg:justify-start">
                                                    <p class="text-lg mb-0 mr-4">Sign in with</p>
                                                    <button
                                                        type="button"
                                                        data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                        class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                                    >

                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-4 h-4">

                                                            <path
                                                                fill="currentColor"
                                                                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                            />
                                                        </svg>
                                                    </button>

                                                    <button
                                                        type="button"
                                                        data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                        class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                                    >

                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4">

                                                            <path
                                                                fill="currentColor"
                                                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                                            />
                                                        </svg>
                                                    </button>

                                                    <button
                                                        type="button"
                                                        data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                        class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                                    >

                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4">

                                                            <path
                                                                fill="currentColor"
                                                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>

                                                <div
                                                    class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                                >
                                                    <p class="text-center font-semibold mx-4 mb-0">Or</p>
                                                </div>


                                                <div class="mb-6">
                                                    <input
                                                        type="text"
                                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput2"
                                                        placeholder="Email address"
                                                    />
                                                </div>


                                                <div class="mb-6">
                                                    <input
                                                        type="password"
                                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput2"
                                                        placeholder="Password"
                                                    />
                                                </div>

                                                <div class="flex justify-between items-center mb-6">
                                                    <div class="form-group form-check">
                                                        <input
                                                            type="checkbox"
                                                            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                            id="exampleCheck2"
                                                        />
                                                        <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                                                        >Remember me</label
                                                        >
                                                    </div>
                                                    <a href="#!" class="text-gray-800">Forgot password?</a>
                                                </div>

                                                <div class="text-center lg:text-left">
                                                    <button
                                                        type="button"
                                                        class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                                    >
                                                        Login
                                                    </button>
                                                    <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                                                        Don't have an account?
                                                        <a
                                                            href="#!"
                                                            class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                                        >Register</a
                                                        >
                                                    </p>
                                                </div>


                                              


                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>


                        </Modal>
                    </div>
                </div>
            </div>

        </>

    )
}