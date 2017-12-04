import React from 'react';
import ComponentsBlockWrapper from './common/ComponentsBlockWrapper';
import ComponentsBlock from './common/ComponentsBlock';
import AlertComponent from './AlertComponent';

function Components() {
    return (
        <div className="components-container">
            <ComponentsBlockWrapper>
                <ComponentsBlock title="Alert">
                    <AlertComponent />
                </ComponentsBlock>
                <ComponentsBlock title="Alert">
                    <AlertComponent />
                </ComponentsBlock>
            </ComponentsBlockWrapper>
        </div>
    );
}

export default Components;
