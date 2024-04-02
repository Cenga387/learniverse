import React from "react";
import { Text, View, StyleSheet, ImageBackground, Dimensions, ScrollView, Pressable, TextInput } from 'react-native';
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
                            <Pressable style={{fontSize: 20, color: 'white', marginLeft: 50, marginRight: 8, height: 40, justifyContent: 'center', fontFamily: 'calibri'}} onPress={() => navigation.navigate('Login')}>Login</Pressable>
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
                            <Text style={{marginVertical: 16, fontSize: 35, color: 'white'}}>Fact of the day</Text>
                            <View style={styles.dailyFact}>
                                <Text style={{fontSize: 20, color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
                                <View style={styles.factImage}></View>
                            </View>
                        </View>

                        <View style={styles.contentContainer4}>
                            <Text style={{fontSize: 35, marginVertical: 16, color: 'white'}}>Fun in every category</Text>
                            <View style={styles.row1}>
                                <View style={styles.categories}>
                                    <Text style={{fontSize: 35, color: 'white'}}>History</Text>
                                    <View style={styles.article4}>
                                        <View style={styles.article4Image}></View>
                                        <Text style={{fontSize: 17, color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                    </View>
                                    <View style={styles.article4}>
                                        <View style={styles.article4Image}></View>
                                        <Text style={{fontSize: 17, color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                    </View>
                                </View>
                                <View style={styles.categories}>
                                    <Text style={{fontSize: 35, color: 'white'}}>Science</Text>
                                    <View style={styles.article4}>
                                        <View style={styles.article4Image}></View>
                                        <Text style={{fontSize: 17, color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                    </View>
                                    <View style={styles.article4}>
                                        <View style={styles.article4Image}></View>
                                        <Text style={{fontSize: 17, color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                    </View>
                                </View>
                                <View style={styles.categories}>
                                    <Text style={{fontSize: 35, color: 'white'}}>Geography</Text>
                                    <View style={styles.article4}>
                                        <View style={styles.article4Image}></View>
                                        <Text style={{fontSize: 17, color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                    </View>
                                    <View style={styles.article4}>
                                        <View style={styles.article4Image}></View>
                                        <Text style={{fontSize: 17, color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.row2}>
                                <View style={styles.categories}>
                                    <Text style={{fontSize: 35, color: 'white'}}>Nature & Wildlife</Text>
                                    <View style={styles.article4}>
                                        <View style={styles.article4Image}></View>
                                        <Text style={{fontSize: 17, color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                    </View>
                                    <View style={styles.article4}>
                                        <View style={styles.article4Image}></View>
                                        <Text style={{fontSize: 17, color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                    </View>
                                </View>
                                <View style={styles.categories}>
                                    <Text style={{fontSize: 35, color: 'white'}}>Arts & Culture</Text>
                                    <View style={styles.article4}>
                                        <View style={styles.article4Image}></View>
                                        <Text style={{fontSize: 17, color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                    </View>
                                    <View style={styles.article4}>
                                        <View style={styles.article4Image}></View>
                                        <Text style={{fontSize: 17, color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                    </View>
                                </View>
                                <View style={styles.categories}>
                                    <Text style={{fontSize: 35, color: 'white'}}>Biographies</Text>
                                    <View style={styles.article4}>
                                        <View style={styles.article4Image}></View>
                                        <Text style={{fontSize: 17, color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                    </View>
                                    <View style={styles.article4}>
                                        <View style={styles.article4Image}></View>
                                        <Text style={{fontSize: 17, color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.subscribe}>
                            <Text style={{fontSize: 25, marginTop: 30, marginBottom: 15, color: 'white'}}>Sign up here to receive daily articles via email</Text>
                            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', marginVertical: 30}}>
                                <TextInput style={styles.emailInput} placeholder="Enter your email here"></TextInput>
                                <Pressable style={styles.subscribeButton}>Subscribe</Pressable>
                            </View>
                            <Text style={{fontSize: 20, marginVertical: 15, color: 'white', marginHorizontal: 40, textAlign: 'center'}}>By signing up for this email, you are agreeing to news, offers, and information from Universeum. Click here to view our Privacy Notice. Easy unsubscribe links are provided in every email.</Text>
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
        marginBottom: 100,
        height: 200,
    },
    contentContainer4: {
        marginTop: 40,
        width: '100%',
        height: 1000,
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
    article4: {
        flexDirection: 'row', 
        marginVertical: 20, 
        marginRight: 10
    },
    dailyFact: {
        height: 250,
        flexDirection: 'row',
    },
    factImage: {
        width: 500,
        height: 200,
        backgroundColor: '#330762',
        marginLeft: '10%',
    },
    row1: {
        flexDirection: 'row',
    },
    row2: {
        flexDirection: 'row',
    },
    categories: {
        width: '33%',
        height: 350,
        backgroundColor: 'rgba(51, 7, 98, 0.75)',
        marginHorizontal: 4,
        marginVertical: 4
    },
    article4Image: {
        width: 150, 
        height: 100, 
        backgroundColor: '#330762', 
        marginRight: 10, 
        marginTop: 7
    },
    subscribe: {
        backgroundColor: '#330762',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    emailInput: {
        height: 40,
        backgroundColor: 'white',
        width: '70%',
        borderRadius: 10,
        textAlign: 'center'
    },
    subscribeButton: {
        height: 40,
        width: 100,
        marginLeft: 5,
        fontSize: 20,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        color: 'white'
    }
})