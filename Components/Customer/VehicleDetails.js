import React, {Component} from 'react';
import {
    Text, View, StyleSheet, Image, ScrollView, Dimensions, Alert, Platform, TouchableOpacity, Picker
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from 'react-native-button';
import { Dropdown } from 'react-native-material-dropdown';
import {connect} from 'react-redux';
import {addCartItems, fetchCart} from '../Redux/Actions/cartActions';
import NumericInput from 'react-native-numeric-input';
//import Cart from '../Cart/Cart';

class VehicleDetails extends Component {

    constructor(props){
        super(props);
        this.state={
            product: {
                id: this.props.navigation.getParam('id', '-'),
                name: this.props.navigation.getParam('name', '-'),
                vehicleType: this.props.navigation.getParam('vehicleType', '-'),
                vehicleNo: this.props.navigation.getParam('vehicleNo', '-'),
                address: this.props.navigation.getParam('address', '-'),
                image: this.props.navigation.getParam('image', '-'),
                price: this.props.navigation.getParam('price', '-'),
                rating: this.props.navigation.getParam('rating', '-'),
                agentId: this.props.navigation.getParam('like', '-'),
            },
        }
    }

    componentDidMount(){
        //this.props.fetchCart()
        //console.log(this.state.sellerId);
    }

    // onChangeHandler = (value) => {
    //     this.setState({ ...this.state.product.quantity = value })
    // }

    // addToCart=()=> {
    //     console.log(this.props.cart.arr.length!==0)


    //     let isAvailble= false;
    //     for(let i = 0; i < this.props.cart.arr.length ; i++){
    //         if(this.props.cart.arr[i].id===this.state.product.id){
    //            Alert.alert('item is already in the cart')
    //            isAvailble=true;
    //            break;
    //         }
    //     }
    //     if(!isAvailble){
    //         this.props.addCartItems(this.state.product);
    //         Alert.alert('item is added successfully')
    //     }
    //     console.log(this.props);
    // }

    // buyIt=()=>{
    //     this.addToCart();
    //     this.props.navigation.navigate('CartItems');
    // }

    render () {
        
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.listItem}>
                <Image style={styles.image} source={{uri: this.state.product.image}} />
                <Text style={styles.textName}> {this.state.product.name}</Text>
                <Text style={styles.text}>{this.state.product.description}</Text>
                <Text style={styles.text}>Type: {this.state.product.vehicleType}</Text>
                <Text style={styles.text}>Vehicle No: {this.state.product.vehicleNo}</Text>
                <Text style={styles.text}>Rating: {this.state.product.rating}</Text>
                <Text style={styles.text}>address: {this.state.product.address}</Text>
                <Text style={styles.text}>Per Day (LKR): {this.state.product.price}</Text> 
            </View>

            {/*quantity */}
            <View style={styles.box}>

                <Button style={styles.button} 
                    onPress={this.buyIt}    
                >
                    Request it
                </Button>

            </View>

        </View>
        </ScrollView>
    );
  }
}

const mapStateToProps=state=>{
    return {
        cart: state.cart,
        //productsList: state.productsList
    };
}
  
export default connect(mapStateToProps,{
    addCartItems,
    fetchCart
})(VehicleDetails);
  


const widthScreen=Dimensions.get('window').width;
const heightScreen=Dimensions.get('window').height;

const styles = StyleSheet.create({
    
    container: { 
        flex: 1,
        flexDirection:'column',
        marginTop: Platform.OS==='ios' ? 34 : 0,
    },
    listItem: {
        alignItems:'baseline',
    },
    icon: {
        width: 30,
        height:30,
        tintColor: 'red'
    },
    text:{
        fontSize: 20,
        marginLeft: 20,
        marginTop: 15,
        color: 'gray',
    },
    textName:{
        marginTop: 20,
        fontSize: 25,
        textAlignVertical: 'center',
        color: 'black',
    },
    image:{
        width: widthScreen,
        height: 300,
        resizeMode:'contain',//center
        //position: 'absolute'
    },
    button:{
        padding: 10,
        margin:8,
        height:40,
        backgroundColor: 'black',
        fontSize: 18,
        color: 'white'
    },
    box:{
        //flexDirection:'row',
        marginTop: 20,
        backgroundColor: 'white',
        //borderWidth: 2,
        //borderColor: '#593196'
    },
    dropdown:{
        marginTop: 10,
        marginLeft:20,
        marginRight: 20
    }
  });