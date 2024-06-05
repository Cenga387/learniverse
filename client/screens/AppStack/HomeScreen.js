import React from "react";
import { Text, View, StyleSheet, ImageBackground, Dimensions, ScrollView, Pressable, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";

//Web components
import HeaderWeb from "../../components/web/HeaderWeb";
import LargeCard from "../../components/web/articles/LargeCard";
import MediumCard from "../../components/web/articles/MediumCard";
import SmallCard from "../../components/web/articles/SmallCard";
import MiniCard from "../../components/web/articles/MiniCard";

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
                <ScrollView showsVerticalScrollIndicator={false} style={styles.overlay}>
                    <HeaderWeb color={'#330762'}></HeaderWeb>
                    <View style={styles.content}>
                        <View style={styles.contentContainer1}>
                            <View style={styles.featuredArticles}>
                                <Text style={styles.title2}>Featured articles</Text>
                                <Text style={{fontSize: 20, color: 'white', marginTop: 10}}>{month}/{date}/{year}</Text>
                                <LargeCard color={'#330762'}></LargeCard>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%'}}>
                                    <MediumCard color={'#330762'}></MediumCard>
                                    <MediumCard color={'#330762'}></MediumCard>
                                </View>
                                <Text style={styles.title2}>Discover</Text>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%'}}>
                                    <MediumCard color={'#330762'}></MediumCard>
                                    <MediumCard color={'#330762'}></MediumCard>
                                </View>
                            </View>
                            <View style={styles.profile}>
                                <Text style={styles.title2}>Profile</Text>
                            </View>
                        </View>

                        <View style={styles.contentContainer2}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} snapToInterval={1200} decelerationRate={0} snapToAlignment="center">
                                <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}>
                                    <SmallCard color={'#330762'}></SmallCard>
                                    <SmallCard color={'#330762'}></SmallCard>
                                    <SmallCard color={'#330762'}></SmallCard>
                                    <SmallCard color={'#330762'}></SmallCard>
                                    <SmallCard color={'#330762'}></SmallCard>
                                    <SmallCard color={'#330762'}></SmallCard>
                                    <SmallCard color={'#330762'}></SmallCard>
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
        height: height,
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.35)'
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
        marginHorizontal: 4,
        marginVertical: 4
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