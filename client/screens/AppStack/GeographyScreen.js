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
            <ImageBackground style={styles.background}  source={require('./../assets/images/earth.webp')}>
                <ScrollView>
                <HeaderWeb color={'#021F65'}></HeaderWeb>
                    <Text style={styles.title}>Geography</Text>
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
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        flexDirection: 'row',
        marginBottom: 18
    },
    headerCenter: {
        alignItems: 'center',
        width: '70%'
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
    search: {
       backgroundColor: 'transparent',
       width: '100%',
       borderBottomWidth: 0,
       borderTopWidth: 0
    },
    searchInput: {
        height: 40,
        backgroundColor: '#021F65'
    },
    tabs: {
        flexDirection: 'row'
    },
    tabsText: {
        color: 'white',
        fontSize: 21,
        paddingHorizontal: 16,
        fontWeight: '600',
        fontFamily: 'calibri'
    },
    content: {
        marginTop: 40,
        marginHorizontal: '8%',
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
})