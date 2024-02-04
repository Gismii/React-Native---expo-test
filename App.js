import Slider from "@react-native-community/slider";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>By Gismi Developer </Text>
      <Image
        source={require("./src/assets/safeKey.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>20 caracteres</Text>

      <View style={styles.area}>

        <Slider
         style={{height: 50}}
         minimumValue={6}
         maximumValue={20}
         maximumTrackTintColor="#ff0000"
         
         
        />

      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

    </View>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    marginBottom: 60,
  },
  area: {
    marginTop:14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: 6,
  },
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 18, 
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  }

})