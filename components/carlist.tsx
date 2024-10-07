import React, { useContext, useEffect, useState } from "react";
import {FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CarRentalCard from './CarRentalCard';
import { CarsContext } from './CarContext'; 

export function CarList({ navigation }: { navigation: any }) {
    const {Cars} = useContext(CarsContext);

    return (
        <>
            <FlatList
                data={Cars}
                renderItem={({ item }) => <CarRentalCard {...item} />}
                keyExtractor={item => item.id.toString()} />
            <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('Sort')}>
                <Text style={styles.buttonText}>Sort</Text>
            </TouchableOpacity>
        </>

    );
}
const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 10,
        backgroundColor: '#3D84F0',
        borderRadius: 30,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
}); 