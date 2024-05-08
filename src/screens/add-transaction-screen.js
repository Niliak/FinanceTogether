import React, { useState, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { TextInput, SegmentedButtons } from "react-native-paper";
import NumericPad from "react-native-numeric-pad";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import DropDownPicker from "react-native-dropdown-picker";

import { history } from "../components/history";
import { Spacer } from "../components/spacer";
import { users } from "../components/users";

let addTransactionCount = 0;
let mainUser = users.find((user) => {
  if (user.username === "John Doe") return user;
});

function levelUpSystem() {
  addTransactionCount += 1;
  if (addTransactionCount % 5 === 0 && addTransactionCount > 0) {
    mainUser.level += 1;
  }
  console.log("trx count: ", addTransactionCount);
  console.log("level: ", mainUser.level);
}

export const AddTransactionScreen = ({ addTransaction, clearTransaction }) => {
  const [date, setDate] = useState(dayjs());
  const [category, setCategory] = useState(null);
  const [transactionName, setTransactionName] = useState(null);
  const [transactionType, setType] = useState(null);
  const [amount, setAmount] = useState(null);
  const numpadRef = useRef(null);
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [verificationModalVisible, setVerificationModalVisible] =
    useState(false);

  const [currentTransaction, setCurrentTransaction] = useState({
    date: date,
    category: "",
    transactionName: "",
    amount: "",
    transactionType: "",
  });
  const [open, setOpen] = useState(false);
  const [expenseCategories, setExpenseCategories] = useState([
    { label: "Food", value: "food" },
    { label: "Shopping", value: "shopping" },
    { label: "Others", value: "others" },
  ]);
  const [incomeCategories, setIncomeCategories] = useState([
    { label: "Paycheck", value: "paycheck" },
    { label: "Interest", value: "Interest" },
    { label: "Others", value: "others" },
  ]);

  return (
    <View style={styles.container}>
      <SegmentedButtons
        style={styles.segmentedButton}
        value={transactionType}
        onValueChange={setType}
        buttons={[
          {
            value: "expense",
            label: "Expense",
          },
          {
            value: "income",
            label: "Income",
          },
        ]}
      />
      <View style={{ height: 20 }} />
      <View style={styles.inputField}>
        <Text style={{ flex: 0.3, paddingTop: 8 }}>Date</Text>
        <TouchableOpacity
          style={styles.textInput}
          onPress={() => setDateModalVisible(true)}
        >
          <Text style={styles.dateField}>
            {dayjs(date).format("DD MMM YYYY")}
          </Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={dateModalVisible}
          onRequestClose={() => {
            setDateModalVisible(!dateModalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <DateTimePicker
                mode="single"
                date={date}
                onChange={(params) => setDate(params.date)}
              />
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setDateModalVisible(!dateModalVisible)}
              >
                <Text style={styles.textStyle}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <View style={{ height: 20 }} />
      <View style={styles.categoryInputField}>
        <Text style={styles.categoryLabel}>Category</Text>
        <DropDownPicker
          placeholder="Select a category"
          open={open}
          value={category}
          items={
            transactionType === "expense" ? expenseCategories : incomeCategories
          }
          setOpen={setOpen}
          setValue={setCategory}
          setItems={
            transactionType === "expense"
              ? setExpenseCategories
              : setIncomeCategories
          }
          style={styles.dropDown}
          dropDownDirection="TOP"
          dropDownContainerStyle={{
            maxWidth: 250,
            marginLeft: 34,
          }}
        />
      </View>

      <View style={{ height: 20, zIndexInverse: 5000 }} />
      <View style={styles.inputField}>
        <Text style={{ flex: 0.3, paddingTop: 8 }}>Transaction Name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setTransactionName}
          mode="outlined"
          value={transactionName}
        />
      </View>

      <Spacer />
      <Text style={{ textAlign: "center", fontSize: 50 }}>
        $ {amount === null || amount === "" ? "0.00" : amount}
      </Text>

      <Spacer />
      <Modal
        animationType="slide"
        transparent={true}
        visible={verificationModalVisible}
        onRequestClose={() => {
          setVerificationModalVisible(!verificationModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Please fill in all fields!</Text>
            <View style={{ height: 20 }} />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() =>
                setVerificationModalVisible(!verificationModalVisible)
              }
            >
              <Text style={styles.textStyle}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={{ flexDirection: "row" }}>
        <NumericPad
          ref={numpadRef}
          numLength={8}
          buttonSize={60}
          activeOpacity={0.1}
          onValueChange={(value) => {
            setAmount(value);
          }}
          allowDecimal={true}
          style={{ padding: 12, flex: 6 }}
          buttonItemStyle={styles.numpadButton}
          rightBottomButton={
            <Ionicons name={"arrow-back-outline"} size={28} color={"#000"} />
          }
          onRightBottomButtonPress={() => {
            numpadRef.current.clear();
          }}
          rightBottomButtonItemStyle={styles.numpadButton}
        />
        <TouchableOpacity
          onPress={() => {
            transactionType === null ||
            category === null ||
            transactionName === null ||
            amount === ""
              ? setVerificationModalVisible(true)
              : (console.log("current transaction: ", currentTransaction),
                console.log("date: ", date),
                console.log("category: ", category),
                console.log("transactionName: ", transactionName),
                console.log("amount: ", amount),
                console.log("transactionType: ", transactionType),
                setCurrentTransaction(
                  (currentTransaction.date = dayjs(date).format("DD MMM YYYY")),
                  (currentTransaction.category = category),
                  (currentTransaction.transactionName = transactionName),
                  (currentTransaction.amount = amount),
                  (currentTransaction.transactionType = transactionType)
                ),
                console.log("current transaction: ", currentTransaction),
                history.push(currentTransaction),
                console.log("history: ", history),
                //console.log("history in add transaction screen: ", history);
                setCategory(null),
                setTransactionName(null),
                numpadRef.current.clearAll(),
                setAmount(null),
                setType(null),
                // setCurrentTransaction(
                //   (currentTransaction.date = dayjs(date).format("DD MMM YYYY")),
                //   (currentTransaction.category = category),
                //   (currentTransaction.transactionName = transactionName),
                //   (currentTransaction.amount = amount),
                //   (currentTransaction.transactionType = transactionType)
                // );
                setCurrentTransaction({
                  date: date,
                  category: "",
                  transactionName: "",
                  amount: "",
                  transactionType: "",
                }),
                levelUpSystem(),
                console.log("addTransactionCount: ", addTransactionCount),
                console.log(
                  "current transaction after confirm button: ",
                  currentTransaction
                ),
                console.log("date: ", date),
                console.log("category: ", category),
                console.log("transactionName: ", transactionName),
                console.log("amount: ", amount),
                console.log("transactionType: ", transactionType));
          }}
          style={styles.confirmButton}
        >
          <Ionicons name="checkmark-circle-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 16,
  },
  inputField: {
    flexDirection: "row",
  },
  textInput: {
    flex: 0.8,
    height: 40,
  },
  segmentedButton: {
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  confirmButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  numpadButton: {
    backgroundColor: "white",
  },
  dropDown: {
    maxWidth: 250,
    marginLeft: 34,
  },
  label: {
    padding: 0,
    alignSelf: "flex-start",
  },
  categoryLabel: {
    padding: 0,
  },
  categoryInputField: {
    flexDirection: "row",
  },
});
