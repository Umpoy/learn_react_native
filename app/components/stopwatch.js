import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Stopwatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0
        }
    }

    render() {
        const { elapsed, status } = this.state;
        return (
            <View>
                <Text className="elapsed">{elapsed}</Text>
                <Text className="status">{status}</Text>
            </View>
        )
    }
}

export default Stopwatch;