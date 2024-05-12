import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

import { CalculateBudget } from "../features/CalculateBudget";

export const BudgetCategoriesScreen = () => {
  return (
    <SafeAreaView>
      <View styles={styles.container}>
        <View style={styles.topPart}>
          <Text style={styles.title}>Budget Categories</Text>
        </View>
        {/* display different budget category cards */}
        <CalculateBudget budgetCategory="food" budget={300} />
        <CalculateBudget budgetCategory="shopping" budget={150} />
        <CalculateBudget budgetCategory="others" budget={200} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  topPart: {
    padding: 16,
    flexDirection: "row",
  },
  title: {
    fontSize: 25,
    flex: 0.9,
  },
});
