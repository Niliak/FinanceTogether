import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Surface, ProgressBar } from "react-native-paper";

import { Spacer } from "../components/spacer";
import { history } from "../components/history";
let totalCategoryExpenses = 0;

export const CalculateBudget = ({ budgetCategory, budget }) => {
  totalCategoryExpenses = 0;

  function filterCategoryExpenses(transaction) {
    if (
      transaction.transactionType === "expense" &&
      transaction.category === budgetCategory
    ) {
      return transaction;
    }
  }

  const categoryExpensesFiltered = history.filter(filterCategoryExpenses);
  //array is returned

  //calculate total category expenses
  const calculateTotalCategoryExpenses = () => {
    categoryExpensesFiltered.forEach((transaction) => {
      totalCategoryExpenses += parseFloat(transaction.amount);
    });
  };
  calculateTotalCategoryExpenses();
  console.log("recalculating budget");
  return (
    <Surface style={styles.surface} elevation={1} mode="elevated">
      <View style={styles.budgetContainer}>
        <Text>
          {budgetCategory.charAt(0).toUpperCase() + budgetCategory.slice(1)}: $
        </Text>
        <Text>{totalCategoryExpenses.toFixed(2)}</Text>
        <Text>/ ${budget.toFixed(2)}</Text>
      </View>
      <ProgressBar
        progress={totalCategoryExpenses / budget}
        color={totalCategoryExpenses > budget ? "red" : "#6699CC"}
      />
    </Surface>
  );
};

const styles = StyleSheet.create({
  budgetContainer: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  surface: {
    padding: 8,
    margin: 10,
    height: 60,
  },
});
