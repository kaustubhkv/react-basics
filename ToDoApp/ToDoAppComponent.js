/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import AddToDo from './AddToDoComponent';
import ToDoList from './ToDoListComponent';

let newId=0;
const defaultTodos = [
  {id : newId++, text : 'Item 1', status : 'Pending'},
  {id : newId++, text : 'Item 2', status : 'Pending'},
];

export default class ToDoAppComponent extends Component {

  constructor (props){
    super (props);

    this.state = {
      todoItems : defaultTodos,
    }

  }

  onNewTodo(todo){
    this.state.todoItems.push({id:newId++, text:todo, status:'Pending'});
//
    this.setState({
      todoItems : this.state.todoItems,
    });
  }


  onDone(id){
    const mappedTodos = this.state.todoItems.map((t)=>{
      if (t.id!==id){
        return t;
      }
      return Object.assign({},t,{
        status : 'Done',
      });
    });

    this.setState({
      todoItems : mappedTodos,
    });
  }

   render () {
    return (
      <View>
      <AddToDo onClick={this.onNewTodo.bind(this)}>
      </AddToDo>

      <ToDoList todoItems={this.state.todoItems} onDone={this.onDone.bind(this)}>
      </ToDoList>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
