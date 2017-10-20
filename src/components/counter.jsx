import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return { counter: state }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: (num) => dispatch({ type: "INCREMENT", payload: num }),
        decrement: (num) => dispatch({ type: "DECREMENT", payload:  num })
    }
}
class Counter extends Component {
    constructor() {
        super();
        this.state = {num : 0}
    }
    render() {
        return (
            <div> {this.props.counter} <br />
                <input type="text" onChange={(ev)=> this.setState({num: Number(ev.target.value)})}/>
                <button onClick={() => this.props.increment(this.state.num)}>Add</button>
                <button onClick={() => this.props.decrement(this.state.num)}>Subtract</button>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);