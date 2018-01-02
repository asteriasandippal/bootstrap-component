import React from 'react';
import PropTypes from 'prop-types';

export class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkBoxisCheck: false,
            selected: {},
            selectedAll: 0,
            data: props.data,
            isButton: false,
            shortBy: false,
        };
        this.handleShortBy = this.handleShortBy.bind(this);
    }

    oneCheckBoxisCheck(e, id) {
        const newSelected = Object.assign({}, this.state.selected);
        newSelected[id] = !this.state.selected[id];
        this.setState({
            selected: newSelected,
            isButton: true,
        });
    }

    allCheckBoxisCheck() {
        const allSelected = {};
        if (this.state.selectedAll === 0) {
            this.state.data.forEach((x) => {
                allSelected[x.id] = true;
            });
        }
        this.setState({
            selected: allSelected,
            checkBoxisCheck: !this.state.checkBoxisCheck,
        });
        if (this.state.checkBoxisCheck) {
            this.setState({
                selected: {},
            });
        }
    }

    deleteRow() {
        // const checkedData = [];
        // for (key in this.state.selected) {
        //     if (this.state.selected[key] === true) {
        //         checkedData = checkedData.concat(this.state.data[(i - 1)]);
        //     }
        // const filterData = this.state.data.filter(obj => checkedData.indexOf(obj) === -1);

        this.setState({
            selected: [],
            // data: checkedData,
        });
    }
    handleShortBy(title) {
        if (title === 'price') {
            this.setState({
                shortBy: !this.state.shortBy,
            });
            if (this.state.shortBy) {
                const data = this.state.data.sort((a, b) => a.price > b.price);
                this.setState({
                    data,
                });
            } else {
                const data = this.state.data.sort((a, b) => a.price < b.price);
                this.setState({
                    data,
                });
            }
        } else if (title === 'name') {
            this.setState({
                shortBy: !this.state.shortBy,
            });
            if (this.state.shortBy) {
                const data = this.state.data.sort((a, b) => a.name > b.name);
                this.setState({
                    data,
                });
            } else {
                const data = this.state.data.sort((a, b) => a.name < b.name);
                this.setState({
                    data,
                });
            }
        }
    }

    render() {
        const { props } = this;
        let isCheckList;
        let isCheckListHeader;
        const checkBox = (
            <span>
                <input
                    type="checkbox"
                    checked={this.state.checkBoxisCheck}
                    onChange={() => this.allCheckBoxisCheck()}
                />
            </span>);
        if (props.checkList) {
            isCheckList = this.state.data
                .map(item => (
                    <tr
                        key={item.id}
                        className={this.state.selected[item.id] ? 'rowcheck' : ''}
                    >
                        <td>
                            <span>
                                <input
                                    type="checkbox"
                                    checked={this.state.selected[item.id] === true}
                                    name={item.name}
                                    value={item.name}
                                    onChange={e => this.oneCheckBoxisCheck(e, item.id)}
                                />
                            </span>
                        </td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                    </tr>
                ));
        } else {
            isCheckList = props.data.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                </tr>
            ));
        }
        if (props.checkList) {
            isCheckListHeader = <th>{checkBox}</th>;
        }
        const isButton = this.state.isButton
            ? (
                <button
                    className="button"
                    onClick={e => this.deleteRow(e)}
                >Delete
                </button>
            ) : '';

        const activeShortArrow = this.state.shortBy ? 'active' : '';

        return (
            <div>
                {isButton}
                <table className="table">
                    <thead>
                        <tr>
                            {isCheckListHeader}
                            {React.Children.map(props.children, (child) => {
                                if (child.props.sortBy) {
                                    return (
                                        <th
                                            className={activeShortArrow}
                                            onClick={() =>
                                                this.handleShortBy(child.props.dataItem)}
                                        >
                                            {child}
                                            <span className="tableshortArrow" />
                                        </th>);
                                }
                                return (<th> {child} </th>);
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {isCheckList}
                    </tbody>
                </table>
            </div>
        );
    }
}

Table.defaultProps = {
    data: [],
};

Table.propTypes = {
    data: PropTypes.array,
};

export function TableHeader(props) {
    return (
        <span dataset={props.dataItem}>
            {props.children}
        </span>
    );
}
TableHeader.defaultProps = {
    children: '',
    dataItem: '',
};

TableHeader.propTypes = {
    children: PropTypes.any,
    dataItem: PropTypes.string,
};
