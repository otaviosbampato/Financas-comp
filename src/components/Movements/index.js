import React, { useState } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default function Movements({data}) {

    const [showValue, setShowValue] = useState(false);

 return (
   <TouchableOpacity style = {styles.container} activeOpacity={0.7} onPress={ () => setShowValue(!showValue)}>
    <Text style = {styles.mData}>{data.date}</Text>

    <View style = {styles.contentValores}>
        <Text style = {styles.label}>{data.label}</Text>

        {showValue ? (
            <Text style = {data.type === 1 ? styles.ganho : styles.gastos}>
                {data.type === 1 ? `R$ +${data.value}` : `R$ -${data.value}` }
            </Text>
        ) : (
            <View style = {styles.tampadorMov}>
            </View>
        )}

    </View>

   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom: 24,
        borderBottomWidth: 2.5,
        borderBottomColor: 'rgba(189, 195, 199, .2)',
    },
    contentValores:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
        marginBottom: 8
    },
    mData:{
        color: 'rgba(54, 54, 54, 0.3)',
        fontWeight: 'bold',
    },
    label:{
        fontWeight: 'bold',
        color: '#000',
        fontSize: 15,
    },
    ganho:{
        fontSize: 16,
        color: 'rgba(31, 228, 0, 1)',
        fontWeight: '500',
    },
    gastos:{
        fontSize: 16,
        color: 'rgba(255, 0, 0, 1)',
        fontWeight: '500',
    },
    tampadorMov:{
        marginTop: 6,
        width: 80,
        height: 12,
        backgroundColor: 'rgba(54, 54, 54, 0.3)',
        borderRadius: 10
    },
})