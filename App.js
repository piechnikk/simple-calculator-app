import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Item from './components/Item';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements1: ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "="],
      elements2: ["C", "/", "*", "-", "+"],
      // elements: [1,2,3,4,5,6,7,8,9,".",0],
      text: "",
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2, backgroundColor: "dodgerblue", alignItems: "flex-end", justifyContent: "flex-end", }}>
          <Text style={{ fontSize: 48 }}>{this.state.text}</Text>
        </View>
        <View style={{ flex: 4, flexDirection: "row" }}>
          <View style={{ flex: 1, backgroundColor: "#333333" }}>
            {this.state.elements1.map((el, i) => {
              if (i % 3 == 0)
                return <Item key={el} name={el} color="#333333" fun={(e) => this.clicked(e)} />
            })}
          </View>
          <View style={{ flex: 1, backgroundColor: "#333333" }}>
            {this.state.elements1.map((el, i) => {
              if (i % 3 == 1)
                return <Item key={el} name={el} color="#333333" fun={(e) => this.clicked(e)} />
            })}
          </View>
          <View style={{ flex: 1, backgroundColor: "#333333" }}>
            {this.state.elements1.map((el, i) => {
              if (i % 3 == 2)
                return <Item key={el} name={el} color="#333333" fun={(e) => this.clicked(e)} />
            })}
          </View>
          <View style={{ flex: 1, backgroundColor: "#666666" }}>
            {this.state.elements2.map((el, i) => {
              return <Item key={el} name={el} color="#666666" fun={(e) => this.clicked(e)} />
            })}</View>
        </View>
      </View>
    );
  }
  clicked(text) {
    if (text == "=") {
      let numbers = "0123456789"
      let last = this.state.text[this.state.text.length - 1]
      let first = this.state.text[0]
      if (numbers.indexOf(last) != -1 && (numbers.indexOf(first) != -1 || first == "-"))
        this.setState({ text: String(eval(this.state.text)) })
    } else if (text == "C") {
      if (this.state.text.length > 0) {
        this.setState({ text: this.state.text.substring(0, this.state.text.length - 1) })
      }
    } else {
      if (text == ".") {
        if (this.state.text[this.state.text.length - 1] != "." && this.state.text.length > 0)
          this.setState({ text: this.state.text + text })
      } else if (text == "/" || text == "*" || text == "-" || text == "+") {
        let lastChar = this.state.text[this.state.text.length - 1]
        if (lastChar != "/" && lastChar != "*" && lastChar != "-" && lastChar != "+" && lastChar != "." && (this.state.text.length > 0 || text == "-"))
          this.setState({ text: this.state.text + text })
      } else {
        this.setState({ text: this.state.text + text })
      }
    }
  }
}
