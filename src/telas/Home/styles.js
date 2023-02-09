import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'space-between',
  },

  main: {
    marginTop: 120,
    marginBottom: 80,
    width: "70%",
    height: 70,
  },

  bemVindo: {
    fontWeight: "bold",
    fontSize: 40,
  },

  button: {
    width: 300,
    height: 50,
    borderRadius: 18,
    backgroundColor: "#013376",
    alignItems: "center",
    justifyContent:"center",
    margin: 10,
  },

  buttonText: {
    fontSize: 20,
    color: "white",
  },

  footer: {
    width: "100%",
    height: 300,
  },
});

export default styles