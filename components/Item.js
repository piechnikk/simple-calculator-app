import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.fun(this.props.name)}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: this.props.color, }}>
                    <Text style={{ fontSize: 24, color: "white" }}> {this.props.name} </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
