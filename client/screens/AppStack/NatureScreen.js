import React from "react";
import { Text, View, StyleSheet, ImageBackground, Dimensions, ScrollView, Pressable } from 'react-native';
import { SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import HeaderWeb from "../../components/web/HeaderWeb";

const { width, height } = Dimensions.get('window');

export default function GeographyScreen () {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.background}  source={require('../../assets/nature.jpg')}>
                <ScrollView>
                <HeaderWeb color={'#42982C'}></HeaderWeb>
                    <Text style={styles.title}>Nature & Wildlife</Text>
                    <View style={styles.content}>
                        
                    </View>
 
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    background: {
        resizeMode: 'cover',
        alignItems: 'center',
        width: width,
        height: height
    },
    title: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'center',
    },
    title2: {
        marginTop: 30,
        color: 'white',
        fontSize: 35
    },
    content: {
        marginTop: 40,
        marginHorizontal: '8%',
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
})