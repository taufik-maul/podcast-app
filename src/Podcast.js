import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { DataProvider } from './DataProvider';
import { Head } from "react-static";
import logo from "./icons/logo.svg";

const PodcastApp = () => {
  return (
    <>
      <Head>
          <title>Developer Talks</title>
          <link rel="icon" type="image/png" href={logo} sizes="16x16" />
      </Head>
      <DataProvider>
        <Header />
        <Content />
        <Footer />
      </DataProvider>
    </>
  );
}

export default PodcastApp;
