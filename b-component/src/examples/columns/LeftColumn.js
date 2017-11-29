import React from  'react';

function LeftColumn(props) {
    
    return (
        <aside className="left-column">
            <div className="sidebar">
                <ul className="sidebar__listing ul-listing">
                    <li className="ul-listing__item">
                        <a className="ul-listing__link"
                            onClick={(e) => props.pageScroll('component-block1')}>Items1</a>
                    </li>
                    <li className="ul-listing__item">
                        <a className="ul-listing__link"
                            onClick={(e) => props.pageScroll('component-block2')}>Items1</a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default LeftColumn;
