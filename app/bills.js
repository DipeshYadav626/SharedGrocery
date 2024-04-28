import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, View, TouchableOpacity, Stack } from 'react-native';
import { Theme } from '../theme/Theme'; // Assuming you have a Theme file

const GroceryListBillsPage = () => {
    // Example grocery list bills data (replace this with your actual data structure)
    const [groceryBills, setGroceryBills] = useState([
        { id: 1, item: 'Apples', quantity: 2, pricePerItem: 1.5 },
        { id: 2, item: 'Milk', quantity: 1, pricePerItem: 2.0 },
        { id: 3, item: 'Bread', quantity: 1, pricePerItem: 1.0 },
    ]);

    // Calculate total bill amount
    const totalBillAmount = groceryBills.reduce((total, bill) => total + bill.quantity * bill.pricePerItem, 0);

    useEffect(() => {
        // Fetch grocery list bills data from API or storage
        // Example:
        // fetchGroceryListBillsData().then(data => setGroceryBills(data));
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.billItem}>
            <Text style={styles.billName}>{item.item}</Text>
            <Text style={styles.billQuantity}>Quantity: {item.quantity}</Text>
            <Text style={styles.billPrice}>Price Per Item: ${item.pricePerItem}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: true }} />
            <Text style={styles.pageTitle}>Grocery List Bills</Text>
            <FlatList
                data={groceryBills}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                style={styles.list}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total: ${totalBillAmount.toFixed(2)}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.primaryDark,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Theme.white,
        marginBottom: 20,
    },
    list: {
        flex: 1,
    },
    billItem: {
        backgroundColor: Theme.secondary,
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
    },
    billName: {
        fontSize: 16,
        color: Theme.white,
        fontWeight: 'bold',
    },
    billQuantity: {
        fontSize: 14,
        color: Theme.white,
        marginTop: 5,
    },
    billPrice: {
        fontSize: 14,
        color: Theme.white,
        marginTop: 5,
    },
    totalContainer: {
        backgroundColor: Theme.primaryLight,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Theme.black,
    },
});

export default GroceryListBillsPage;
