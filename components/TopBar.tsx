import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function TopBar() {
    function onSearchPress() {
        alert('Search button pressed');
    }

    return (
        <View style={styles.topBar}>
            <Text style={styles.title}>Maximus Rentus Meridius</Text>
            <TouchableOpacity style={styles.searchButton} onPress={onSearchPress}>
                <Text>Search</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
            padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    searchButton: {
        padding: 10,
        backgroundColor: '#3D84F0',
        borderRadius: 10,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
});