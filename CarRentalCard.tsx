import {Text, StyleSheet, Image, Button, View} from 'react-native';

export interface Car {
    id: number;
    brand: string;
    year: number;
    price: number;
}


export default function CarRentalCard(props: Car) {
    return (
        <View style={styles.OuterContainer}>
            <Image
                style={{ width: undefined, height: undefined, flex: 1 }}
                source={require('./assets/car.png')}
            />
            <View style = {styles.InerContainer}>
                <Text>{props.brand} from {props.year}</Text>
                <Text>Price per hour: {props.price}$</Text>
                <Button 
                    title="Rent Now!"
                    color="black"
                    onPress={() => alert('Renting ' + props.brand)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    OuterContainer: {
        flexDirection: 'row',
        backgroundColor: 'gray',
        padding: 10,
        justifyContent: 'space-around',
        borderRadius: 10,
        margin: 10
    },
    InerContainer: {
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 10
    }
});
