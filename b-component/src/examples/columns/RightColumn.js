import React from 'react';

function RightColumn(props) {
    return (
        <section className="right-column">
            <div className="main">
                {props.children}
            </div>
        </section>
    );
}

export default RightColumn;
