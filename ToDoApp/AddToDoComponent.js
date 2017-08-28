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

    export default class AddToDoComponent extends Component {
      constructor(props) {
        super (props);

        this.state = {
          newVal : "",
        }
      }

      onAddClick(){
        this.props.onClick(this.state.newVal);

        this.setState({
          newVal : '',
        });
      }

      render (){
        return (
        <View style={style1.container}>
        <TextInput
          style={style1.texInput}
          value={this.state.newVal}
          onChangeText={(text)=>this.setState({newVal:text})}>
        </TextInput>
        <TouchableHighlight
          style = {style1.button}
          onPress = {this.onAddClick.bind(this)}>
          <Text style={style1.buttonText}> Add New </Text>
        </TouchableHighlight>
        </View>
    );
    }
  }
    AddToDoComponent.propTypes = {
      onClick : React.PropTypes.func.isRequired,
    }
