import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { TransactionsScreen } from "./src/screens/transactions-screen";
import { AddTransactionScreen } from "./src/screens/add-transaction-screen";
import { BudgetCategoriesScreen } from "./src/screens/budgets-screen";
import { ForumScreen } from "./src/screens/forum-screen";
import { GuildScreen } from "./src/screens/guild-screen";
import { ForumPostScreen } from "./src/screens/forum-post-screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Transactions: "receipt",
  AddTransaction: "add-outline",
  Categories: "category",
  Guild: "people",
  ForumScreen: "forum",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  switch (route.name) {
    case "Transactions":
      return {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ size, color }) => (
          <Ionicons name={iconName} size={size} color={color} />
        ),
      };
    case "AddTransaction":
      return {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ size, color }) => (
          <Ionicons name={iconName} size={size} color={color} />
        ),
      };
    case "Categories":
      return {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name={iconName} size={size} color={color} />
        ),
      };
    case "Guild":
      return {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ size, color }) => (
          <Ionicons name={iconName} size={size} color={color} />
        ),
      };
    case "ForumScreen":
      return {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name={iconName} size={size} color={color} />
        ),
      };
  }
};

const ForumStack = createNativeStackNavigator();

const ForumStackScreen = () => {
  return (
    <ForumStack.Navigator>
      <ForumStack.Screen name="Forum" component={ForumScreen} />
      <ForumStack.Screen name="Post" component={ForumPostScreen} />
    </ForumStack.Navigator>
  );
};

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen
              name="Transactions"
              component={TransactionsScreen}
              options={{ unmountOnBlur: true }}
            />
            <Tab.Screen
              name="Categories"
              component={BudgetCategoriesScreen}
              options={{ unmountOnBlur: true }}
            />
            <Tab.Screen
              name="AddTransaction"
              component={AddTransactionScreen}
            />
            <Tab.Screen
              name="Guild"
              component={GuildScreen}
              options={{ unmountOnBlur: true }}
            />
            <Tab.Screen name="ForumScreen" component={ForumStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
