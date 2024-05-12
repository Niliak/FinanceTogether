import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const ForumScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Tips for increasing savings</Text>
        <TouchableOpacity>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color="black"
            style={styles.postButton}
            onPress={() => navigation.navigate("Post")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lineSeparator} />
      <View style={styles.post}>
        <Text style={styles.postTitle}>Finance article</Text>
        <TouchableOpacity>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color="black"
            style={styles.postButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  post: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  postTitle: {
    fontSize: 20,
  },
  postButton: {
    alignSelf: "flex-end",
  },
  lineSeparator: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
