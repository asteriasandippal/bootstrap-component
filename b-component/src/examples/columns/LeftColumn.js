import React from 'react';
import PropTypes from 'prop-types';

function LeftColumn(props) {
    return (
        <aside className="left-column">
            <div className="sidebar">
                <h3 className="sidebar__title">Components</h3>
                <ul className="sidebar__listing ul-listing">
                    <li className="ul-listing__item">
                        <button
                            className="ul-listing__link"
                            onClick={() => props.pageScroll('component-block1')}
                        >
                        Alert
                        </button>
                    </li>
                    <li className="ul-listing__item">
                        <button
                            className="ul-listing__link"
                            onClick={() => props.pageScroll('component-block2')}
                        >
                        Alert
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

LeftColumn.defaultProps = {
    pageScroll: () => '',
};

LeftColumn.propTypes = {
    pageScroll: PropTypes.func,
};

export default LeftColumn;
