import React from 'react';
import ReactTimeAgo from 'react-time-ago'
import { ascendingSort, descendingSort } from '../../assets/js/common';
import { ICON_SORT_ASCENDING, ICON_SORT_DESCENDING } from '../../assets/js/icons';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            sortColumn: "",
            ascending: true
        }

        this.renderTableContent = this.renderTableContent.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.formatServerDate = this.formatServerDate.bind(this);
        this.sort = this.sort.bind(this);
        this.renderSortIcon = this.renderSortIcon.bind(this);
    }

    renderTableContent(data) {
        if (data && data.length > 0) {
            return data.map((item, index) => {
                return this.renderRow(item, index);
            })
        }

        return null;
    }

    renderRow(stateData, rowIndex) {
        return (
            <tr key={rowIndex}>
                <td>
                    <div>{stateData.state}</div>
                    <div className="updated-time"><ReactTimeAgo date={this.formatServerDate(stateData.lastupdatedtime)} /></div>
                    {/* <div className="updated-time">{stateData.lastupdatedtime}</div> */}
                </td>
                <td>{stateData.confirmed} <span className="sub-text">{stateData.deltaconfirmed}</span></td>
                <td>{stateData.active}</td>
                <td>{stateData.recovered}<span className="sub-text">{stateData.deltarecovered}</span></td>
                <td>{stateData.deaths}<span className="sub-text">{stateData.deltadeaths}</span></td>
            </tr>
        )
    }

    formatServerDate(serverDate) {
        if (serverDate) {
            var dateArray = serverDate.split("/");
            return new Date(dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2]);
        }

        return null;
    }

    sort(columnName) {
        var _ascending = this.state.ascending;
        var _sortColumn = this.state.sortColumn;
        if (_sortColumn === columnName) {
            _ascending = !_ascending;
        } else {
            _ascending = true;
            _sortColumn = columnName;
        }

        this.setState({
            sortColumn: _sortColumn,
            ascending: _ascending
        })

        var sortedData = this.state.data;
        if (_ascending) {
            sortedData = ascendingSort(this.state.data, _sortColumn);
        } else {
            sortedData = descendingSort(this.state.data, _sortColumn);
        }

        this.setState({
            data: sortedData
        })
    }

    renderSortIcon(columnName) {
        if (columnName) {
            if (this.state.sortColumn === columnName) {
                if (this.state.ascending) {
                    return ICON_SORT_DESCENDING;
                } else {
                    return ICON_SORT_ASCENDING;
                }
            }

            return null;
        }

        return null;
    }

    render() {

        if (!this.state.data)
            return null;

        return (
            <div class="r0w r0w-center">
                <table>
                    <thead>
                        <td>State</td>
                        <td><span className="pointer" onClick={() => this.sort("confirmed")}>Confirmed {this.renderSortIcon("confirmed")}</span></td>
                        <td><span className="pointer" onClick={() => this.sort("active")}>Active {this.renderSortIcon("active")}</span></td>
                        <td><span className="pointer" onClick={() => this.sort("recovered")}>Recovered {this.renderSortIcon("recovered")}</span></td>
                        <td><span className="pointer" onClick={() => this.sort("deaths")}>Deaths {this.renderSortIcon("deaths")}</span></td>
                    </thead>
                    <tbody>
                        {this.renderTableContent(this.state.data)}
                    </tbody>
                </table>
            </div>
        )
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            data: newProps.data
        }, () => {
            this.sort("confirmed")
        })
    }
}

export default Table;