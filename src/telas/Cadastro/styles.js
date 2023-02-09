import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    marginTop: -25,
    paddingBottom: 50,
    fontSize: 20,
  },

  main: {
    marginTop: 90,
    marginBottom: 60,
    width: "70%",
    height: 70,
    alignItems: "center",
  },

  forms: {
    alignItems: "flex-start",
  },

  textInput: {
    fontSize: 18,
  },

  input: {
    height: 25,
    width: 260,
    marginBottom: 18,
    padding: 10,
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
