import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React, { Component, Fragment } from "react";

class Pricing extends Component {

    render() {
        return (
            <Fragment>
                <section id="pricing" aria-label="Pricing" className="relative bg-primary-50 py-20 sm:py-32 text-slate-600 font-poppins">

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="md:text-center">
                            <h2 className="text-center text-slate-700 xl:text-5xl lg:text-4xl sm:text-2xl text-3xl font-semibold">
                                Convinient Pricing
                            </h2>
                            <p className="mt-4 text-lg text-slate-500 font-semibold ">
                                Choose the right pricing for you and get started with your project .
                            </p>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}
export default Pricing;
