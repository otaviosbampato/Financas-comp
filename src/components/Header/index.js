import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

import {AntDesign} from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }){
    return(
        <View style = {styles.container}>
            <View style = {styles.content}>
                <Text style = {styles.username}>{name}</Text>

            <TouchableOpacity activeOpacity = {0.8} style={styles.buttonUser}>
                <AntDesign name="user" size={20} color="#FFF" />
            </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0C1F3F",
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 10,
        paddingEnd: 16,
        paddingBottom: 20,
    },
    content:{
        flex:1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username:{
        fontSize: 18,
        color: "#FFF",
        fontWeight: 'bold',
    },
    buttonUser:{
        width: 36,
        height: 36,
        backgroundColor: 'rgba(189, 195, 199, .2)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 36 / 2,
    }
})