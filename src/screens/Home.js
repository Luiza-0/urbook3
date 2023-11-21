import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, StyleSheet, Button, Dimensions, ScrollView} from 'react-native';
import api from '../componentes/api';
import ListaCategorias from '../componentes/ListaCategorias';

import topo from '../../assets/topo-2.png';

const width = Dimensions.get('screen').width;

export default function Home({ navigation }) {
  const [livro, setLivro] = useState([]);
  const [livros, setLivros] = useState([]);
  const [consulta, setConsulta] = useState('');

  const buscarLivros = async () => {
    try {
      if (!consulta) {
        return;
      }
      const response = await api.get('/volumes', {
        params: {
          q: consulta,
        },
      });
      setLivros(response.data.items);
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    }
  };
 
  useEffect(() => {
    buscarLivros();
  }, [consulta]);

  return (
    <ScrollView contentContainerStyle={estilos.scrollContainer}>
      <View style={estilos.back}>
        <View style={estilos.topo}>
          <Text style={estilos.topoT}>
            <Text>Qual será{'\n'}</Text>
            <Text>o seu próximo{'\n'}</Text>
            <Text>livro favorito?</Text>
          </Text>
          <Image source={topo} style={estilos.imgTopo} />
        </View>
        <View style={estilos.container}>
          <TextInput
            style={estilos.input}
            placeholder="Pesquise por livros..."
            onChangeText={(texto) => setConsulta(texto)}
          />
          <Button title="Buscar Livros" onPress={buscarLivros} />
        </View>

        
      
        <View style={estilos.categorias}>
          <Text style={[estilos.title, estilos.titleLeft]}>Categorias</Text>
          <ListaCategorias />
        </View>
      </View>
    </ScrollView>
  );
};


const estilos = StyleSheet.create({
  back: {
    width: '100%',
    height: '100%',
    backgroundColor:'#F8F2FA',
  },
  topo: {
    width: '100%',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgTopo: {
    flex: 2,
    marginTop: 19,
    width: null,
    resizeMode: 'contain',
    height: 160,
  },
  topoT: {
    fontFamily: "PalanquinSemiBold",
    fontSize: 25,
    color: '#7A2D98',
  },
  textNegrito: {
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: '90%',
    borderRadius: 13,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#BAB8BC',
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
  },
  sugestao: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  title: {
    fontFamily: "PalanquinThin",
    color: '#7A2D98',
    fontSize: 19,
  },
  titleLeft: {
    alignSelf: 'flex-start',
    marginStart: 20,
  },
  sugestaoLivro: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    width: 150,
  },
  sugestaoPrincipal: {
    flexDirection: 'row',
    marginVertical:10,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'space-evenly', // Espaçamento entre as colunas
    alignSelf: 'center',
  },
  livroColuna: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width:155,
  },
  infoColuna: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 170, // Largura de 194px
    fontFamily: "PalanquinThin",
    height:200,
    justifyContent:'space-evenly',
  },
  nomeLivroHome: {
    width:'100%',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#7A2D98',
    alignSelf: 'center',
    textAlign:'center',
  },
  nomeAnoContainer: {
    flexDirection: 'row',
    width:'100%',
    justifyContent: 'space-between',
    alignSelf:'center',
  },
  nomeAutorHome: {
    fontSize: 10,
    color: '#7A2D98',
  },
  anoLivroHome: {
    fontSize: 10,
    color: '#7A2D98',
  },
  descLivro:{
    backgroundColor: '#FFF',
    borderRadius: 9,
    width:'100%',
  },
  descLivroHome: {
    fontSize: 9,
    padding: 8,
    color: '#7A2D98',
    alignSelf: 'center',
  },

  scrollContainer: {
    flexGrow: 1,
  },

  categorias:{
    justifyContent: 'center',
    marginTop: 40,
    marginStart: 20,
    marginBottom:40,
  }
});
