import Link from 'next/link';
import React, { Component, Fragment } from 'react';
import { BeakerIcon  } from '@heroicons/react/24/outline'

class Hero extends Component {
    render() {
        return (
            <Fragment>
                <div className="relative w-full grid grid-cols-2 p-16">
                    <div className="relative">
                        <h1 className='text-5xl text-slate-700 leading-[5rem] font-semibold'>
                            Launch a paid chat community in minutes
                        </h1>
                        <p className="my-3 text-lg font-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus, nobis officia pariatur aliquid porro.
                        </p>
                        <div className="relative flex py-10">
                            <Link href="#" >
                                <a className="bg-primary-500 text-slate-600 text-lg font-semibold py-3 rounded-xl px-10">
                                    Get started free
                                </a>
                            </Link>
                            <Link href="#" >
                                <a className="text-slate-600 text-lg font-semibold py-3 px-10 flex justify-between">
                                <BeakerIcon className="h-6 w-6 text-blue-500"/>
                                Play Intro
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="relative px-14 py-10 ">
                        <div className="h-4 w-4 absolute rounded-full bg-orange-400 pointer-events-none"></div>
                        <div className="transform -rotate-12 h-6 w-6 right-20 top-0 absolute bg-orange-400 pointer-events-none"></div>
                        <div className="transform -rotate-45 h-4 w-4 right-28 top-32 absolute opacity-70 bg-sky-400 z-10 pointer-events-none"></div>
                        <div className="transform -rotate-12 pointer-events-none absolute top-44 z-10 text-center bg-white border border-slate-200/50 w-44 h-24 rounded-2xl shadow-xl">
                            <h2 className='text-sm p-2 font-semibold text-slate-500'>Completed</h2>
                            <div class="flex-1 space-y-2 py-1 p-4">
                                <div class="h-2 bg-slate-100 rounded"></div>
                                <div class="space-y-2">
                                    <div class="grid grid-cols-3 gap-3">
                                        <div class="h-2 bg-slate-100 rounded col-span-2"></div>
                                        <div class="h-2 bg-slate-100 rounded col-span-1"></div>
                                    </div>
                                    <div class="h-2 bg-slate-100 rounded"></div>
                                </div>
                            </div>
                        </div>
                        <div className="h-7 w-7 absolute bottom-8 left-48 rounded-full shadow-xl flex justify-center items-center bg-white pointer-events-none z-10">
                            <div className="bg-green-400 h-3 w-3 rounded-full"></div>
                        </div>
                        <div className="h-2 w-2 absolute bottom-14 transform -rotate-12  left-24 bg-sky-400 pointer-events-none"></div>


                        <div className="relative flex justify-center items-center">
                            <div className="w-full max-w-xs ml-4 bg-white shadow-slate-500 border border-slate-200/50 rounded-2xl h-96 p-5">
                                <h1 className='text-center text-lg font-semibold text-slate-700'>Connect with your website</h1>
                                <p className='text-center text-sm font-semibold text-slate-500 py-3'>Start scanning contents</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Hero;
