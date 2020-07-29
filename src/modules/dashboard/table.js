import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.renderTableContent = this.renderTableContent.bind(this);
        this.renderRow = this.renderRow.bind(this);
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
                    <div className="updated-time">{stateData.lastupdatedtime}</div>
                </td>
                <td>{stateData.confirmed} <span className="sub-text">{stateData.deltaconfirmed}</span></td>
                <td>{stateData.active}</td>
                <td>{stateData.recovered}<span className="sub-text">{stateData.deltarecovered}</span></td>
                <td>{stateData.deaths}<span className="sub-text">{stateData.deltadeaths}</span></td>
            </tr>
        )
    }

    render() {

        if (!this.props.data)
            return null;

        return (
            <div class="r0w r0w-center">
                <table>
                    <thead>
                        <td>State</td>
                        <td>Confirmed</td>
                        <td>Active</td>
                        <td>Recovered</td>
                        <td>Deaths</td>
                    </thead>
                    <tbody>
                        {this.renderTableContent(this.props.data)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;