import React from 'react';
import PropTypes from 'prop-types';
import LeftColumn from './columns/LeftColumn';
import RightColumn from './columns/RightColumn';
import PageScroller from '../helpers/PageScroller';
import Components from '../Components';

function Page(props) {
    return (
        <div className="page">
            <LeftColumn
                pageScroll={link => PageScroller(document.getElementById(link))}
                data={props.data}
            />
            <RightColumn>
                <Components data={props.data} />
            </RightColumn>
        </div>
    );
}
Page.defaultProps = {
    data: [],
};
Page.propTypes = {
    data: PropTypes.array,
};

export default Page;
