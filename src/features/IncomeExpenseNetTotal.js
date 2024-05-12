import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { history } from "../components/history";

let totalIncome = 0;
let totalExpense = 0;
let netTotal = 0;
let incomeArray = [];
let expenseArray = [];

function calculateTotalIncome() {
  incomeArray = history.filter((transaction) => {
    return transaction.transactionType === "income";
  });

  incomeArray.forEach((transaction) => {
    totalIncome += parseFloat(transaction.amount);
  });
}

function calculateTotalExpense() {
  expenseArray = history.filter((transaction) => {
    return transaction.transactionType === "expense";
  });

  expenseArray.forEach((transaction) => {
    totalExpense += parseFloat(transaction.amount);
  });
}

function calculateIncomeExpenseNetTotal() {
  calculateTotalIncome();
  calculateTotalExpense();
  netTotal = totalIncome - totalExpense;
}

export const IncomeExpenseNetTotal = () => {
  totalExpense = 0;
  totalIncome = 0;
  netTotal = 0;
  calculateIncomeExpenseNetTotal();

  return (
    <View style={styles.container}>
      <View>
        <Text>Income</Text>
        <Text style={styles.income}>${totalIncome.toFixed(2)}</Text>
      </View>
      <View>
        <Text>Expense</Text>
        <Text style={styles.expense}>${totalExpense.toFixed(2)}</Text>
      </View>
      <View>
        <Text>Net Total</Text>
        <Text style={{ color: netTotal >= 0 ? "green" : "red" }}>
          ${netTotal.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
  },
  income: {
    color: "green",
  },
  expense: {
    color: "red",
  },
});
