    import React, { Component } from 'react';
    import {
      AppRegistry,
      StyleSheet,
      Text,
      View,
      ToolbarAndroid,
      TouchableHighlight,
      TextInput,
    } from 'react-native';

    const style1 = StyleSheet.create({
      container : {
        flex : 1,
        alignItems : 'center'
      },
      text : {
        fontSize : 20,
      },
      toolbar : {
        alignSelf : 'stretch',
        height : 50,
        backgroundColor : 'silver',
      },
      button : {
        backgroundColor : 'blue',
        borderWidth : 1,
        alignItems: 'center',
        justifyContent : 'center',
        alignSelf : 'stretch',
        height : 50,
        borderRadius : 1,
        margin : 10,
      },
      cancelButton : {
        backgroundColor : 'green',
      },
      buttonText : {
        fontSize : 20,
        color : 'red',
      },
    });

    export default class CounterComponent extends Component {

      constructor (props){
        super(props);

        this.state = {
            value : 0,
          }
      }

      onIncrement(){
        this.setState({
          value : this.state.value+1,
        });
      }
      textChange(text){
        this.setState({
          value : parseInt(text),
        });
      }
      render() {
        return (
            <View style={style1.containert}>
          <ToolbarAndroid style={style1.toolbar}
          title="Counter Demo"/>
          <Text style={style1.text}> {this.state.value} </Text>
          <TouchableHighlight
            style={style1.button}
            onPress = {this.onIncrement.bind(this)}>
          <Text style={style1.buttonText}> Increment </Text>
          </TouchableHighlight>
          <TextInput2 onChangeText={this.textChange.bind(this)}> {this.state.value} </TextInput>

          </View>
        );
      }
    }
