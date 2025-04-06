//src/screens/SignupScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

export default function SignupScreen() {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: ""
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSignup = () => {
    console.log("Dados cadastrados:", form);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Crie sua conta</Text>
        <Text style={styles.subtitle}>Preencha os campos abaixo para se cadastrar.</Text>

        <TextInput style={styles.input} placeholder="Nome" value={form.nome} onChangeText={(text) => handleChange("nome", text)} />
        <TextInput style={styles.input} placeholder="Sobrenome" value={form.sobrenome} onChangeText={(text) => handleChange("sobrenome", text)} />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={form.email} onChangeText={(text) => handleChange("email", text)} />
        <TextInput style={styles.input} placeholder="Telefone" keyboardType="phone-pad" value={form.telefone} onChangeText={(text) => handleChange("telefone", text)} />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={form.senha} onChangeText={(text) => handleChange("senha", text)} />
        <TextInput style={styles.input} placeholder="Confirmar Senha" secureTextEntry value={form.confirmarSenha} onChangeText={(text) => handleChange("confirmarSenha", text)} />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}> 
          <Text style={styles.link}>Voltar ao Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    width: "85%",
    backgroundColor: "#FFF",
    padding: 25,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3D6262",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#414141",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#FFF",
  },
  button: {
    backgroundColor: "#2082DE",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    fontSize: 14,
    textAlign: "center",
    color: "#2082DE",
    fontWeight: "bold",
  }
});
