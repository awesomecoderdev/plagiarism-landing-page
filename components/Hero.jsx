import Link from 'next/link';
import React, { Component, Fragment } from 'react';
import { PlayCircleIcon, ShieldCheckIcon  } from '@heroicons/react/24/outline'
import Image from 'next/image';

class Hero extends Component {
    render() {
        return (
            <Fragment>
                <div className="relative w-full grid md:grid-cols-2 grid-cols-1 lg:p-16 p-6 md:gap-0 gap-16">
                    <div className="relative  md:order-1 order-2 ">
                        <h1 className='xl:text-5xl lg:text-4xl xl:leading-[4rem] lg:leading-10 text-3xl text-slate-700  font-semibold'>
                            Launch a paid chat community in minutes
                        </h1>
                        <p className="my-3 text-lg font-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus, nobis officia pariatur aliquid porro.
                        </p>
                        <div className='absolute transform rotate-[60deg] right-0  z-10 xl:bottom-14 lg:bottom-16 md:bottom-24 bottom-5 lg:w-28 md:w-20 w-16'>
                            <Image
                                src={"/arrow.png"}
                                alt="Picture of the author"
                                width={140}
                                height={140}
                            />
                        </div>
                        <div className="relative flex md:flex-row md:space-y-0 space-y-5 flex-col py-10">
                            <Link href="#" >
                                <a className="flex items-center xl:h-14 lg:h-10 md:h-8 h-10 bg-primary-500 mx-2 text-slate-600 xl:text-lg lg:text-sm text-xs font-semibold xl:py-3 lg:py-1 rounded-xl xl:px-10 lg:px-4  px-4">
                                    Get started free
                                </a>
                            </Link>
                            <Link href="#" >
                                <a className=" bg-white xl:h-14 lg:h-10 md:h-8 mx-2 border border-slate-400/10 rounded-xl text-slate-600 xl:text-lg lg:text-sm text-xs font-semibold py-3 xl:px-10 lg:px-4 px-4 flex items-center">
                                    <PlayCircleIcon strokeWidth={1} stroke="currentColor" className="xl:w-8 lg:w-6 w-5 mr-2 lg:ml-0 " />
                                    <span>Play intro</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="relative md:px-14 md:py-10 p-6 md:order-2 md:mb-0 order-1 ">
                        <div className="h-4 w-4 absolute md:left-36 left-0 z-10 rounded-full bg-orange-400 pointer-events-none"></div>
                        <div className="transform -rotate-12 h-6 w-6 md:right-10 right-0 z-10  top-0 absolute bg-orange-400 pointer-events-none"></div>
                        <div className="transform -rotate-45 h-4 w-4 right-12 top-32 absolute opacity-70 bg-sky-400 z-10 pointer-events-none"></div>
                        <div className="transform lg:scale-100 md:scale-75 scale-50 overflow-hidden -rotate-12 pointer-events-none absolute xl:left-10 lg:-left-5 md:-left-8 -left-14 md:top-44 top-28 z-10 text-center bg-white border border-slate-200/50 w-44 h-24 rounded-2xl shadow-xl">
                            <h2 className='text-sm p-2 font-semibold text-slate-500 flex justify-center items-center'> <ShieldCheckIcon strokeWidth={2.5} className='w-4 h-4 mr-1' /> Scanned</h2>
                            <div className="flex-1 space-y-2 py-1 p-4">
                                <div className="h-2 bg-slate-100 rounded"></div>
                                <div className="space-y-2">
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="h-2 bg-slate-100 rounded col-span-2"></div>
                                        <div className="h-2 bg-slate-100 rounded col-span-1"></div>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded"></div>
                                </div>
                            </div>
                            {/* <div className="relative flex justify-center items-center">
                                <Image
                                    src={"/svg/search.svg"}
                                    alt="Contents"
                                    width={140}
                                    height={40}
                                />
                            </div> */}
                        </div>
                        <div className="h-7 w-7 absolute md:bottom-8 bottom-4 md:left-56 left-24 rounded-full shadow-xl flex justify-center items-center bg-white pointer-events-none z-10">
                            <div className="bg-green-400 h-3 w-3 rounded-full"></div>
                        </div>
                        <div className="h-2 w-2 absolute bottom-14 left-28 transform -rotate-12 bg-sky-400 pointer-events-none"></div>


                        <div className="relative flex justify-end items-center">
                            <div className="w-full h-auto max-w-xs md:ml-4 m-0 bg-white shadow-slate-500 border border-slate-200/50 rounded-2xl p-5">
                                <h1 className='text-center lg:text-xl md:text-sm text-sm font-semibold text-slate-700'>Connect with your website</h1>
                                <p className='text-center lg:text-sm text-xs font-semibold text-slate-500 py-4'>Connect WordPress</p>
                                <div className="relative flex justify-center items-center w-24 mx-auto">
                                    <Image
                                        src={"/svg/wordpress.svg"}
                                        alt="Contents"
                                        width={150}
                                        height={150}
                                    />
                                </div>
                                <p className='text-center lg:text-sm text-xs font-semibold text-slate-500 py-1'>Scan contents</p>
                                <div className="relative flex justify-center items-center w-24 mx-auto">
                                    <Image
                                        src={"/svg/content.svg"}
                                        alt="Contents"
                                        width={150}
                                        height={150}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Hero;
