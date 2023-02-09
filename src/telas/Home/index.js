import { Image, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import main from "../../../assets/logo/preapp-main.png";
import footer from "../../../assets/logo/preapp-footer.png";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <>
        <Image style={styles.main} source={main} />
        {/* <Text style={styles.bemVindo}>BEM VINDO</Text> */}
      </>

      <>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Cadastro")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Empresa")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Para Empresas</Text>
        </TouchableOpacity>
      </>

      <Image style={styles.footer} source={footer} />
    </SafeAreaView>
  );
}
