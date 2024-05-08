import React, { useState, useCallback } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  FlatList,
} from "react-native";
import { Octicons, Entypo } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

import { Spacer } from "../components/spacer";
import { CommentsSection } from "../features/CommentsSection";
import { userComments } from "../components/userComments";

export const ForumPostScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.postTitle}>Tips for increasing savings</Text>
        <Spacer />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          dapibus ac lectus eu condimentum. Etiam vel tellus congue, cursus elit
          posuere, condimentum risus. Duis placerat dapibus est, ut imperdiet
          turpis aliquam eu. Maecenas pharetra mattis sapien, eget gravida augue
          consequat nec. Praesent in gravida erat. Aliquam in sem dolor. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec maximus scelerisque sodales. Cras vitae gravida
          eros. Aenean feugiat metus metus, in blandit ex ultrices non. Nullam
          ante est, vehicula ac velit in, condimentum tincidunt tortor. Mauris
          pellentesque vestibulum ullamcorper. Suspendisse sit amet eros ipsum.
        </Text>
        <Spacer />

        <CommentsSection />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  postTitle: {
    fontSize: 30,
    textAlign: "left",
  },
  userCommentContainer: {
    flexDirection: "row",
  },
  addCommentContainer: {
    flexDirection: "row",
  },
  textInput: {
    flex: 0.8,
    height: 30,
  },
});
