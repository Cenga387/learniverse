import React from "react";
import { Text, View, StyleSheet, ImageBackground, Dimensions, ScrollView, Pressable } from 'react-native';
import { SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import HeaderWeb from "../../components/web/HeaderWeb";
import LargeCard from '../../components/web/articles/LargeCard';


const { width, height } = Dimensions.get('window');

export default function GeographyScreen () {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.background}  source={require('./../assets/images/history.jpg')}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <HeaderWeb color={'#FFB15D'}></HeaderWeb>
                    <Text style={styles.title}>History</Text>
                    <View style={styles.content}>
                        <View style={styles.contentContainer1}>
                            <View style={styles.todaysPicks}>
                                <Text style={{color: 'white', fontSize: 40, marginTop: 10}}>Today's picks</Text>
                                    <LargeCard color={'#FFB15D'}></LargeCard>
                                <View style={{width: '100%', height: 400, backgroundColor: '#FFB15D', opacity: 0.7, marginTop: 16}}>

                                </View>
                            </View>
                            <View style={styles.highestRated}>
                                <Text style={{color: 'white', fontSize: 40, marginTop: 10}}>Highest rated</Text>
                            </View>
                        </View>
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
        backgroundColor: '#FFB15D'
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
        marginTop: 20,
        paddingHorizontal: 70,
        width: width,
        
    },
    contentContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 1000
    }, 
    highestRated: {
        width: '50%',
        height: 1000,
        marginHorizontal: 12
    },
    todaysPicks: {
        width: '50%',
        height: 1000,
        marginHorizontal: 12
    }
})