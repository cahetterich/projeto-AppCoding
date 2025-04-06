// src/LoginScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../components/Header";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);

  useEffect(() => {
    loadStoredData();
  }, []);

  const loadStoredData = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem("userEmail");
      const storedPassword = await AsyncStorage.getItem("userPassword");
      const storedRemember = await AsyncStorage.getItem("rememberPassword");
      if (storedRemember === "true") {
        setEmail(storedEmail || "");
        setPassword(storedPassword || "");
        setRememberPassword(true);
      }
    } catch (error) {
      console.log("Erro ao carregar dados armazenados", error);
    }
  };

  const handleLogin = async () => {
    console.log("Email:", email);
    console.log("Senha:", password);
    try {
      if (rememberPassword) {
        await AsyncStorage.setItem("userEmail", email);
        await AsyncStorage.setItem("userPassword", password);
        await AsyncStorage.setItem("rememberPassword", "true");
      } else {
        await AsyncStorage.removeItem("userEmail");
        await AsyncStorage.removeItem("userPassword");
        await AsyncStorage.setItem("rememberPassword", "false");
      }
    } catch (error) {
      console.log("Erro ao armazenar dados", error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.subtitle}>Bem-vindo! Faça login para continuar.</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.rememberContainer}>
          <CheckBox value={rememberPassword} onValueChange={setRememberPassword} />
          <Text style={styles.rememberText}>Lembrar senha</Text>
        </View>


        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeUser")}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.socialLoginText}>Ou entre com sua rede social</Text>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Entrar com Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Entrar com Google</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.signupText}>Ainda não tem uma conta? <Text style={styles.signupLink} onPress={() => navigation.navigate("Signup")}>Cadastre-se</Text></Text>
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
    paddingTop: 80,
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
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  rememberText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#414141",
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
  forgotPassword: {
    textAlign: "center",
    color: "#2082DE",
    fontSize: 14,
    marginBottom: 10,
  },
  socialLoginText: {
    fontSize: 16,
    color: "#414141",
    textAlign: "center",
    marginVertical: 15,
  },
  socialButton: {
    backgroundColor: "#D1D1D1",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#414141",
  },
  signupText: {
    fontSize: 14,
    textAlign: "center",
    color: "#414141",
  },
  signupLink: {
    color: "#2082DE",
    fontWeight: "bold",
  },
});
