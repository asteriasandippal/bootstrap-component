import React from 'react';
import { Dropdown, DropdownItemGroup, DropdownItem } from './Dropdown';
import '../../stylesheets/components/dropdown.css';

function DropdownComponent() {
    return (
        <div>
            <Dropdown
                title="Dropdown"
                triggerType="button"
                IsIcon
            >
                <DropdownItemGroup>
                    <DropdownItem onClick={e => console.log(e.target)}>Item01</DropdownItem>
                    <DropdownItem>Item02</DropdownItem>
                    <DropdownItem>Item03</DropdownItem>
                    <DropdownItem>Item04</DropdownItem>
                </DropdownItemGroup>
            </Dropdown>

        </div>
    );
}

export default DropdownComponent;
