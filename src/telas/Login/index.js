import { Image, Text, View, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { TextInput } from "react-native-paper";
import main from "../../../assets/logo/preapp-main.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";

export default function Empresa() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.main} source={main} />
      <ScrollView>
        <KeyboardAvoidingView>
          <View style={styles.forms}>
            <Text style={styles.textInput}>E-MAIL</Text>
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

            <Text style={styles.textInput}>SENHA</Text>
            <TextInput
              activeOutlineColor="#013376"
              mode="outlined"
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
            />
            <Text style={styles.textSenha}>Esqueci minha senha</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}
