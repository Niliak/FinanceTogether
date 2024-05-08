import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, RefreshControl } from "react-native";
import { Octicons } from "@expo/vector-icons";

import { guildMembers } from "../components/users";

export const GuildMembers = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 0);
  }, []);

  const renderUser = ({ item }) => {
    return (
      <View style={styles.userInformationContainer}>
        <Octicons name="feed-person" size={40} color="black" />
        <View style={styles.userInformation}>
          <View style={styles.userNameLvl}>
            <Text>{item.username}</Text>
            <Text>Lv. {item.level}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={guildMembers}
        renderItem={renderUser}
        refreshing={true}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={{ paddingBottom: 140 }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  userInformationContainer: {
    flexDirection: "row",
    margin: 10,
  },
  userInformation: {
    flexDirection: "row",
    flex: 1,
  },
  userNameLvl: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    flex: 1,
  },
});
