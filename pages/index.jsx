import React, { Component, Fragment } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav';
import Hero from '../components/Hero';

class Home extends Component {
  render() {
    return (
      <Fragment>
        {/* <Image
          src={"/bg.png"}
          className='absolute top-0 z-10 pointer-events-none opacity-75'
        /> */}
        {/* <img
        src={"/bg.png"}
        className='absolute top-0 z-10 w-full pointer-events-none opacity-75'
        /> */}
        <header className="bg-primary-50 font-poppins">
          <div className="container py-10 ">
            <Nav />
            <Hero />
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Home;
