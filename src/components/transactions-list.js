import React from "react";
import { Card, ProgressBar } from "react-native-paper";
import { Text, StyleSheet, View } from "react-native";

const transaction = {
  date: "1/2/2024",
  transactionName: "transaction 1",
  amount: "$40",
  budgetProgress: "$40 / $100 spent",
  transactionType: "expense",
};

export const TransactionsList = ({ transaction = {} }) => {
  const {
    date = "1/2/2024",
    transactionName = "transaction 1",
    amount = "$40",
    budgetProgress = "$40 / $100 spent",
    transactionType = "expense",
  } = transaction;

  return (
    <>
      <Card style={{ margin: 16 }}>
        <Card.Title title={date} />
        <Card.Content>
          <View style={styles.container}>
            <Text variant="bodyMedium">{transactionName}</Text>
            <Text style={styles.transactionAmt} variant="bodyMedium">
              {amount}
            </Text>
          </View>
          <Text variant="bodyMedium">{budgetProgress}</Text>
          <ProgressBar progress={0.5} color="#6699CC" />
        </Card.Content>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  transactionAmt: {
    color: transaction.transactionType === "expense" ? "red" : "green",
  },
});
