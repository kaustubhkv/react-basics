import React, {Component} from 'React';
import {
  View,
  Text,
  ListView,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import TodoItem from './ToDoListItem'

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
let newId=0;
const defaultTodos = [
  {id : newId++, text : 'Item 1', status : 'Pending'},
  {id : newId++, text : 'Item 2', status : 'Pending'},
];

export default class ToDoListComponent extends Component {
  constructor(props) {
    super (props);

    this.state = {
        dataSource : new ListView.DataSource({
            rowHasChanged : (r1,r2) => r1!==r2,
        })
    }

  }
componentWillReceiveProps(nextProps){
  this.setState({
    dataSource : this.state.dataSource.cloneWithRows(nextProps.todoItems)
  });
}

componentDidMount(){
  this.setState({
    dataSource : this.state.dataSource.cloneWithRows(
      this.props.todoItems
    )
  });
}

  renderTodo(todo){
    return (
        <TodoItem todoItem= {todo} onDone = {this.props.onDone}/>
    );
  }

  render (){
    return (
        <ListView
            dataSource = {this.state.dataSource}
            renderRow = {this.renderTodo.bind(this)}
            />
          );

  }
}
  ToDoListComponent.propTypes = {
    //onDone : React.PropTypes.func.isRequired,
    todoItems : React.PropTypes.arrayOf(React.PropTypes.object.isRequired).isRequired,
  }
