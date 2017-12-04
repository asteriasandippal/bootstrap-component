import React from 'react';

import LeftColumn from './columns/LeftColumn';
import RightColumn from './columns/RightColumn';
import PageScroller from '../helpers/PageScroller';
import Components from '../Components';

function Page() {
    return (
        <div className="page">
            <LeftColumn pageScroll={link => PageScroller(document.getElementById(link))} />
            <RightColumn>
                <Components />
            </RightColumn>
        </div>
    );
}

export default Page;
