import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface HeaderProps {
  month: number;
}

const Header = ({ month }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.leftText}>{month}월</Text>
      <TouchableOpacity onPress={() => alert("설정 버튼 입니다.")}>
        <Icon name={"settings-outline"} size={24} style={styles.rightButton} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 16,
    backgroundColor: "#FDB813",
    color: "#fff",
  },
  leftText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  rightButton: {
    color: "#fff",
  },
  rightButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Header;
