import React from 'react';
import PropTypes from 'prop-types';
import ComponentsBlockWrapper from './common/ComponentsBlockWrapper';
import ComponentsBlock from './common/ComponentsBlock';
import AlertComponent from './AlertComponent';
import BadgeComponent from './BadgeComponent';
import ButtonComponent from './ButtonComponent';
import CommentComponent from './CommentComponent';
import ModalComponent from './ModalComponent';
import TabComponent from './TabComponent';
import TableComponent from './TableComponent';
import DropdownComponent from './DropdownComponent';
import SliderComponent from './SliderComponent';
import SearchComponent from './SearchComponent';

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

        case 5:
            return (
                <ComponentsBlock title={level.name} key={level.componentId}>
                    <ModalComponent />
                </ComponentsBlock>
            );

        case 6:
            return (
                <ComponentsBlock title={level.name} key={level.componentId}>
                    <TabComponent />
                </ComponentsBlock>
            );
        case 7:
            return (
                <ComponentsBlock title={level.name} key={level.componentId}>
                    <TableComponent />
                </ComponentsBlock>
            );
        case 8:
            return (
                <ComponentsBlock title={level.name} key={level.componentId}>
                    <DropdownComponent />
                </ComponentsBlock>
            );
        case 9:
            return (
                <ComponentsBlock title={level.name} key={level.componentId}>
                    <SliderComponent />
                </ComponentsBlock>
            );

        case 10:
            return (
                <ComponentsBlock title={level.name} key={level.componentId}>
                    <SearchComponent />
                </ComponentsBlock>
            );

        default:
            return 'Sorry do not match Component!';
        }
    });

    return (
        <div className="components-container">
            <ComponentsBlockWrapper data={props.data}>
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
