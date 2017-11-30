import React from  'react';

function LeftColumn(props) {
    
    return (
        <aside className="left-column">
            <div className="sidebar">
                <h3 className="sidebar__title">Components</h3>
                <ul className="sidebar__listing ul-listing">
                    <li className="ul-listing__item">
                        <a className="ul-listing__link"
                            onClick={(e) => props.pageScroll('component-block1')}>Alert</a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default LeftColumn;
