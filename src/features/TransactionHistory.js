import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, RefreshControl } from "react-native";

import { history } from "../components/history";

export const TransactionHistory = ({}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 0);
  }, []);

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
});
