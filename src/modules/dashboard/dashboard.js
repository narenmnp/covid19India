import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Table from './table';
import { getCumulativeCovid19Data } from './action';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.countryData)
            return null;

        var countryData = this.props.countryData;
        return (
            <div>
                <Header />
                <div className="r0w r0w-center">
                    <div className="counter-circle">
                        <p className="counter-title">Confirmed</p>
                        <div className="counter-number">{countryData.confirmed}</div>
                        {/* <div className="sub-text">300</div> */}
                    </div>
                    <div className="counter-circle">
                        <p className="counter-title">Active</p>
                        <div className="counter-number">{countryData.active}</div>
                        {/* <div className="sub-text">300</div> */}
                    </div>
                    <div className="counter-circle">
                        <p className="counter-title">Recovered</p>
                        <div className="counter-number">{countryData.recovered}</div>
                        {/* <div className="sub-text">300</div> */}
                    </div>
                    <div className="counter-circle">
                        <p className="counter-title">Deaths</p>
                        <span className="counter-number">{countryData.deaths}</span>
                    </div>
                </div>
                <Table data={this.props.stateData} />
            </div>
        )
    }

    componentDidMount() {
        this.props.getCumulativeCovid19Data()
    }
}

function mapStateToProps(state) {
    return {
        countryData: state.covid19Reducer.countryData,
        stateData: state.covid19Reducer.stateData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCumulativeCovid19Data: () => {
            dispatch(getCumulativeCovid19Data())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);