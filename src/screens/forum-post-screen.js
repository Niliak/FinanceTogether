import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";

import { CommentsSection } from "../features/CommentsSection";

export const ForumPostScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.postTitle}>Tips for increasing savings</Text>
        <View style={styles.spacer} />
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
        <View style={styles.spacer} />

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
  spacer: {
    height: 40,
  },
});
