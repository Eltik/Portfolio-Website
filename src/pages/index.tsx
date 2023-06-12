import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const Home: NextPage = () => {
    const [navOpen, setNavOpen] = useState(false)
    
    return (
        <>
            <Head>
                <title>Eltik&apos;s Portfolio</title>
                <meta name="title" content="Eltik's Portfolio" />
                <meta name="description" content="Innovative Web Developer" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://eltik.net/" />
                <meta property="og:title" content="Eltik's Portfolio" />
                <meta property="og:description" content="Innovative Web Developer" />
                <meta property="og:image" content="" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://eltik.net/" />
                <meta property="twitter:title" content="Eltik's Portfolio" />
                <meta property="twitter:description" content="Innovative Web Developer" />
                <meta property="twitter:image" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="relative bg-white overflow-hidden pb-8 sm:pb-12 lg:pb-12">
                    <header className="pt-6">
                        <nav className={`relative ml-auto mr-auto flex max-w-[80rem] items-center justify-between sm:px-0 px-5 ${navOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} transition-all duration-200 ease-in-out`}>
                            <div className="flex flex-1 items-center text-gray-500">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <Link href="/" className="cursor-pointer">
                                        <img src="/eltik.png" className="w-auto h-14 rounded-md" />
                                    </Link>
                                    <div className="-mr-2 flex items-center md:hidden" onClick={() => {
                                        setNavOpen(!navOpen)
                                    }}>
                                        <button className="inline-flex justify-center items-center p-[.5rem] rounded-sm" type="button" style={{
                                            transitionProperty: "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter"
                                        }}>
                                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="hidden md:block md:ml-10">
                                    <Link href="/projects" className="ml-[2.5rem] font-semibold transition-all duration-150 hover:text-black">
                                        Projects
                                    </Link>
                                    <Link href="/youtube" className="ml-[2.5rem] font-semibold transition-all duration-150 hover:text-black">
                                        YouTube
                                    </Link>
                                    <Link href="/premium" className="ml-[2.5rem] font-semibold transition-all duration-150 hover:text-orange-500 text-orange-400">
                                        Premium+
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden md:block text-right">
                                <span className="inline-flex rounded-md shadow-md">
                                    <span className="inline-flex rounded-md">
                                        <button type="button" className="inline-flex items-center p-[.5rem_1rem] rounded-md bg-white text-main font-semibold transition-all duration-150 hover:bg-slate-50" style={{
                                            borderWidth: "1px",
                                            borderColor: "rgb(243 244 246 / 1)"
                                        }}>Login</button>
                                    </span>
                                </span>
                                <span className="ml-5 inline-flex rounded-md shadow-md">
                                    <span className="inline-flex rounded-md">
                                        <button type="button" className="inline-flex items-center p-[.5rem_1rem] rounded-md bg-main text-white font-semibold transition-all duration-150 hover:bg-main-dark">Register</button>
                                    </span>
                                </span>
                            </div>
                        </nav>
                        <div className={`sm:hidden ${navOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-5"} absolute left-0 right-0 top-0 z-20 p-[.5rem] transition-all duration-200 ease-in-out`}>
                            <div className="rounded-lg shadow-md transition transform origin-top-right">
                                <div className="overflow-hidden rounded-[.5rem] bg-white shadow-md">
                                    <div className="px-5 pt-4 flex items-center justify-between">
                                        <div>
                                            <img src="/eltik.png" className="w-auto h-14 rounded-md" />
                                        </div>
                                        <div className="-mr-2">
                                            <button className="inline-flex items-center justify-center rounded-md p-[.5rem]" type="button" onClick={() => {
                                                setNavOpen(!navOpen)
                                            }}>
                                                <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24">
                                                    <path className="stroke-2" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="px-2 pt-2 pb-3 text-gray-500">
                                        <Link href="/projects" className="ml-[2.5rem] font-semibold transition-all duration-150 hover:text-black">
                                            Projects
                                        </Link>
                                        <Link href="/youtube" className="ml-[2.5rem] font-semibold transition-all duration-150 hover:text-black">
                                            YouTube
                                        </Link>
                                        <Link href="/premium" className="ml-[2.5rem] font-semibold transition-all duration-150 hover:text-orange-500 text-orange-400">
                                            Premium+
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:flex lg:flex-row sm:px-12">
                        <div className="max-w-[28rem] px-[1rem]">
                            <div className="my-4 text-lg">
                                <span className="rounded-sm text-sm font-semibold p-[.25rem_.625rem]" style={{
                                    backgroundColor: "rgb(220 247 236 / 1)",
                                    color: "rgb(27 181 104 / 1)"
                                }}>Beta</span>
                            </div>
                            <div className="mt-6 sm:max-w-xl">
                                <h1 className="text-gray-950 text-5xl font-extrabold">
                                    Innovative
                                    <br />
                                    <span className="text-main">
                                        Web Developer
                                    </span>
                                </h1>
                                <p className="mt-[1.5rem] text-base">
                                    Discover Eltik&apos;s exceptional web development skills. With a decade of coding experience, explore a portfolio showcasing innovative projects and cutting-edge designs.
                                </p>
                            </div>
                            <div className="mt-6 sm:max-w-lg sm:w-full sm:flex">
                                <div>
                                    <button type="button" className="block w-full rounded-md p-[.75rem_1.25rem] text-center text-white shadow-md bg-main font-semibold transition-all duration-150 hover:bg-main-dark">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                            <div className="py-[3rem]">
                                <div className="hidden lg:block">
                                    <div className="absolute top-0 bottom-0 left-[50%] w-[100vw]" style={{
                                        backgroundColor: "rgb(249 250 251 / 1)"
                                    }}>
                                        <svg className="absolute top-8 -mr-3 lg_m-0 lg_left-0 right-1/2" width="404" height="392" fill="none" viewBox="0 0 404 392">
                                            <defs>
                                                <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                                    <rect className="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor"></rect>
                                                </pattern>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="sm:relative sm:mr-[-10rem] sm:pl-[1rem]">
                                    <img src="/anify.png" className="shadow-md rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="lg:text-center">
                            <p className="text-base leading-6 text-main font-bold tracking-wide uppercase">Projects</p>
                            <h3 className="text-gray-950 font-extrabold text-4xl">Elevating Code & Crafting Solutions</h3>
                        </div>
                        <div className="mt-10">
                            <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                <li className="mt-10 md_mt-0">
                                    <div className="flex">
                                        <div className="shrink-0">
                                            <div className="flex w-12 h-12 justify-center items-center rounded-md bg-main text-white">
                                                <svg className="h-6 w-6 stroke-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h5 className="font-semibold">Experienced</h5>
                                            <p className="mt-2 text-base leading-6 text-gray-500 dark_text-gray-400">Experience meets expertise. Meet Eltik, an 18-year-old web developer with a decade of coding prowess, delivering exceptional projects.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-10 md_mt-0">
                                    <div className="flex">
                                        <div className="shrink-0">
                                            <div className="flex w-12 h-12 justify-center items-center rounded-md bg-main text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 stroke-current">
                                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/>
                                                    <path d="M10 22h4"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h5 className="font-semibold">Knowledgeable</h5>
                                            <p className="mt-2 text-base leading-6 text-gray-500 dark_text-gray-400">An expert in full-stack solutions using JavaScript, HTML, Java, PHP, Swift, and Python. His portfolio showcases unparalleled expertise.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-10 md_mt-0">
                                    <div className="flex">
                                        <div className="shrink-0">
                                            <div className="flex w-12 h-12 justify-center items-center rounded-md bg-main text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 stroke-current">
                                                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h5 className="font-semibold">Reliable</h5>
                                            <p className="mt-2 text-base leading-6 text-gray-500 dark_text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices venenatis ipsum, nec sodales metus vehicula sit amet. Aliquam erat volutpat. </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-10 md_mt-0">
                                    <div className="flex">
                                        <div className="shrink-0">
                                            <div className="flex w-12 h-12 justify-center items-center rounded-md bg-main text-white">
                                                <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h5 className="font-semibold">Lorem ipsum</h5>
                                            <p className="mt-2 text-base leading-6 text-gray-500 dark_text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices venenatis ipsum, nec sodales metus vehicula sit amet. Aliquam erat volutpat. </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 pt-12 sm:pt-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 5xl max-w-10xl">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-gray-950 font-extrabold text-4xl">Incredible Statistics</h2>
                            <p className="mt-3 text-base text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, itaque cumque blanditiis accusantium esse dolore porro perferendis provident excepturi praesentium quia impedit! A nulla nisi accusantium voluptatem aperiam sed deleniti.
                            </p>
                            <div className="mx-auto text-center mt-5 sm:max-w-xs">
                                <Link href="/projects" className="w-full mt-[.75rem] rounded-md p-[.75rem_1.5rem] font-semibold bg-main shadow-md text-white transition-all duration-150 hover:bg-main-dark">View Projects</Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 pb-12 bg-white sm:pb-16">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gray-50 h-1/2">
                                
                            </div>
                            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 5xl:max-w-10xl">
                                <div className="max-w-4xl mx-auto">
                                    <div className="rounded-md shadow-md sm:flex block" style={{
                                        backgroundColor: "rgb(255 255 255 / 1)"
                                    }}>
                                        <div className="border-b sm:border-0 sm:border-r border-gray-100 p-[1.5rem] text-center">
                                            <p className="font-extrabold text-main text-4xl">23456</p>
                                            <p className="font-bold text-xl" style={{
                                                color: "rgb(107 114 128 / 1)"
                                            }}>Unique Website Visitors</p>
                                        </div>
                                        <div className="border-b border-t sm:border-0 sm:border-l sm:border-r border-gray-100 p-[1.5rem] text-center">
                                            <p className="font-extrabold text-main text-4xl">1,223</p>
                                            <p className="font-bold text-xl" style={{
                                                color: "rgb(107 114 128 / 1)"
                                            }}>YouTube Subscribers</p>
                                        </div>
                                        <div className="border-t sm:border-0 sm:border-l border-gray-100 p-[1.5rem] text-center">
                                            <p className="font-extrabold text-main text-4xl">13+</p>
                                            <p className="font-bold text-xl" style={{
                                                color: "rgb(107 114 128 / 1)"
                                            }}>Years of Experience</p>
                                        </div>
                                        <div className="border-t sm:border-0 sm:border-l border-gray-100 p-[1.5rem] text-center">
                                            <p className="font-extrabold text-main text-4xl">6~</p>
                                            <p className="font-bold text-xl" style={{
                                                color: "rgb(107 114 128 / 1)"
                                            }}>Coding Languages</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="bg-gray-100 py-8">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-1/4 mb-8">
                                <h2 className="text-xl font-bold">Contact</h2>
                                <p className="text-gray-500 mt-4">Discord: imeltik</p>
                                <p className="text-gray-500 mt-4">Email: eltik@eltik.net</p>
                                <p className="text-gray-500">Phone: (123)-456-7890</p>
                            </div>
                            <div className="w-full lg:w-1/4 mb-8">
                                <h2 className="text-xl font-bold">Links</h2>
                                <ul className="mt-4">
                                    <li><Link href="#" className="text-gray-500 hover:text-gray-400 transition duration-150">Home</Link></li>
                                    <li><Link href="/projects" className="text-gray-500 hover:text-gray-400 transition duration-150">Projects</Link></li>
                                    <li><Link href="/youtube" className="text-gray-500 hover:text-gray-400 transition duration-150">YouTube</Link></li>
                                    <li><Link href="/premium" className="text-gray-500 hover:text-gray-400 transition duration-150">Premium+</Link></li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-1/4 mb-8">
                                <h2 className="text-xl font-bold">Social Media</h2>
                                <div className="flex flex-row gap-2">
                                    <Link href="#" className="text-gray-500 hover:text-gray-400 transition duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                        </svg>
                                    </Link>
                                    <Link href="#" className="text-gray-500 hover:text-gray-400 transition duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                                        </svg>
                                    </Link>
                                    <Link href="#" className="text-gray-500 hover:text-gray-400 transition duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="">
                                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                                        </svg>
                                    </Link>
                                    <Link href="#" className="text-gray-500 hover:text-gray-400 transition duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="">
                                            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/4 mb-8">
                                <h2 className="text-xl font-bold">Coming soon!</h2>
                                <p className="text-gray-500 mt-4">More details coming soon!</p>
                            </div>
                        </div>
                        <div className="border-t border-gray-700 mt-8 pt-4">
                        <p className="text-gray-500 text-sm text-center">© 2023 Eltik. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
};

export default Home;
