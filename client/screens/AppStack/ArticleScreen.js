import React from "react";
import { Text, View, StyleSheet, ImageBackground, Dimensions, Pressable, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

export default function ArticleScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/black-hole.jpg')} style={styles.background}>
                <View style={styles.editorContainer}>
                    <View style={styles.inputs}>
                        <TextInput style={styles.titleInput} placeholder="Title of the article"></TextInput>
                        <TextInput style={styles.contentInput} placeholder="Content of the article" multiline={true}></TextInput>
                    </View>
                    <View style={styles.menusButtons}>
                        <Pressable style={styles.button}>Category</Pressable>
                        <Pressable style={styles.button}>Subcategory</Pressable>
                        <Pressable style={styles.button}>Date</Pressable>
                        <Pressable style={styles.button}>Location</Pressable>
                        <Pressable style={styles.submitButton}>Submit</Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height
    },
    editorContainer: {
        width: '90%',
        height: '80%',
        backgroundColor: '#330762',
        flexDirection: 'row'
    },
    inputs: {
        flexDirection: 'column',
        width: '70%',
        height: '100%'
    },
    menusButtons: {
        width: '30%',
        height: '92%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingRight: 20
    },
    titleInput: {
        height: '8%',
        width: '95%',
        backgroundColor: '#7C55A5',
        margin: 20,
        borderRadius: 15,
        paddingLeft: 20
    },
    contentInput: {
        height: '92%',
        width: '95%',
        backgroundColor: '#7C55A5',
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 15,
        padding: 15
    },
    button: {
        height: '8%',
        width: '100%',
        backgroundColor: '#7C55A5',
        borderRadius: 15,
        marginVertical: 20,
        justifyContent: 'center',
        textAlign: 'center'
    },
    submitButton: {
        position: 'absolute',
        bottom: 0,
        height: '8%',
        width: '95%',
        backgroundColor: '#7C55A5',
        borderRadius: 15,
        justifyContent: 'center',
        textAlign: 'center',
    },
})