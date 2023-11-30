import React, {useState} from 'react'
import { View, FlatList, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native';

const {width} = Dimensions.get('window').width

const images = [
    {
        id: 1,
        url: 'https://craftypixels.com/placeholder-image/800x45/e8e8e8/000000&text=comp'
    },
    {
        id: 2,
        url: 'https://craftypixels.com/placeholder-image/800x45/00012b/ffffff&text=comp'
    },
    {
        id: 3,
        url: 'https://craftypixels.com/placeholder-image/800x45/5e0000/ffffff&text=comp'
    },
    {
        id: 4,
        url: 'https://craftypixels.com/placeholder-image/800x45/075700/ffffff&text=comp'
    },
]

const OnBoardingItem = ({item}) => {
    return(
        <Image source={{uri: item.url}} style = {styles.image} />
    )
}

export default function Carousel(){
    return(
        <SafeAreaView style = {styles.container}>
            <FlatList
                data = {images}
                style = {{maxHeight:width}}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator = {false}
                keyExtractor={(item) => String(item?.id)}
                renderItem={({item}) => <OnBoardingItem item = {item} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 0,
    },
    image:{
        width: 393,
        height: 50,
    },
})