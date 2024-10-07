import {Text, StyleSheet, Image, Button, View, TouchableOpacity} from 'react-native';
import { CarData } from './CarContext';


export default function CarRentalCard(props: CarData) {
    function pressable(){
        alert('Renting ' + props.brand)
    }
    return (
        <TouchableOpacity style={styles.OuterContainer} onPress={pressable}>
            <View style = {styles.InerContainer}>
                <Text style = {styles.TitleText}>{props.model}</Text>
                <Text style = {styles.Text}>{props.brand}{"\n"}</Text>
                
                {props.automatic ? (
                    <Text style={styles.Text}>Automatic</Text>
                ) : (
                    <Text style={styles.Text}>Manual</Text> 
                )}
                <Text style = {styles.Text}>From: {props.year}</Text>
                <Text style = {styles.Text}>{props.rental_distance} km pr. Rental{"\n"}</Text>
                <Text style = {styles.Text} >Total Price:
                    <Text> </Text>
                    <Text style={{fontWeight: "bold", fontSize: 20, textDecorationLine: 'underline'}}>{props.price} Kr.</Text>
                </Text>
            </View>
            <Image
                style={styles.Image}
                source={require('../assets/car.png')}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    OuterContainer: {
        flexDirection: 'row',   
        justifyContent: 'space-around',
        borderRadius: 10,
        margin: 10,
        borderColor: '#4C5065',
        borderWidth: 1,
        padding: 10 
    },
    InerContainer: {
        justifyContent: 'center',
        borderRadius: 10
    },
    Image:{
        width: "50%",
        height: "auto",
        resizeMode: 'contain'   
    },
    TitleText:{
        color: 'white', 
        fontWeight: 'bold',
        fontSize: 20
    },
    Text:{
        color: 'white'
    }
});
