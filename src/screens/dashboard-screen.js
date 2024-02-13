import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export const DashboardScreen = () => (
  <SafeAreaView>
    <View style={styles.list}>
      <Text>Dashboard</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  list: {
    padding: 16,
    backgroundColor: "blue",
  },
});
