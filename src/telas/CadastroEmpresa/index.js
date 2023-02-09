import { Image, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { TextInput } from "react-native-paper";
import main from "../../../assets/logo/preapp-main.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";

export default function CadastroEmpresa({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.main} source={main} />

      <KeyboardAvoidingView>
        <View>
          <Text style={styles.text}>
            Seu Cadastro está sendo analisado, entraremos em contato em breve Fique
            atento ao seu e-mail
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
