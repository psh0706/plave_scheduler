import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Calendar } from "@components/Calendar";
import Header from "@components/Header";
import { ScrollView } from "react-native-gesture-handler";

export default function Index() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <Header month={selectedMonth} />
      </SafeAreaView>
      <ScrollView>
        <Calendar />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "#FDB813",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textColor: {
    color: "red",
  },
});
