import React from "react";
import { Text, View, StyleSheet, ImageBackground, Dimensions, ScrollView, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import HeaderWeb from "../../components/web/HeaderWeb";
import LargeCard from '../../components/web/articles/LargeCard';
import MediumCard from "../../components/web/articles/MediumCard";
import SmallCard from "../../components/web/articles/SmallCard";
import MiniCard from "../../components/web/articles/MiniCard";


const { width, height } = Dimensions.get('window');

export default function HistoryScreen () {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.background}  source={require('../../assets/history.jpg')}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <HeaderWeb color={'#FFB15D'}></HeaderWeb>
                    <Text style={styles.title}>History</Text>
                    <View style={styles.content}>
                        <View style={styles.contentContainer1}>
                            <View style={styles.todaysPicks}>
                                <Text style={{color: 'white', fontSize: 40, marginTop: 10}}>Today's picks</Text>
                                <LargeCard color={'#FFB15D'}></LargeCard>
                                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                                    <MediumCard color={'#FFB15D'}></MediumCard>
                                    <MediumCard color={'#FFB15D'}></MediumCard>
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