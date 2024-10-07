import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CarsContext } from "./CarContext";


export function Sort({ navigation }: { navigation: any }) {
    const { Cars, ReplaceCars } = React.useContext(CarsContext);

    function SortPrice() {
        const sortedCars = [...Cars].sort((a, b) => a.price - b.price);
        ReplaceCars(sortedCars);
        Goback();
    }

    function SortDistance() {
        const sortedCars = [...Cars].sort((a, b) => b.rental_distance - a.rental_distance);
        ReplaceCars(sortedCars);
        Goback();
    }

    function SortBrand() {
        const sortedCars = [...Cars].sort((a, b) => a.brand.localeCompare(b.brand));
        ReplaceCars(sortedCars);
        Goback();
    }

    function Goback(){
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.floatingButton} onPress={SortPrice}>
                <Text style={styles.buttonText}>Lowest Price</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.floatingButton} onPress={SortDistance}>
                <Text style={styles.buttonText}>Longest Rental Distance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.floatingButton} onPress={SortBrand}>
                <Text style={styles.buttonText}>Brand name (A-Z)</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0B0D1B',
        justifyContent: 'center',
        flex: 1,
    },
    floatingButton: {
        backgroundColor: '#3D84F0',
        borderRadius: 30,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },

});