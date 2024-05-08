import React from "react";
import { SafeAreaView } from "react-native";

import { TransactionHistory } from "../features/TransactionHistory";
import { IncomeExpenseNetTotal } from "../features/IncomeExpenseNetTotal";

export const TransactionsScreen = () => {
  return (
    <SafeAreaView>
      <IncomeExpenseNetTotal />
      <TransactionHistory />
    </SafeAreaView>
  );
};
