import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { DataProvider } from './DataProvider';

const PodcastApp = () => {
  return (
    <DataProvider>
      <Header />
      <Content />
      <Footer />
    </DataProvider>
  );
}

export default PodcastApp;
