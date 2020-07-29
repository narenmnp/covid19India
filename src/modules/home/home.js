import React from 'react';
import Dashboard from '../dashboard/dashboard'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Dashboard />
            </div>
        )
    }
}

export default Home;