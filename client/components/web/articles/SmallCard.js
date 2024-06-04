import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Text, View, Pressable, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SmallCard ({color, size}) {
    const navigation = useNavigation();
    //const  = size
    return(
        <View style={styles.article}></View>  
    ) 
}

const styles = StyleSheet.create({
    // size da pravi velicinu kartice
    article: {
        marginTop: 30,
        marginRight: 40,
        backgroundColor: '#330762', 
        opacity: 0.8,
        width: 300, 
        height: 400
    },
});