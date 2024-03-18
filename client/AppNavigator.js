import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/AuthStack/WelcomeScreen';
import LoginScreen from './screens/AuthStack/LoginScreen';
import RegisterScreen from './screens/AuthStack/RegisterScreen';
import HomeScreen from './screens/AppStack/HomeScreen';
import GeographyScreen from './screens/AppStack/GeographyScreen';
import ScienceScreen from './screens/AppStack/ScienceScreen';
import HistoryScreen from './screens/AppStack/HistoryScreen';
import NatureScreen from './screens/AppStack/NatureScreen';
import BiographiesScreen from './screens/AppStack/BiographiesScreen';
import ArtsScreen from './screens/AppStack/ArtsScreen';



const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
            <Stack.Screen name='Home' component={HomeScreen} options ={{headerShown:false}} />
            <Stack.Screen name='Geography' component={GeographyScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Science' component={ScienceScreen} options={{headerShown: false}}/>
            <Stack.Screen name='History' component={HistoryScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Nature' component={NatureScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Biographies' component={BiographiesScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Arts' component={ArtsScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default AppNavigator;