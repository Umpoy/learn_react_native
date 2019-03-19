import React, { Component } from 'react';
import { View, Text } from 'react-native';

class FormatTime extends Component {
    render() {
        return (
            <Text>{this.props.elapsed}</Text>
        )
    }
}

export default FormatTime