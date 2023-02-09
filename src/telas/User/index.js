import React, { useState } from "react";
import { Image, ScrollView, View, Text, Modal, Pressable, TouchableOpacity } from "react-native";
import styles from "./styles";
import user from "../../../assets/logo/user.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";

export default function User() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => setModalVisible(true)}>
            <Image style={styles.user} source={user} />
          </Pressable>

          <View style={styles.centeredView}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Editar foto do perfil</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>X</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        </View>

        <View style={styles.forms}>
          <Text style={styles.textInput}>Nome</Text>
          <TextInput
            activeOutlineColor="#013376"
            mode="outlined"
            style={styles.input}
            placeholder="Nome"
          />
          <Text style={styles.textInput}>E-mail</Text>
          <TextInput
            activeOutlineColor="#013376"
            mode="outlined"
            style={styles.input}
            placeholder="E-mail"
          />
          <Text style={styles.textInput}>Celular</Text>
          <TextInput
            activeOutlineColor="#013376"
            mode="outlined"
            style={styles.input}
            placeholder="Celular"
          />
          <Text style={styles.textInput}>CPF</Text>
          <TextInput
            activeOutlineColor="#013376"
            mode="outlined"
            style={styles.input}
            placeholder="CPF"
          />
          <Text style={styles.textInput}>RG</Text>
          <TextInput
            activeOutlineColor="#013376"
            mode="outlined"
            style={styles.input}
            placeholder="RG"
          />
          <Text style={styles.textInput}>Cidade atual</Text>
          <TextInput
            activeOutlineColor="#013376"
            mode="outlined"
            style={styles.input}
            placeholder="Cidade atual"
          />
          <Text style={styles.textInput}>Nacionalidade</Text>
          <TextInput
            activeOutlineColor="#013376"
            mode="outlined"
            style={styles.input}
            placeholder="Nacionalidade"
          />
          <Text style={styles.textInput}>CEP</Text>
          <TextInput
            activeOutlineColor="#013376"
            mode="outlined"
            style={styles.input}
            placeholder="CEP"
          />
          <Text style={styles.textInput}>Endereço atual</Text>
          <TextInput
            activeOutlineColor="#013376"
            mode="outlined"
            style={styles.input}
            placeholder="Endereço atual"
          />
          <Text style={styles.textInput}>N°</Text>
          <TextInput
            activeOutlineColor="#013376"
            mode="outlined"
            style={styles.input}
            placeholder="N°"
          />
          <Text style={styles.textInput}>Complemento</Text>
          <TextInput
            activeOutlineColor="#013376"
            mode="outlined"
            style={styles.input}
            placeholder="Complemento"
          />
          <Text style={styles.textInput}>Bairro</Text>
          <TextInput
            activeOutlineColor="#013376"
            mode="outlined"
            style={styles.input}
            placeholder="Bairro"
          />
          <Text style={styles.textInput}>Cidade atual</Text>
          <TextInput
            activeOutlineColor="#013376"
            mode="outlined"
            style={styles.input}
            placeholder="Cidade atual"
          />

          {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Download em PDF</Text>
          </TouchableOpacity> */}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
