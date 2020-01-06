import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer } from  'react-navigation';
import VehicleListComponent from '../Customer/VehicleList.js';
import HomePageComponent from './HomePage.js';
import VehicleDetailsComponent from '../Customer/VehicleDetails.js'

const stackNav = createStackNavigator({
  HomePage: {
    screen: HomePageComponent,
    navigationOptions: ({navigation}) => ({
        headerTitleStyle: { 
          color: "black"
        }
      }) 
  },
  VehicleList: {
    screen: VehicleListComponent,
    navigationOptions: ({navigation}) => ({
      title: "vehicles for rent",
      headerTitleStyle: { 
        color: "black"
      }
    }) 
  },
  VehicleDetails: {
    screen: VehicleDetailsComponent,
    navigationOptions: ({navigation}) => ({
      title: "about",
      headerTitleStyle: { 
        color: "black"
      }
    })
  }
});

const HomeNav=createAppContainer(stackNav);
export default HomeNav;