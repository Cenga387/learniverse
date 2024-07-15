import React from "react";
import { Text, View, StyleSheet, ImageBackground, Dimensions, ScrollView, Pressable } from 'react-native';
import { SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

export default function ScienceScreen () {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.background}  source={require('../../assets/atom.jpg')}>
                <ScrollView>
                    <View style={styles.header}>
                        <View style={{alignContent: 'center', width: '15%', marginTop: 20}}>
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
                        <View style={{flexDirection: 'row', width: '15%', marginTop: 20}}>
                            <Pressable style={{fontSize: 20, color: 'white', marginLeft: 50, marginRight: 8, height: 40, justifyContent: 'center', fontFamily: 'calibri'}} onPress={() => navigation.navigate('Login')}>Login</Pressable>
                            <Pressable style={{fontSize: 20, color: 'white', borderWidth: 1, borderRadius: 10, borderColor: 'white', height: 40, justifyContent: 'center', paddingHorizontal: 4, fontFamily: 'calibri'}} onPress={() => navigation.navigate('Register')}>Subscribe</Pressable>
                        </View>
                    </View>
                    <Text style={styles.title}>Science</Text>
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
        backgroundColor: '#00746D'
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