import Image from 'next/image';
import Link from 'next/link';
import React, { Component, Fragment } from 'react';

class Nav extends Component {
    render() {
        return (
            <Fragment>
                <nav className="relative w-full bg-white p-5  rounded-2xl flex justify-between items-center">
                    <div className='relative px-12 flex items-center justify-center'>
                        <Image
                            src={"/apple-touch-icon.png"}
                            alt="Picture of the author"
                            width={30}
                            height={30}
                        />
                        <span className="ml-1 text-2xl font-semibold text-slate-700">WPplagiarism</span>
                    </div>
                    <div className="relative px-12 items-center font-medium lg:flex hidden">
                        <div className="relative flex space-x-5 pr-5 border-r-2 border-slate-400/40">
                            <Link href={"#"} >
                                <a className="text-secondary-50">Home</a>
                            </Link>
                            <Link href={"#featured"}>
                                <a className='text-sm font-semibold'>Featured</a>
                            </Link>
                            <Link href={"#pricing"}>
                                <a className='text-sm font-semibold'>Pricing</a>
                            </Link>
                            <Link href={"#"}>
                                <a className='text-sm font-semibold'>FAQ</a>
                            </Link>
                            <Link href={"#"}>
                                <a className='text-sm font-semibold'>About</a>
                            </Link>
                        </div>
                        <div className="relative flex items-center space-x-1.5 pl-5">
                            <Link href={"#"}>
                                <a className="border-2 border-slate-400/80 py-1 px-4 rounded-xl bg-transparent font-semibold">Sine In</a>
                            </Link>
                            <Link href={"#"}>
                                <a className="border-2 border-primary-500 py-1 px-4 rounded-xl bg-primary-500 font-semibold">Sine Up</a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </Fragment>
        );
    }
}

export default Nav;
