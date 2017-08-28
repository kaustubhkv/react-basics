import React, {Component} from 'react';
import {Text, View, AppRegistry} from 'react-native';

import Component4 from './app/components/Component4/Component4';

export default class MyApp extends Component {
	render() {
		return (
			<View>
				<Component4 />
			</View>
		);
	}
}

AppRegistry.registerComponent('MyApp', () => MyApp);
