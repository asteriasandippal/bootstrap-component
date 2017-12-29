import React from 'react';
import Search from './Search';
import '../../stylesheets/components/search.css';
import SearchData from '../../helpers/SearchData';

function SearchComponent() {
    return (
        <div>
            <Search
                data={SearchData}
                isShowData
                isShowDataColummn
            />
        </div>
    );
}

export default SearchComponent;
