import React from 'react';
import PropTypes from 'prop-types';

function ComponentsBlockWrapper (props) {
    const childrenWithComponent = React.Children.map(props.children, (child, index) => {
        const sectionId = `component-block${index + 1}`;
        return (
            <section id={sectionId} className="component-main">
                {child}
            </section>
        );
    });
    
    return (
        <div>
            {childrenWithComponent}
        </div>
    );
}

ComponentsBlockWrapper.porpTypes =  {
    children: PropTypes.any.isRequired
}

export default ComponentsBlockWrapper;
