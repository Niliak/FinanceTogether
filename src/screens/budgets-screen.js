import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Spacer } from "../components/spacer";
import { history } from "../components/history";
import { CalculateBudget } from "../features/CalculateBudget";

export const BudgetCategoriesScreen = () => {
  return (
    <SafeAreaView>
      <View styles={styles.container}>
        <View style={styles.topPart}>
          <Text style={styles.title}>Budget Categories</Text>
        </View>

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
  budget: {
    padding: 16,
  },
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
