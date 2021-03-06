import React, { Component } from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import HomeScreen from '../home';
import ProfileScreen from '../profile';
import DetailScreen from '../detail';

const Home = createStackNavigator({
    MainHome:{
        screen: HomeScreen
    },
    Details: {
        screen :  DetailScreen,
      },
})

const Profile = createStackNavigator({
    MainProfile:{
        screen: ProfileScreen
    },
})

const TabNav = createBottomTabNavigator({
    Home: {
        screen: Home,
        
    },
    Profile: {
        screen: Profile
    },
    
})

export default createAppContainer(TabNav)