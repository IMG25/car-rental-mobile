import React, {Component} from 'react';
import { Text, View, StyleSheet, Alert, Image, Dimensions, FlatList, Platform, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {vehicleList} from '../data';

const FlatListItem = (props) => {
    let addressLength=props.item.address.length;
    //console.log(props.item)
    return(
        <View style={{ marginTop: 10, borderRadius: 10, backgroundColor: 'white', margin: 10, }}>
            <TouchableOpacity style={styles.listItem}
                onPress={() => props.navigation.navigate('VehicleDetails', props.item)}    
            > 
                <Image style={styles.image} source={{uri: props.item.image}}/>
                <View style={{alignSelf: 'baseline',flexDirection:'column'}}>
                    <Text style={styles.text}>{props.item.name}</Text>
                    <Text style={styles.textDes} >{ addressLength > 60 ? 
                        (((props.item.address).substring(addressLength-59,addressLength-1)) + '...') : 
                        props.item.address }
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'column',alignSelf: 'baseline'}}>
                <Text style={styles.textDes}><Icon name="ios-pin" size={20} color="green" /></Text> 
                <Text style={styles.textLike}><Icon name="ios-star" size={20} color="gold" /> {props.item.rating}/5  </Text>
            </View>
        </View>
    );
}

export default class VehicleList extends Component {
    
    render(){
        //let columns= columns=Math.floor(widthScreen/100);
        return (
            <View style={styles.container}>
                    <FlatList style={{backgroundColor: '#D3D3D3', opacity: 1}}
                        numColumns= {1}//{columns}
                        horizontal={false}
                        data={vehicleList}//{this.props.data}
                        showsVerticalScrollIndicator={false} 
                        renderItem={({item, index}) => {
                            return (
                                <FlatListItem navigation={this.props.navigation}
                                    item={item} index={index} parentFlatList={this}>
                                </FlatListItem>
                            )
                        }}
                        keyExtractor={(item, index) => item.id.toString()}
                    />
            </View>
        );
    }
};


const widthScreen=Dimensions.get('window').width;
const heightScreen=Dimensions.get('window').height;

const styles = StyleSheet.create({
    
    container: { 
        flex: 1,
        flexDirection:'column',
        marginTop: Platform.OS==='ios' ? 34 : 0,
    },
    listItem: {
        flex: 1,
        flexDirection:'column',
        alignItems:'center',
        width: widthScreen-40,
        height: heightScreen/3,
        alignSelf: 'center'
    },
    icon: {
        width: 30,
        height:30,
        tintColor: 'red'
    },
    text:{
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        margin: 3,
    },
    textDiscount:{
        fontSize: 17,
        color: 'red',
        textDecorationLine: 'line-through',
        margin: 3, 
    },
    textDes:{
        fontSize: 17,
        color: 'black',
        margin: 2,
    },
    textLike:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        margin: 3,
    },
    image:{
        width: widthScreen-40,
        height: heightScreen/3- 80,
        resizeMode:'center',
        marginTop: 10,
    }
});
