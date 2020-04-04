import React from 'react';
import { MyContext } from '../../DataProvider';
import Item from './Items/default';
import ItemsLoader from './Items/loader';

const Items = () => {
    return (
      <MyContext.Consumer>
        {context => (
          <div className="podcast-items">
            {(!context.loading) ? context.podcasts.map((podcast, i) => (
              <Item podcast={podcast} key={i} />
            )):<ItemsLoader />}
          </div>
        )}
      </MyContext.Consumer>
    );
}


export default Items;
