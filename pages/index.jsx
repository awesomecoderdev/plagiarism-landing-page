import React, { Component, Fragment } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Featured from '../components/Featured';
import Pricing from '../components/Pricing';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Featured />
        <Pricing />
      </Fragment>
    );
  }
}

export default Home;
