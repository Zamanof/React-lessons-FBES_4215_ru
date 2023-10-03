import React, {Component} from 'react';

class ClassCounter extends Component {
    componentDidMount() {
        console.log('Class component Mount')
    }
    componentWillUnmount() {
        console.log("Class component Unmount")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Class component Update')
    }

    render() {
        return (
            <p>{this.props.value}</p>
        );
    }
}

export default ClassCounter;