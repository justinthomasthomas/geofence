import React from 'react';
import {AppRegistry} from 'react-native';
import {createStackNavigator} from 'react-navigation';

//Screens
import MainScreen from "./src/containers/MainScreen";
import AddSafeZoneScreen from "./src/containers/AddSafeZoneScreen";
import ViewSafeZoneScreen from "./src/containers/ViewSafeZoneScreen";

//Main stack navigation
const MainStackNavigator = createStackNavigator({
    MainScreen: {screen: MainScreen},
    AddSafeZoneScreen: {screen: AddSafeZoneScreen},
    ViewSafeZoneScreen: {screen: ViewSafeZoneScreen}
},{
    headerMode: 'none'
});

class GeoFence extends React.Component {

    render() {
        return <MainStackNavigator/>
    }
}

AppRegistry.registerComponent('GeoFence', () => GeoFence);
export default GeoFence;
