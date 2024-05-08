import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  ScrollView,
} from "react-native";

import { history } from "../components/history";

// //calculate total Income
// export let tempTotalIncome = 0;
// let incomeArray = [];

// const calculateTotalIncome = () => {
//   incomeArray = history.filter((transaction) => {
//     return transaction.transactionType === "income";
//   });

//   incomeArray.forEach((transaction) => {
//     tempTotalIncome += parseInt(transaction.amount);
//   });
//   console.log("temp totalIncome: ", tempTotalIncome);
// };

// //calculate total Expense
// export let tempTotalExpense = 0;
// let expenseArray = [];

// const calculateTotalExpense = () => {
//   expenseArray = history.filter((transaction) => {
//     return transaction.transactionType === "expense";
//   });

//   expenseArray.forEach((transaction) => {
//     tempTotalExpense += parseInt(transaction.amount);
//   });
//   console.log("temp totalExpense: ", tempTotalExpense);
// };

// //calculate net total
// export let tempNetTotal = 0;

// calculateTotalExpense();
// calculateTotalIncome();
// tempNetTotal = tempTotalIncome - tempTotalExpense;

export const TransactionHistory = ({}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // setTotalExpense(tempTotalExpense);
    // setTotalIncome(tempTotalIncome);
    // setNetTotal(tempNetTotal);
    setTimeout(() => {
      setRefreshing(false);
    }, 0);
  }, []);

  if (!history || !history.length) {
    return <Text>No transactions</Text>;
  }
  // console.log("total Expense: ", totalExpense);
  // console.log("total Income: ", totalIncome);
  // console.log("net total: ", netTotal);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.transaction}>
        <Text style={styles.transactionDate}>{item.date}</Text>
        <View style={styles.lineSeparator} />
        <View style={styles.container}>
          <Text>{item.transactionName}</Text>
          <Text
            style={{
              color: item.transactionType === "expense" ? "red" : "green",
            }}
          >
            ${parseFloat(item.amount).toFixed(2)}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={history}
        renderItem={renderItem}
        refreshing={true}
        extraData={history}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={{ paddingBottom: 140 }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lineSeparator: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  transaction: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 8,
    marginBottom: 8,
  },
  transactionDate: {
    marginBottom: 0,
    paddingBottom: 4,
  },
  income: {
    color: "green",
  },
  expense: {
    color: "red",
  },
  title: {
    fontSize: 20,
  },
});
