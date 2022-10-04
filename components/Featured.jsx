import React, { Component, Fragment } from 'react';
import { BeakerIcon, PlayCircleIcon  } from '@heroicons/react/24/outline'
import Image from 'next/image';

class Featured extends Component {
    render() {
        return (
            <Fragment>
                <section id="featured" className='relative bg-white font-poppins pb-20'>
                    <div className="container">
                        <h1 className='text-center text-slate-700 xl:text-5xl lg:text-4xl sm:text-2xl text-3xl md:py-10 py-2 font-semibold'>Build real-time community</h1>
                        <div className="relative grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8 py-10 lg:px-10 md:px-8 px-5">
                            <div className="relative min-h-[20rem] mx-auto w-full md:p-8 p-5 border border-primary-500/90 cursor-pointer duration-150 transition-all hover:-translate-y-2 hover:shadow-2xl rounded-lg">
                                <div className="relative flex justify-center items-center">
                                    <Image
                                        src="/svg/platform.svg"
                                        alt='Platform'
                                        width={110}
                                        height={110}
                                    />
                                </div>
                                <h1 className='font-poppins text-lg font-semibold text-center text-slate-700 my-2'>Most relevant platform</h1>
                                <p className='font-poppins text-sm font-medium text-center text-slate-600 my-2'>With a 24 - hour news cycle , communities want to share and respond to the latest as it happens .</p>
                            </div>
                            <div className="relative min-h-[20rem] mx-auto w-full md:p-8 p-5 border border-primary-500/90 cursor-pointer duration-150 transition-all hover:-translate-y-2 hover:shadow-2xl rounded-lg">
                                <div className="relative flex justify-center items-center">
                                    <Image
                                        src="/svg/server.svg"
                                        alt='Server'
                                        width={110}
                                        height={110}
                                    />
                                </div>
                                <h1 className='font-poppins text-lg font-semibold text-center text-slate-700 my-2'>Foster trust that builds</h1>
                                <p className='font-poppinstext-sm font-medium text-center text-slate-600 my-2'> Never fear a toxic community for your in - app messaging . With Sendbird's user - to - user</p>
                            </div>
                            <div className="relative min-h-[20rem] mx-auto w-full md:p-8 p-5 border border-primary-500/90 cursor-pointer duration-150 transition-all hover:-translate-y-2 hover:shadow-2xl rounded-lg">
                                <div className="relative flex justify-center items-center">
                                    <Image
                                        src="/svg/security.svg"
                                        alt='Security'
                                        width={110}
                                        height={110}
                                    />
                                </div>
                                <h1 className='font-poppins text-lg font-semibold text-center text-slate-700 my-2'>Start conversations</h1>
                                <p className='font-poppins only:text-sm font-medium text-center text-slate-600 my-2'> As commmunities scale , guarantee your users a place to belong by empowering conversations</p>
                            </div>
                            <div className="relative min-h-[20rem] mx-auto w-full md:p-8 p-5 border border-primary-500/90 cursor-pointer duration-150 transition-all hover:-translate-y-2 hover:shadow-2xl rounded-lg">
                                <div className="relative flex justify-center items-center">
                                    <Image
                                        src="/svg/notifications.svg"
                                        alt='Notifications'
                                        width={110}
                                        height={110}
                                    />
                                </div>
                                <h1 className='font-poppins text-lg font-semibold text-center text-slate-700 my-2'>Built - in safety for chat</h1>
                                <p className='font-poppins text-sm font-medium text-center text-slate-600 my-2'> Automatic image blocking . Profanity Filters - Spam flood protection</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Featured;
