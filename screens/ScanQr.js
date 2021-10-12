import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function scanQr({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`${data}`);
    navigation.navigate("Home");
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/image-000.png")} />
      <Text style={styles.solutions}>1. Merci de scanner votre ID </Text>
      <View style={styles.cameraHolder}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.camera}
          viewFinderDisplay={true}
          showViewFinder={true}
          viewFinderBorderColor={"#eee"}
          viewFinderHeight={50}
          viewFinderShowLoadingIndicator={true}
        />
      </View>
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  barCodeView: {
    width: "100%",
    height: "50%",
    marginBottom: 40,
  },
  solutions: {
    fontSize: 20,
    marginLeft: 20,
    top: 0,
  },
  logo: {
    width: 200,
    height: 60,
    margin: 20,
  },
  camera: {
    width: "100%",
    height: "100%",
  },

  cameraHolder: {
    width: "100%",
    height: "50%",
    top: "10%",
  },
});
