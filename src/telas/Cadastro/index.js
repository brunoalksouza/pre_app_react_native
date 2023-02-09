import { Image, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import main from "../../../assets/logo/preapp-main.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-paper";

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.main} source={main} />

      {/* <Text style={styles.title}>
        Crie uma conta para ter acesso ao PréApp!
      </Text> */}

      <KeyboardAvoidingView>
        <View style={styles.forms}>
          <Text style={styles.textInput}>Coloque o seu endereço de e-mail</Text>
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

          <Text style={styles.textInput}>Crie uma nova senha</Text>
          <TextInput
            activeOutlineColor="#013376"
            mode="outlined"
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
          />

          <Text style={styles.textInput}>Confirme sua senha</Text>
          <TextInput
            activeOutlineColor="#013376"
            mode="outlined"
            style={styles.input}
            placeholder="Confirmar Senha"
            secureTextEntry={true}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("User")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
