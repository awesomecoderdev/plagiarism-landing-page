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
                    <div className="relative">
                        Right
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Hero;
