import React from 'react';
import PropTypes from 'prop-types';

function LeftColumn(props) {
    return (
        <aside className="left-column">
            <div className="sidebar">
                <h3 className="sidebar__title">Components</h3>
                <ul className="sidebar__listing ul-listing">
                    {props.data.map(item => (
                        <li className="ul-listing__item" key={item.componentId}>
                            <button
                                className="ul-listing__link"
                                onClick={() => props.pageScroll(`${item.component}`)}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

LeftColumn.defaultProps = {
    data: [],
};

LeftColumn.propTypes = {
    data: PropTypes.array,
};

export default LeftColumn;
