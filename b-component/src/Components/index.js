import React from 'react';
import ComponentsBlockWrapper from './common/ComponentsBlockWrapper';
import ComponentsBlock from './common/ComponentsBlock';
import AlertComponent from './AlertComponent';

class Components extends React.Component {
    render() {
        return (
            <div className="components-container">
                <ComponentsBlockWrapper>
                    <ComponentsBlock title="Title">
                        <AlertComponent/>
                    </ComponentsBlock>
                    <ComponentsBlock title="Alert">
                        <AlertComponent/>
                    </ComponentsBlock>
                </ComponentsBlockWrapper>
            </div>
        );
    }
}

export default Components;
