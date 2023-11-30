import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import Carousel from '../../components/Carousel';

const listaDados = [{
  id: 1,
  label: 'UNIMED',
  value: '150,15',
  date: '04/11/2023',
  type: 0 //gastos - 1 seria ganho
},
 {
  id: 2,
    label: 'Bar do Toninho',
    value: '110,40',
    date: '11/11/2023',
    type: 0
  },
  {
  id: 3,
    label: 'Venda Site',
    value: '2.250,00',
    date: '14/11/2023',
    type: 1
  },
  {
  id: 4,
    label: 'TeleTech Informática LTDA.',
    value: '350,28',
    date: '19/11/2023',
    type: 0
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Otávio Sbampato" />
      
      <Balance saldo = "83.251,11" gastos = "2.519,23" />

      <Carousel />

      <Actions />

      <Text style = {styles.recentMov}>Movimentações recentes</Text>

      <FlatList
        style={styles.lista}
        data={listaDados}
        keyExtractor = {(item) => String(item.id)} //react pede que esse id seja string, portanto convertemos
        showVerticalScrollIndicator = {false}
        renderItem = { ({ item }) => <Movements data={item} />} //passa em cada item e renderiza o elemento que vc deseja
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(89, 90, 99, 0.11)',
  },
  recentMov:{ //title
    color: "#0C1F3F",
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft : 14,
    marginRight: 14,
    marginTop: 10,
    marginBottom: 16,
  },
  lista:{
    marginStart: 12,
    marginEnd: 12,
  }
});
