import { Image, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { TextInput } from "react-native-paper";
import main from "../../../assets/logo/preapp-main.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";

export default function Empresa({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.main} source={main} />

      <KeyboardAvoidingView>
        <View style={styles.forms}>
          <TextInput
            activeOutlineColor="#013376"
            mode="outlined"
            style={styles.input}
            placeholder="E-mail"
            autoCapitalize="none"
            inputmode="email"
            keyBoar
            email-address={true}
          />

          <TextInput
            activeOutlineColor="#013376"
            mode="outlined"
            style={styles.input}
            placeholder="CNPJ"
            secureTextEntry={true}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("CadastroEmpresa")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Enviar Solicitação</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
