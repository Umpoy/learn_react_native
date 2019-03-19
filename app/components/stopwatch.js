import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Stopwatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0
        }
    }

    start = () => {
        this.setState({
            status: 'running',
            start: new Date().getTime()
        });
    }

    stop = () => {
        this.setState({ status: 'stopped' });
    }
    
    render() {
        const { elapsed, status } = this.state;
        return (
            <View>
                <Text className="elapsed">{elapsed}</Text>
                <Text className="status">{status}</Text>
                <Button
                    onPress={this.start}
                    title="Start"
                    color="#841584"
                    accessibilityLabel="Start Timer"
                />
                <Button
                    onPress={this.stop}
                    title="Stop"
                    color="#841584"
                    accessibilityLabel="Stop Timer"
                />
            </View>
        )
    }
}

export default Stopwatch;