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
  },

  forms: {
    alignItems: "center",
  },

  input: {
    height: 25,
    width: 260,
    margin: 10,
    padding: 10,
  },

  button: {
    width: "100%",
    height: 50,
    borderRadius: 18,
    backgroundColor: "#013376",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },

  textSenha: {
    fontSize: 11,
  },

  buttonText: {
    fontSize: 20,
    color: "white",
  },
});

export default styles;
