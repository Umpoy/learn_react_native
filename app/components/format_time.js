import React, { Component } from 'react';
import { View, Text } from 'react-native';

class FormatTime extends Component {
    constructor(props) {
        super(props);
    }

    millisecondToTime = () => {
        const { elapsed } = this.props;
        const sec = elapsed / 1000;
        const min = sec / 60;
        return {
            hour: Math.floor(min / 60),
            min: Math.floor(min % 60),
            sec: Math.floor(sec % 60),
            ms: Math.floor(elapsed % 100)
        }
    }

    render() {
        const { hour, min, sec, ms } = this.millisecondToTime();
        return (
            <Text>{hour}:{min}:{sec}.{ms}</Text>
        )
    }
}

export default FormatTime