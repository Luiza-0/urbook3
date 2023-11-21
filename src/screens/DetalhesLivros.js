// DetalhesLivro.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';
import {addLivros } from '../database/BookStorage';

export default function DetalhesLivro({ route }) {
  const [livros, setLivros] = useState([]);
  const { livro } = route.params;


  const handleAddLivro = async (livro) => {
    try {
      await addLivros(livro);
      console.log('Livro adicionado com sucesso.');
    } catch (error) {
      console.error('Erro ao adicionar livro:', error);
    }
  };

  return (
    <ScrollView style={estilos.back} contentContainerStyle={estilos.scrollContainer}>
      <View style={estilos.container}>
        <Text>Detalhes do Livro ID </Text>
        <Image source={{ uri: livro?.volumeInfo?.imageLinks?.thumbnail }} style={estilos.capa} />
        <Text>{livro?.volumeInfo?.title}</Text>
        <Text>{livro?.volumeInfo?.description}</Text>
        <Button title="Já leu" onPress={() => handleAddLivro(livro)} />
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  // ... estilos ...
});
