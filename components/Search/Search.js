import React, { useContext } from 'react';
import { searchItems } from "@/utils/constants";
import { AppContext } from "@/components/Search/AppContext";

const Search = () => {
    const { query, setQuery } = useContext(AppContext);
    return (
        <div className="search">
            <div className="search__icon">
                {searchItems[0]}
            </div>
            <div className="search__input">
                <input type="text" placeholder={searchItems[1]} value={query} onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={
                        (e) => {
                            if (e.key === "Enter") {
                                setQuery(e.target.value);
                            }
                        }
                    } />
            </div>
        </div>
    );
};

export default Search;