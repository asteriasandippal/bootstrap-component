import React from 'react';
import PropTypes from 'prop-types';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            searchData: [],
        };
    }

    componentWillMount() {
        if (this.props.isShowData) {
            this.setState({
                searchData: this.state.data,
            });
        }
    }

    handleChange(event) {
        let searchData = this.state.data;

        searchData = searchData.filter(item =>
            item.name.toLowerCase()
                .search(event.target.value.toLowerCase())
                     !== -1);
        this.setState({
            searchData,
        });
        if (!this.props.isShowData) {
            if (event.target.value.length < 1) {
                this.setState({
                    searchData: [],
                });
            }
        }
    }

    render() {
        const isShowData = this.props.isShowData ?
            'search search__data' : 'search';
        return (
            <div className={isShowData}>
                <SearchForm onChange={e => this.handleChange(e)} />
                {this.props.isShowDataColummn ?
                    <SearchItemBlock searchData={this.state.searchData} />
                    :
                    <SearchItem searchData={this.state.searchData} />
                }
            </div>
        );
    }
}

Search.defaultProps = {
    data: [],
    isShowData: false,
    isShowDataColummn: false,
};
Search.propTypes = {
    data: PropTypes.array,
    isShowData: PropTypes.bool,
    isShowDataColummn: PropTypes.bool,
};

function SearchItem(props) {
    return (
        <ul className="search__lists">
            {props.searchData.map(item =>
                (item.url ?
                    <li key={item.id} className="search__list">
                        <a href={item.url}>
                            {item.name}
                        </a>
                    </li>
                    :
                    <li key={item.id} className="search__list">
                        <span>{item.name}</span>
                    </li>
                ))}
        </ul>
    );
}
SearchItem.defaultProps = {
    searchData: [],
};
SearchItem.propTypes = {
    searchData: PropTypes.array,
};

function SearchItemBlock(props) {
    return (
        <ul className="search__lists  search__lists--row">
            {props.searchData.map(item =>
                (item.url ?
                    <li
                        key={item.id}
                        className="search__list search__list--column"
                    >
                        <h4 className="search__title">
                            <a href={item.url}>
                                {item.name}
                            </a>
                        </h4>
                        {item.description ?
                            <p>{item.description}</p>
                            : ''
                        }
                    </li>
                    :
                    <li key={item.id} className="search__list">
                        <h4 className="search__title">{item.name}</h4>
                        {item.description ?
                            <p>{item.description}</p>
                            : ''
                        }
                    </li>
                ))}
        </ul>
    );
}
SearchItemBlock.defaultProps = {
    searchData: [],
};
SearchItemBlock.propTypes = {
    searchData: PropTypes.array,
};

function SearchForm(props) {
    return (
        <div className="search__form">
            <input
                type="text"
                className="search__input"
                placeholder="Search..."
                onChange={props.onChange}
            />
        </div>
    );
}
SearchForm.defaultProps = {
    onChange: () => {},
};
SearchForm.propTypes = {
    onChange: PropTypes.func,
};
