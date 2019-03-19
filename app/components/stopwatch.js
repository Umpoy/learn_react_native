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
        setTimeout(this.update, 10);
    }

    stop = () => {
        this.setState({ status: 'stopped' });
    }

    update = () => {
        const { status, start } = this.state;
        if (status === 'running') {
            this.setState({ elapsed: new Date().getTime() - start });
            setTimeout(this.update, 10);
        }
    }

    reset = () => {
        this.setState({
            status: 'stopped',
            start: null,
            elapsed: 0
        })
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
                /><Button
                    onPress={this.reset}
                    title="Reset"
                    color="#841584"
                    accessibilityLabel="Reset Timer"
                />
            </View>
        )
    }
}

export default Stopwatch;