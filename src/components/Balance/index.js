import React from 'react-native';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { MotiView } from 'moti';

export default function Balance({saldo, gastos}) {
    return (
        <MotiView style = {styles.container}
            from = {{
                rotateX : '-100deg',
                opacity: 0,
            }}
            animate = {{
                rotateX: '0deg',
                opacity: 1,
            }}
            transition = {{
                type: 'timing',
                delay: '300',
                duration: 100, 
            }}
        >

            <View style = {styles.item}>
                <Text style = {styles.saldo}>Saldo</Text>
                    <View style={styles.content}>
                        <Text style = {styles.moeda}>R$</Text>
                        <Text style = {styles.balance}>{saldo}</Text>
                    </View>
            </View>

            <View style = {styles.item}>
                <Text style = {styles.saldo}>Gastos - nov</Text>
                <View style={styles.content}>
                        <Text style = {styles.moeda}>R$</Text>
                        <Text style = {styles.gastos}>{gastos}</Text>
                    </View>
            </View>

        </MotiView>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFF",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 14,
        paddingEnd: 18,
        marginTop: -10,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 8,
        paddingBottom: 20,
        paddingTop: 16,
        zIndex: 99,
    },
    item:{

    },
    saldo:{ //itemTitle
        fontSize: 20,
        color: "#0C1F3F",
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    moeda:{ //currency symbol
        color: "#0C1F3F",
        marginRight: 6,
        fontSize: 12
    },
    balance:{
       fontSize: 18,
       color: 'rgba(31, 228, 0, 1)',
       fontWeight: '600'
    },
    gastos:{ //expenses
        fontSize: 18,
        color: 'rgba(255, 0, 0, 1)',
        fontWeight: '600'
    }
})