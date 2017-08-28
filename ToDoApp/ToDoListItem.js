import React, {Component} from 'React';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
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
  container : {
    flexDirection : 'row',
    height : 50,
    margin : 10,
  },

  texInput : {
    flex : 2,
  },
  button : {
    backgroundColor : 'blue',
    borderWidth : 1,
    alignItems: 'center',
    justifyContent : 'center',
    alignSelf : 'auto',
    height : 50,
    borderRadius : 1,
    margin : 10,
    flex : 1,
  },
  cancelButton : {
    backgroundColor : 'green',
  },
  buttonText : {
    fontSize : 20,
    color : 'white',
  },
});

export default class ToDoListItem extends Component {
  constructor(props) {
    super (props);

  }

  onDoneClick(){
    this.props.onDone(this.props.todoItem.id);
  }

  render (){

    if (this.props.todoItem.status==="Done"){
      return (
        <View style={style1.container}>
        <Text> {this.props.todoItem.text} </Text>
        </View>
      );
    }

    return (
      <View style={style1.container}>
      <Text> {this.props.todoItem.text} </Text>
      <TouchableHighlight
      style = {style1.button}
      onPress = {this.onDoneClick.bind(this)}>
      <Text style={style1.buttonText}> Done </Text>
      </TouchableHighlight>
      </View>
    );
  }
}
  ToDoListItem.propTypes = {
    onDone : React.PropTypes.func.isRequired,
    todoItem : React.PropTypes.object.isRequired,
  }
