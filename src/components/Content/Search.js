import React from 'react';
import { MyContext } from '../../DataProvider';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

const Search = () => {
    return (
      <div className="search-form-wrapper">
        <MyContext.Consumer>
          {context => (
            <form
              id="seach"
              onSubmit={e => {
                e.preventDefault();
                context.find(e.target.search.value);
              }}
            >
              <fieldset>
                <div className="field">
                  <input type="text" className="search-field" placeholder="What do you want ?" name="search" />
                </div>
                <div className="field action">
                  <button class="button submit" type="submit"> <SearchIcon /> Search </button>
                </div>
              </fieldset>
            </form>
          )}
        </MyContext.Consumer>
      </div>
    );
}

export default Search;
