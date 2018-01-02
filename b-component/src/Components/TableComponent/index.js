import React from 'react';
import { Table, TableHeader } from './Table';
import '../../stylesheets/components/table.css';
import TableData from '../../helpers/TableData';

function TableComponent() {
    return (
        <div>
            <Table data={TableData} checkList>
                <TableHeader dataItem="id">ID</TableHeader>
                <TableHeader dataItem="name" sortBy>Name</TableHeader>
                <TableHeader dataItem="description">Description</TableHeader>
                <TableHeader dataItem="price" sortBy>Price</TableHeader>
            </Table>
        </div>
    );
}

export default TableComponent;
