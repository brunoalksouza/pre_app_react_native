import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
  },

  header: {
    width: "100%",
    height: 120,
    backgroundColor: "#013376",
    alignItems: "center",
  },

  user: {
    borderColor: "white",
    borderRadius: 100,
    borderWidth: 4,

    marginTop: 60,
    width: 120,
    height: 120,
  },

  forms: {
    marginTop: 90,
    alignItems: "flex-start",
  },

  input: {
    height: 22,
    width: 300,
    padding: 8,
    marginBottom: 18,
  },

  textInput: {
    fontSize: 17,
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

  buttonText: {
    fontSize: 20,
    color: "white",
  },

  // modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  button: {
    color: "white",
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 999,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#013376",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default styles;
