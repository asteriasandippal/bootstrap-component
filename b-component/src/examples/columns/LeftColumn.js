import React from 'react';
import PropTypes from 'prop-types';

function LeftColumn(props) {
    return (
        <aside className="left-column">
            <div className="sidebar">
                <h3 className="sidebar__title">Components</h3>
                <ul className="sidebar__listing ul-listing">
                    {props.data.map((item, index) => (
                        <li className="ul-listing__item" key={index}>
                            <button
                                className="ul-listing__link"
                                onClick={() => props.pageScroll(`component-block${index + 1}`)}
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
    pageScroll: () => '',
    data: [],
};

LeftColumn.propTypes = {
    pageScroll: PropTypes.func,
    data: PropTypes.array,
};

export default LeftColumn;
