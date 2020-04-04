import React from 'react';
import ContentLoader from 'react-content-loader'

const ItemsLoader = props => (
  <ContentLoader
    speed={2}
    width={500}
    height={800}
    viewBox="0 0 500 800"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="30" ry="30" width="240" height="200" />
    <rect x="255" y="0" rx="30" ry="30" width="240" height="200" />
    <rect x="0" y="215" rx="30" ry="30" width="240" height="200" />
    <rect x="255" y="215" rx="30" ry="30" width="240" height="200" />
  </ContentLoader>
);

export default ItemsLoader;
