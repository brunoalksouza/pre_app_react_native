import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
  },

  main: {
    marginTop: 90,
    marginBottom: 80,
    width: "70%",
    height: 70,
    alignItems: "center",
  },

  forms: {
    alignItems: "flex-start",
  },

  input: {
    height: 25,
    width: 260,
    padding: 10,
    marginBottom: 18,
  },

  textInput: {
    fontSize: 18,
  },

  button: {
    width: "100%",
    height: 50,
    borderRadius: 18,
    backgroundColor: "#013376",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  textSenha: {
    marginTop: -15,
    fontSize: 11,
  },

  buttonText: {
    fontSize: 20,
    color: "white",
  },  
});

export default styles;
