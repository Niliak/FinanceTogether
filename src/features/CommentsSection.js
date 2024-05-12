import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Octicons, Entypo } from "@expo/vector-icons";

import { userComments } from "../components/userComments";

export const CommentsSection = () => {
  const [newComment, setNewComment] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 0);
  }, []);

  const renderComment = ({ item }) => {
    return (
      <View style={styles.userCommentContainer}>
        <Octicons name="feed-person" size={40} color="black" />
        <View>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.comment}>{item.comment}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={userComments}
        renderItem={renderComment}
        refreshing={true}
        extraData={userComments}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{ flexGrow: 0 }}
        contentContainerStyle={{ paddingBottom: 0 }}
      />

      <KeyboardAvoidingView
        behavior="padding"
        style={styles.container}
        keyboardVerticalOffset={100}
      >
        <View style={styles.addCommentContainer}>
          <TouchableOpacity
            onPress={() => {
              userComments.push({
                username: "John Doe",
                comment: newComment,
              });
              setNewComment("");
            }}
          >
            <Entypo name="plus" size={24} color="black" />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            onChangeText={setNewComment}
            mode="outlined"
            value={newComment}
            placeholder="Add a comment..."
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  userCommentContainer: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
  },
  addCommentContainer: {
    flexDirection: "row",
    marginTop: "auto",
  },
  container: {
    marginTop: "auto",
    marginBottom: 0,
  },
  textInput: {
    flex: 1,
    height: 30,
  },
  username: {
    paddingBottom: 5,
    paddingLeft: 5,
    fontWeight: "bold",
  },
  comment: {
    paddingLeft: 5,
  },
});
