import React from "react";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../assets/image-000.png")} />
      {/* 
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity> */}
      <View style={styles.mainContainerWrapper}>
        <View style={styles.mainContainer}>
          <View style={styles.containerStyle}>
            <TouchableOpacity onPress={() => {}}>
              <Image
                style={styles.sLogo}
                source={require("../assets/image-000.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerStyle}>
            <TouchableOpacity onPress={() => {}}>
              <Image
                style={styles.sLogo}
                source={require("../assets/image-000.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerStyle}>
            <TouchableOpacity onPress={() => {}}>
              <Image
                style={styles.sLogo}
                source={require("../assets/image-000.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerStyle}>
            <TouchableOpacity onPress={() => {}}>
              <Image
                style={styles.sLogo}
                source={require("../assets/image-000.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerStyle}>
            <TouchableOpacity onPress={() => {}}>
              <Image
                style={styles.sLogo}
                source={require("../assets/image-000.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const onPress = () => {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },

  logo: {
    width: 200,
    height: 60,
    margin: 20,
  },

  sLogo: {
    width: 50,
    height: 50,
    margin: 20,
  },

  mainContainerWrapper: {
    flexDirection: "row",
    alignContent: "center",
  },
  mainContainer: {
    flex: 1,
    width: "90%",
    flexWrap: "wrap",
    flexDirection: "row",
    marginHorizontal: "13%",
  },
  containerStyle: {
    padding: 10,
    backgroundColor: "white",
    borderWidth: 0,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderColor: "#808080",
    marginTop: 50,
    elevation: 10,
    borderRadius: 10,
  },
});
