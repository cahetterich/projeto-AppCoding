// //src/screens/AddItem.js
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, StatusBar, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Header from "../components/Header";

export default function  AddItem() {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);

  // Solicitar permissão para acessar a galeria ao carregar a tela
  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted" && cameraStatus.status === "granted");
    })();
  }, []);
  

  const pickImage = async () => {
    if (hasGalleryPermission === false) {
      Alert.alert("Permissão necessária", "Por favor, conceda acesso à galeria para escolher uma imagem.");
      return;
    }

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Erro ao escolher imagem:", error);
      Alert.alert("Erro", "Não foi possível selecionar a imagem.");
    }
  };

  const takePhoto = async () => {
    if (hasGalleryPermission === false) {
      Alert.alert("Permissão necessária", "Por favor, conceda acesso à câmera para tirar uma foto.");
      return;
    }
  
    try {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled && result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Erro ao tirar foto:", error);
      Alert.alert("Erro", "Não foi possível tirar a foto.");
    }
  };

  const handleSubmit = () => {
    if (!itemName.trim() || !description.trim() || !price.trim() || !image) {
      Alert.alert("Campos obrigatórios", "Preencha todos os campos antes de publicar o item.");
      return;
    }
    // Aqui você pode enviar os dados para o backend ou salvar localmente
    Alert.alert("Sucesso", "Item publicado com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Vender um Item</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome do Item"
          value={itemName}
          onChangeText={setItemName}
        />

        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <TextInput
          style={styles.input}
          placeholder="Preço"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />

        <View style={styles.imageActions}>
          <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
            <Text style={styles.buttonText}>Escolher da Galeria</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageButton} onPress={takePhoto}>
            <Text style={styles.buttonText}>Tirar Foto</Text>
          </TouchableOpacity>
        </View>

        {image && <Image source={{ uri: image }} style={styles.imagePreview} />}

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Publicar Item</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    paddingTop: StatusBar.currentHeight || 150,
  },
  scrollContainer: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3D6262",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#D1D1D1",
  },
  imageButton: {
    backgroundColor: "#2082DE",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  imagePreview: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: "#3D6262",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  imageActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 10,
    gap: 10,
  },
  imageButton: {
    flex: 1,
    backgroundColor: "#2082DE",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
});
