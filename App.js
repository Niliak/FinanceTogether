import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

import { TransactionsScreen } from "./src/screens/transactions-screen";
import { DashboardScreen } from "./src/screens/dashboard-screen";
import { TransactionsList } from "./src/components/transactions-list";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Transactions: "receipt",
  Dashboard: "chart-bar",
  AddTransaction: "add-outline",
  Categories: "category",
  Community: "people",
  PersonalInfo: "person",
};

const AddTransactionScreen = () => (
  <SafeAreaView>
    <View style={styles.list}>
      <Text>Add Transaction</Text>
    </View>
  </SafeAreaView>
);

const BudgetCategoriesScreen = () => (
  <SafeAreaView>
    <View style={styles.list}>
      <Text>Budget Categories</Text>
    </View>
  </SafeAreaView>
);

const CommunityScreen = () => (
  <SafeAreaView>
    <View style={styles.list}>
      <Text>Community</Text>
    </View>
  </SafeAreaView>
);

const PersonalInfoScreen = () => (
  <SafeAreaView>
    <View style={styles.list}>
      <Text>Personal Info</Text>
    </View>
  </SafeAreaView>
);

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
    case "Dashboard":
      return {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ size, color }) => (
          <FontAwesome5 name={iconName} size={size} color={color} />
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
    case "Community":
      return {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ size, color }) => (
          <Ionicons name={iconName} size={size} color={color} />
        ),
      };
    case "PersonalInfo":
      return {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ size, color }) => (
          <Ionicons name={iconName} size={size} color={color} />
        ),
      };
  }
};

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        {/* <View style={styles.list}>
          <TransactionsList />
        </View> */}
        <NavigationContainer>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Transactions" component={TransactionsScreen} />
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen
              name="AddTransaction"
              component={AddTransactionScreen}
            />
            <Tab.Screen name="Categories" component={BudgetCategoriesScreen} />
            <Tab.Screen name="Community" component={CommunityScreen} />
            <Tab.Screen name="PersonalInfo" component={PersonalInfoScreen} />
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
  search: {
    padding: 16,
  },
  list: {
    padding: 16,
    backgroundColor: "blue",
  },
});
