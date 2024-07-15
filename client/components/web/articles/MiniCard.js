import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from 'react-native';

export default function MiniCard ({color}) {
    const navigation = useNavigation();
    
    return(
            <View style={styles.article}>
                <View style={styles.article4Image}></View>
                <Text style={{fontSize: 17, color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </View>    ) 
}

const styles = StyleSheet.create({
    article: {
        flexDirection: 'row', 
        marginVertical: 20, 
        marginRight: 10
    },
    article4Image: {
        width: 150, 
        height: 100, 
        backgroundColor: '#330762', 
        marginRight: 10, 
        marginTop: 7
    },
});