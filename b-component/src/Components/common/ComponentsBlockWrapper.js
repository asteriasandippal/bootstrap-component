import React from 'react';
import PropTypes from 'prop-types';

function ComponentsBlockWrapper(props) {
    const { children } = props;
    return React.Children.map(children, (child, index) => {
        const sectionId = `component-block${index + 1}`;
        return (
            <section id={sectionId} className="component-main">
                {child}
            </section>
        );
    });
}

ComponentsBlockWrapper.defaultProps = {
    children: {},
};

ComponentsBlockWrapper.porpTypes = {
    children: PropTypes.array.isRequired,
};

export default ComponentsBlockWrapper;
