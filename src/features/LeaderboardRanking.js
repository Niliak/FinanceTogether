import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, RefreshControl } from "react-native";
import { Octicons } from "@expo/vector-icons";

import { users } from "../components/users";

export const LeaderboardRanking = () => {
  let ranking = 0;
  let unrankedUsers = users;
  let rankedUsers = unrankedUsers.sort(
    (firstUser, secondUser) => secondUser.level - firstUser.level
  );
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 0);
  }, []);

  const renderUser = ({ item }) => {
    return (
      <View style={styles.userInformationModal}>
        {/* to display the rank numbers */}
        <Text style={styles.ranking}>
          {ranking !== 4 ? (ranking += 1) : (ranking = 1)}
        </Text>
        <Octicons name="feed-person" size={40} color="black" />
        <View style={styles.userNameLvlModal}>
          <Text>{item.username}</Text>
          <Text>Lv. {item.level}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={rankedUsers}
        renderItem={renderUser}
        refreshing={true}
        extraData={rankedUsers}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  userInformationModal: {
    flexDirection: "row",
  },
  userNameLvlModal: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    flex: 1,
  },
  ranking: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 5,
    margin: 10,
    backgroundColor: "grey",
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow: "hidden",
  },
});
