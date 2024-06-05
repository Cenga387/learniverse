import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Pressable, StyleSheet } from 'react-native';

export default function LargeCard ({color}) {
    const navigation = useNavigation();
    
    return(
        <View style={[styles.article, {backgroundColor: color}]}></View>  
    ) 
}

const styles = StyleSheet.create({
    article: {
        marginTop: 30, 
        opacity: 0.8,
        width: '90%', 
        height: 400
    },
});