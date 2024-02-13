import React from "react";
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from "react-native";
import styled from "styled-components/native";

import { TransactionsList } from "../components/transactions-list";

const Title = styled.Text`
  padding: 16px;
  background
`;

export const TransactionsScreen = () => (
  <SafeAreaView>
    <Text style={styles.date}>1/2/2024 - 28/2/2024</Text>
    <View style={styles.container}>
      <View>
        <Text>Income</Text>
        <Text style={styles.income}>$1000</Text>
      </View>
      <View>
        <Text>Expense</Text>
        <Text style={styles.expense}>$40</Text>
      </View>
      <View>
        <Text>Net Total</Text>
        <Text style={styles.netTotal}>$960</Text>
      </View>
    </View>
    <TransactionsList />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
  },
  date: {
    textAlign: "center",
    padding: 16,
  },
  income: {
    color: "green",
  },
  expense: {
    color: "red",
  },
  netTotal: {
    color: "green",
  },
});
