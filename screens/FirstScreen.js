import React from "react";
import { StyleSheet, Text, Image, SafeAreaView, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function FirstScreen({ navigation }) {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];
  const countriesWithFlags = [
    { title: "Egypt", image: require("../assets/Egypt.png") },
    { title: "Canada", image: require("../assets/Canada.png") },
    { title: "Australia", image: require("../assets/Australia.png") },
    { title: "Ireland", image: require("../assets/Ireland.png") },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.containerMain}>
        <View>
          <Image
            style={styles.logo}
            source={require("../assets/image-000.png")}
          />
          <Text style={styles.solutions}>Your connected {"\n"} solution</Text>
        </View>
        <View style={styles.bottomView}>
          <SelectDropdown
            data={countriesWithFlags}
            // defaultValueByIndex={1}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              navigation.navigate("Home");
            }}
            style={styles.marginTop}
            buttonStyle={styles.dropdown3BtnStyle}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={styles.dropdown3BtnChildStyle}>
                  {selectedItem ? (
                    <Image
                      source={selectedItem.image}
                      style={styles.dropdown3BtnImage}
                    />
                  ) : (
                    <Ionicons name="md-earth-sharp" color={"#444"} size={32} />
                  )}
                  <Text style={styles.dropdown3BtnTxt}>
                    {selectedItem
                      ? selectedItem.title
                      : "Please select your language"}
                  </Text>
                  <FontAwesome name="chevron-down" color={"#444"} size={18} />
                </View>
              );
            }}
            dropdownStyle={styles.dropdown3DropdownStyle}
            rowStyle={styles.dropdown3RowStyle}
            renderCustomizedRowChild={(item, index) => {
              return (
                <View style={styles.dropdown3RowChildStyle}>
                  <Image source={item.image} style={styles.dropdownRowImage} />
                  <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 90,
    top: -40,
  },

  dropdown3BtnStyle: {
    width: "80%",
    height: 30,
    backgroundColor: "#FFF",
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#444",
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: { width: 40, height: 40, resizeMode: "cover" },
  dropdown3BtnTxt: {
    color: "#444",
    textAlign: "center",
    fontSize: 15,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: { backgroundColor: "white" },
  dropdown3RowStyle: {
    borderBottomColor: "#444",
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdownRowImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3RowTxt: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    marginHorizontal: 12,
  },
  containerMain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomView: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", //Here is the trick
    bottom: 40, //Here is the trick
  },
  textStyle: {
    color: "#fff",
    fontSize: 18,
  },
  solutions: {
    fontSize: 30,
    textAlign: "center",
    top: 30,
  },
});
