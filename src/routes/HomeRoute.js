import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../telas/Home";
import Login from "../telas/Login";
import Cadastro from "../telas/Cadastro"
import Empresa from "../telas/Empresa";
import User from "../telas/User";
import CadastroEmpresa from "../telas/CadastroEmpresa";

const Stack = createNativeStackNavigator();

export default function HomeRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTransparent: true, title: "" }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Empresa" component={Empresa} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="CadastroEmpresa" component={CadastroEmpresa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
