import React from 'react';
import ReactTimeAgo from 'react-time-ago'

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            orderColumnName: "confirmed",
            orderType: "A"
        }
        this.renderTableContent = this.renderTableContent.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.formatServerDate = this.formatServerDate.bind(this);
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

    render() {

        if (!this.state.data)
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
                        {this.renderTableContent(this.state.data)}
                    </tbody>
                </table>
            </div>
        )
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            data: newProps.data
        })
    }
}

export default Table;