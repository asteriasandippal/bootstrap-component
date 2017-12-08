import React from 'react';
import PropTypes from 'prop-types';
import ComponentsBlockWrapper from './common/ComponentsBlockWrapper';
import ComponentsBlock from './common/ComponentsBlock';
import AlertComponent from './AlertComponent';
import BadgeComponent from './BadgeComponent';
import ButtonComponent from './ButtonComponent';
import CommentComponent from './CommentComponent';

function Components(props) {
    const levels = props.data.map((level) => {
        switch (level.componentId) {
        case 1:
            return (
                <ComponentsBlock title={level.name} key={level.componentId}>
                    <AlertComponent />
                </ComponentsBlock>
            );

        case 2:
            return (
                <ComponentsBlock title={level.name} key={level.componentId}>
                    <BadgeComponent />
                </ComponentsBlock>
            );

        case 3:
            return (
                <ComponentsBlock title={level.name} key={level.componentId}>
                    <ButtonComponent />
                </ComponentsBlock>
            );

        case 4:
            return (
                <ComponentsBlock title={level.name} key={level.componentId}>
                    <CommentComponent />
                </ComponentsBlock>
            );

        default:
            return 'Sorry do not match Component!';
        }
    });

    return (
        <div className="components-container">
            <ComponentsBlockWrapper>
                {levels}
            </ComponentsBlockWrapper>
        </div>
    );
}

Components.defaultProps = {
    data: [],
};

Components.propTypes = {
    data: PropTypes.array,
};

export default Components;
