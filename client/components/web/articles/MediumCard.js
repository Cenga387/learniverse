import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Text, View, Pressable, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function MediumCard ({color}) {
    const navigation = useNavigation();
    //const  = size
    return(
        <View style={[styles.article, {backgroundColor: color}]}></View>  
    ) 
}

const styles = StyleSheet.create({
    // size da pravi velicinu kartice
    article: {
        marginTop: 30, 
        opacity: 0.8,
        width: '48%', 
        height: 400
    },
});