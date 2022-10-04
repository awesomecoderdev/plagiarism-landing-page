import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { Component, Fragment } from "react";

class Pricing extends Component {

    render() {
        return (
            <Fragment>
                <section id="pricing" aria-label="Pricing" className="relative bg-primary-50 py-10 text-slate-600 font-poppins">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="md:text-center">
                            <h2 className="text-center text-slate-700 xl:text-5xl lg:text-4xl sm:text-2xl text-3xl font-semibold">
                                Convinient Pricing
                            </h2>
                            <p className="mt-4 text-lg text-slate-500 font-medium ">
                                Choose the right pricing for you and get started with your project .
                            </p>
                        </div>
                    </div>
                    <div className="relative py-14 w-full max-w-7xl px-4 mx-auto grid lg:grid-cols-3 grid-cols-1 lg:gap-4 md:gap-3 ">
                        <div className="relative mx-auto bg-white rounded-lg max-w-sm  md:p-8 p-5 border">
                            <h2 className="text-lg py-2 font-semibold text-slate-700">Basic</h2>
                            <span className="whitespace-nowrap overflow-hidden">
                                <span className="text-5xl font-bold text-slate-800">$49</span>
                                <span className="text-sm font-semibold text-slate-500">/month</span>
                            </span>
                            <p className="text-sm py-5 font-medium text-slate-500 h-20">Good for anyone who is self-employed and just getting started.</p>
                            <hr className="mb-5" />
                            <div className="relative space-y-2 font-semibold text-sm">
                                <h3 className="flex space-x-2 items-center">
                                    <CheckCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-green-500" />
                                    <span>1 PRO website activation</span>
                                </h3>
                                <h3 className="flex space-x-2 items-center">
                                    <CheckCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-green-500" />
                                    <span>Max 50 posts / website</span>
                                </h3>
                                <h3 className="flex space-x-2 items-center">
                                    <CheckCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-green-500" />
                                    <span>Email notification (weekly)</span>
                                </h3>
                                <h3 className="flex space-x-2 items-center">
                                    <CheckCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-green-500" />
                                    <span>Sync weekly</span>
                                </h3>
                                <h3 className="flex space-x-2 items-center">
                                    <XCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-red-500" />
                                    <span>Email notification (daily)</span>
                                </h3>
                                <h3 className="flex space-x-2 items-center">
                                    <XCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-red-500" />
                                    <span>Sync daily</span>
                                </h3>
                                <h3 className="flex space-x-2 items-center">
                                    <XCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-red-500" />
                                    <span>Premium Support</span>
                                </h3>
                            </div>
                            <Link href="#" >
                                <a className="relative w-full mt-8 py-2 block text-center rounded-3xl bg-green-400 text-white font-semibold text-lg" >Get Started</a>
                            </Link>
                        </div>
                        <div className="relative mx-auto lg:my-0 my-14 bg-primary-500/50 md:scale-110 scale-100 z-10 rounded-lg max-w-sm  md:p-8 p-5 border">
                            <button className="absolute right-5 top-5 text-white py-1 px-3 font-semibold text-sm  bg-green-400 rounded-2xl">Popular</button>
                            <h2 className="text-lg py-2 font-semibold text-slate-700">Professional</h2>
                            <span className="whitespace-nowrap overflow-hidden">
                                <span className="text-5xl font-bold text-slate-800">$99</span>
                                <span className="text-sm font-semibold text-slate-500">/month</span>
                            </span>
                            <p className="text-sm py-5 font-medium text-slate-500 h-20">Perfect for small / medium sized businesses.</p>
                            <hr className="mb-5" />
                            <div className="relative space-y-2 font-semibold text-sm">
                                <h3 className="flex space-x-2 items-center">
                                    <CheckCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-green-500" />
                                    <span>5 PRO website activation</span>
                                </h3>
                                <h3 className="flex space-x-2 items-center">
                                    <CheckCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-green-500" />
                                    <span>Max 150 posts / website</span>
                                </h3>
                                <h3 className="flex space-x-2 items-center">
                                    <CheckCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-green-500" />
                                    <span>Email notification (weekly)</span>
                                </h3>
                                <h3 className="flex space-x-2 items-center">
                                    <CheckCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-green-500" />
                                    <span>Sync weekly</span>
                                </h3>
                                <h3 className="flex space-x-2 items-center">
                                    <CheckCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-green-500" />
                                    <span>Email notification (daily)</span>
                                </h3>
                                <h3 className="flex space-x-2 items-center">
                                    <CheckCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-green-500" />
                                    <span>Sync daily</span>
                                </h3>
                                <h3 className="flex space-x-2 items-center">
                                    <CheckCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-green-500" />
                                    <span>Premium Support</span>
                                </h3>
                            </div>
                            <Link href="#" >
                                <a className="relative w-full mt-8 py-2 block text-center rounded-3xl bg-green-400 text-white font-semibold text-lg" >Get Started</a>
                            </Link>
                        </div>
                        <div className="relative mx-auto bg-white rounded-lg max-w-sm  md:p-8 p-5 border">
                            <h2 className="text-lg py-2 font-semibold text-slate-700">Startup</h2>
                            <span className="whitespace-nowrap overflow-hidden">
                                <span className="text-5xl font-bold text-slate-800">$399</span>
                                <span className="text-sm font-semibold text-slate-500">/month</span>
                            </span>
                            <p className="text-sm py-5 font-medium text-slate-500 h-20">For even the biggest enterprise companies.</p>
                            <hr className="mb-5" />
                            <div className="relative space-y-2 font-semibold text-sm">
                            <h3 className="flex space-x-2 items-center">
                                    <CheckCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-green-500" />
                                    <span>25 PRO website activation</span>
                                </h3>
                                <h3 className="flex space-x-2 items-center">
                                    <CheckCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-green-500" />
                                    <span>Max 250 posts / website</span>
                                </h3>
                                <h3 className="flex space-x-2 items-center">
                                    <CheckCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-green-500" />
                                    <span>Email notification (weekly)</span>
                                </h3>
                                <h3 className="flex space-x-2 items-center">
                                    <CheckCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-green-500" />
                                    <span>Sync weekly</span>
                                </h3>
                                <h3 className="flex space-x-2 items-center">
                                    <CheckCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-green-500" />
                                    <span>Email notification (daily)</span>
                                </h3>
                                <h3 className="flex space-x-2 items-center">
                                    <CheckCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-green-500" />
                                    <span>Sync daily</span>
                                </h3>
                                <h3 className="flex space-x-2 items-center">
                                    <CheckCircleIcon strokeWidth={1.6} stroke="currentColor" className="h-6 w-6 text-green-500" />
                                    <span>Premium Support</span>
                                </h3>
                            </div>
                            <Link href="#" >
                                <a className="relative w-full mt-8 py-2 block text-center rounded-3xl bg-green-400 text-white font-semibold text-lg" >Get Started</a>
                            </Link>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}
export default Pricing;
