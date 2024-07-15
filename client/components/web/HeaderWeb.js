import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Text, View, Pressable, Dimensions, StyleSheet } from 'react-native';
import { SearchBar } from "react-native-elements";

const { width, height } = Dimensions.get('window');

export default function HeaderWeb ({color}) {
    const navigation = useNavigation();

    return(
        <View style={styles.header}>
            <View style={{alignContent: 'center', width: '15%'}}>
                <Text style={{fontSize: 20, color: 'white', alignSelf: 'center'}}>Explore</Text>
            </View>
            <View style={styles.headerCenter}>
                <Pressable onPress={() => navigation.navigate('Home')}><Text style={styles.title} >Universeum</Text></Pressable>
                <SearchBar
                    placeholder="Search Here..." 
                    round
                    containerStyle={styles.search}
                    inputContainerStyle={[styles.searchInput, {backgroundColor: color}]} 
                    placeholderTextColor='white'              
                />
                <View style={styles.tabs}> 
                    <Pressable><Text style={styles.tabsText}>Games & Quizes</Text></Pressable>
                    <Pressable><Text style={styles.tabsText}>Fun Facts</Text></Pressable>
                    <Pressable onPress={() => navigation.navigate('History')}><Text style={styles.tabsText}>History</Text></Pressable>
                    <Pressable onPress={() => navigation.navigate('Science')}><Text style={styles.tabsText}>Science</Text></Pressable>
                    <Pressable onPress={() => navigation.navigate('Geography')}><Text style={styles.tabsText}>Geography</Text></Pressable>
                    <Pressable onPress={() => navigation.navigate('Nature')}><Text style={styles.tabsText}>Nature & Wildlife</Text></Pressable>
                    <Pressable onPress={() => navigation.navigate('Arts')}><Text style={styles.tabsText}>Arts & Culture</Text></Pressable>
                    <Pressable onPress={() => navigation.navigate('Biographies')}><Text style={styles.tabsText}>Biographies</Text></Pressable>
                </View>
            </View>
            <View style={{flexDirection: 'row', width: '15%', alignItems: 'baseline', justifyContent: 'center', height: 40}}>
                <Pressable onPress={() => navigation.navigate('Login')}><Text style={{fontSize: 20, color: 'white', marginLeft: 50, marginRight: 16, height: 40, justifyContent: 'center', fontFamily: 'calibri'}}>Login</Text></Pressable>
                <Pressable onPress={() => navigation.navigate('Register')} style={{ borderWidth: 1, borderRadius: 10, borderColor: 'white', height: 40, alignItems: 'center', justifyContent: 'center'}}><Text style={{fontSize: 20, color: 'white', paddingHorizontal: 4, fontFamily: 'calibri'}}>Subscribe</Text></Pressable>                
            </View>
        </View>  
    ) 
}

const styles = StyleSheet.create({
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
    search: {
        backgroundColor: 'transparent',
        width: '100%',
        borderBottomWidth: 0,
        borderTopWidth: 0
    },
    searchInput: {
        height: 40,
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
    title: {
        color: 'white',
        fontSize: 40
    },
});