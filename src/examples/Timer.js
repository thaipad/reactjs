import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        const {count} = this.state;

        return (
            <div>
                <h1>Counter = {count}</h1>
            </div>
        );
    }

    componentDidMount() {
        this.doIntervalChange();
    }

    doIntervalChange = () => {
        this.myInterval = setInterval( () => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }


}

export default Timer;