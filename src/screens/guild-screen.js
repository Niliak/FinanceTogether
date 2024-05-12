import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";

import { users } from "../components/users";
import { GuildMembers } from "../features/GuildMembers";
import { LeaderboardRanking } from "../features/LeaderboardRanking";

export const GuildScreen = () => {
  const [leaderboardModalVisible, setLeaderboardModalVisible] = useState(false);
  const currentUser = users.find((user) => {
    return user.username === "John Doe";
  });
  const userLevel = currentUser.level;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Guild</Text>

        <View style={styles.userInformationContainer}>
          <Octicons name="feed-person" size={40} color="black" />
          <View style={styles.userInformation}>
            <View style={styles.userNameLvl}>
              <Text>{currentUser.username}</Text>
              <Text>Lv. {userLevel}</Text>
            </View>
            <ProgressBar progress={0.5} color="#6699CC" />
          </View>
        </View>

        <TouchableOpacity
          style={styles.leaderboardButton}
          onPress={() => setLeaderboardModalVisible(true)}
        >
          <Text style={styles.leaderboardText}>Leaderboard</Text>
        </TouchableOpacity>

        {/* leader board modal popup */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={leaderboardModalVisible}
          onRequestClose={() => {
            setLeaderboardModalVisible(!leaderboardModalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.leaderboardView}>
              <Text style={styles.leaderboardTextModal}>Leaderboard</Text>
              <LeaderboardRanking />
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setLeaderboardModalVisible(!leaderboardModalVisible);
                }}
              >
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <GuildMembers />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
  container: {
    padding: 16,
  },
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
  leaderboardButton: {
    backgroundColor: "white",
    width: 100,
    height: 40,
    padding: 10,
    margin: 10,
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "grey",
    shadowOpacity: 70,
    shadowOffset: 50,
  },
  leaderboardText: {
    textAlign: "center",
  },
  leaderboardTextModal: {
    textAlign: "center",
    fontSize: 20,
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  leaderboardView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    alignItems: "center",
    alignSelf: "center",
    width: 100,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
});
