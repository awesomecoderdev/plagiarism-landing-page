import React, { Component, Fragment } from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';

class Header extends Component {
    render() {
        return (
            <Fragment>
                {/* <img
                src={"/bg.png"}
                className='absolute top-0 z-10 w-full pointer-events-none opacity-50'
                /> */}
                <header className="relative bg-primary-50 font-poppins overflow-hidden">
                    <div className="container py-10 ">
                        <Nav />
                        <Hero />
                    </div>
                    <div className="absolute transform -rotate-3 -bottom-24 w-screen h-40 bg-white"></div>
                </header>
            </Fragment>
        );
    }
}

export default Header;
