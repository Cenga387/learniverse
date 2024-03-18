import React from "react";
import { Text, View, StyleSheet, ImageBackground, Dimensions, ScrollView, Pressable } from 'react-native';
import { SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');
const today = new Date();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const date = today.getDate();


export default function HomeScreen () {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <ImageBackground source={require('./../assets/images/black-hole.jpg')} style={styles.background}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <View style={{alignContent: 'center', width: '15%'}}>
                            <Text style={{fontSize: 20, color: 'white', alignSelf: 'center'}}>Explore</Text>
                        </View>
                        <View style={styles.headerCenter}>
                        <Pressable style={styles.title} onPress={() => navigation.navigate('Home')}>Universeum</Pressable>
                            <SearchBar
                                placeholder="Search Here..." 
                                round
                                containerStyle={styles.search}
                                inputContainerStyle={styles.searchInput} 
                                placeholderTextColor='white'              
                            />
                            <View style={styles.tabs}> 
                                <Pressable style={styles.tabsText}>Games & Quizes</Pressable>
                                <Pressable style={styles.tabsText}>Fun Facts</Pressable>
                                <Pressable style={styles.tabsText} onPress={() => navigation.navigate('History')}>History</Pressable>
                                <Pressable style={styles.tabsText} onPress={() => navigation.navigate('Science')}>Science</Pressable>
                                <Pressable style={styles.tabsText} onPress={() => navigation.navigate('Geography')}>Geography</Pressable>
                                <Pressable style={styles.tabsText} onPress={() => navigation.navigate('Nature')}>Nature & Wildlife</Pressable>
                                <Pressable style={styles.tabsText} onPress={() => navigation.navigate('Arts')}>Arts & Culture</Pressable>
                                <Pressable style={styles.tabsText} onPress={() => navigation.navigate('Biographies')}>Biographies</Pressable>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', width: '15%'}}>
                            <Pressable style={{fontSize: 20, color: 'white', marginLeft: 50, marginRight: 8, height: 40, justifyContent: 'center', fontFamily: 'calibri'}}>Login</Pressable>
                            <Pressable style={{fontSize: 20, color: 'white', borderWidth: 1, borderRadius: 10, borderColor: 'white', height: 40, justifyContent: 'center', paddingHorizontal: 4, fontFamily: 'calibri'}}>Subscribe</Pressable>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.contentContainer1}>
                            <View style={styles.featuredArticles}>
                                <Text style={styles.title2}>Featured articles</Text>
                                <Text style={{fontSize: 20, color: 'white', marginTop: 10}}>{month}/{date}/{year}</Text>
                                <View style={styles.article1}></View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%'}}>
                                    <View style={styles.article2}></View>
                                    <View style={styles.article2}></View>
                                </View>
                                <Text style={styles.title2}>Discover</Text>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%'}}>
                                    <View style={styles.article2}></View>
                                    <View style={styles.article2}></View>
                                </View>
                            </View>
                            <View style={styles.profile}>
                                <Text style={styles.title2}>Profile</Text>
                            </View>
                        </View>
                        <View style={styles.contentContainer2}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} snapToInterval={1200} decelerationRate={0} snapToAlignment="center">
                            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}>
                            <View style={styles.article3}></View>
                            <View style={styles.article3}></View>
                            <View style={styles.article3}></View>
                            <View style={styles.article3}></View>
                            <View style={styles.article3}></View>
                            <View style={styles.article3}></View>
                            <View style={styles.article3}></View>
                            </View>
                        </ScrollView>
                        </View>
                        <View style={styles.contentContainer3}>
                            <Text style={styles.title2}>Fact of the day</Text>
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
        alignItems: 'baseline',
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
        flexDirection: 'row'
    },
    headerCenter: {
        alignItems: 'center',
        width: '70%'
    },
    title: {
        color: 'white',
        fontSize: 40
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
        backgroundColor: '#330762'
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
        paddingHorizontal: 70,
        width: width
    },
    contentContainer1: {
        flexDirection: 'row'
    },
    contentContainer2: {
        marginTop: 40,
        flexDirection: 'row',
    },
    contentContainer3: {
        marginTop: 40,
        backgroundColor: 'white'
    },
    featuredArticles: {
        width: '70%',
    },
    profile: {
        width: '30%',
    },
    article1: {
        marginTop: 30,
        backgroundColor: '#330762', 
        opacity: 0.8,
        width: '90%', 
        height: 400
    },
    article2: {
        backgroundColor: '#330762',
        opacity: 0.8,
        marginTop: 30,
        width: '48%',
        height: 400
    },
    article3: {
        marginRight: 40,
        width: 300,
        height: 400,
        opacity: 0.8,
        backgroundColor: '#330762'
    },

})