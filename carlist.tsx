import React from 'react';
import {View, FlatList} from 'react-native';
import CarRentalCard from './CarRentalCard';
import { Car } from './CarRentalCard';

const car:Car[] = [
    {id: 1, brand: 'Audi', year: 2018, price: 100},
    {id: 2, brand: 'BMW', year: 2019, price: 120},
    {id: 3, brand: 'Mercedes', year: 2020, price: 150},
    {id: 4, brand: 'Toyota', year: 2017, price: 80},
    {id: 5, brand: 'Honda', year: 2016, price: 70},
]

export default function CarList() {
    return (
        <View>
            <FlatList
                data={car}
                renderItem={({item}) => <CarRentalCard {...item} />}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const styles = {
    
}