// SavedDataPage.js
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { DBContext } from '../contexts/DBContext';
import { Stack } from 'expo-router';

export default function SavedDataPage() {
  const [savedData, setSavedData] = useState([]);
  const db = useContext(DBContext);

  const readData = async () => {
    const q = collection(db, 'User');
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      let item = doc.data();
      item.id = doc.id;
      data.push(item);
    });
    setSavedData(data);
  };

  useEffect(() => {
    readData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>ID: {item.id}</Text>
      <Text>Name: {item.name}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Phone: {item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
         <Stack.Screen options={{ headerShown: true }} />
      <FlatList
        data={savedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
  },
});
