import React, { Component, Fragment } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Featured from '../components/Featured';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Featured />
      </Fragment>
    );
  }
}

export default Home;
