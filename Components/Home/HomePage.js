import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity} from 'react-native';

export default class HomePage extends Component {
  static navigationOptions = { header: null };
  constructor(props) {
      super(props);
      this.state = {
          isAgent: false,
          isCustomer: false
      }
  }

  
  render () {
    return (   
      <View style={styles.container}>
          <TouchableOpacity style={styles.button} 
              onPress={()=>{this.props.navigation.navigate('VehicleList')}}
          >
              <Text style={styles.text}>find a vehicle</Text>
          </TouchableOpacity>

          <Text style={{marginTop: 60}} ></Text>

          <TouchableOpacity style={styles.button} 
              onPress={()=>{this.setState({isAgent: true})}}
          >
              <Text style={styles.text}>add a vehicle</Text>
          </TouchableOpacity>
      </View>
      
  );
  }
}

const widthScreen=Dimensions.get('window').width;
const heightScreen=Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    flexDirection:'column',
    marginTop: Platform.OS==='ios' ? 34 : 0,
    alignContent:'space-between',
    justifyContent: 'center',
  },
  listItem: {
    height: '300',
    width: '200',
  },
  icon: {
    width: 30,
    height:30,
  },
  button:{
    color: 'black',
    borderColor: 'black',
    borderWidth: 2,
    marginLeft: widthScreen/6,
    marginRight: widthScreen/6,
    height: heightScreen/6,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: heightScreen/10,
    backgroundColor: 'lavender'
  },
  text:{
    fontSize: 30,
    color: 'black',
    alignItems:'center',
    justifyContent: 'center'
  },
});

