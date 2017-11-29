import React from 'react';

import LeftColumn from './columns/LeftColumn';
import RightColumn from './columns/RightColumn';
import {ScrollToResolver} from '../helpers/PageScroller';
import Components from '../Components';

export default class Page extends React.Component {
    pageScroll(e) {
        console.log('PageScroll', e);
        ScrollToResolver(document.getElementById(e));
    }

    render() {
        return (
            <div className="page">
                <LeftColumn pageScroll={this.pageScroll}/>
                <RightColumn>
                    <Components/>
                </RightColumn>
            </div>
        );
    }
}
