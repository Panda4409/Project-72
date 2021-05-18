import React from 'react';
import { Stylesheet, View, Text, Image, ToastAndroid, displayAlert} from 'react-native';
import {createAppCOntainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
import keyAvoidingView from 'reactToastAndroid-native';

export default class App extends React.component{
    render(){
        return(
            <keyAvoidingView/>
        );  
    }
    
}
ToastAndroid(){
    displayAlert(){
        'Story was Submitted'
    }
}
