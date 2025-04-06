// src/HomeUser.js
import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, StatusBar, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

export default function HomeUser() {
  const navigation = useNavigation();

  const destaques = [
    { id: 1, nome: "Patins", img: require("../../assets/patins.jpg") },
    { id: 2, nome: "Bicicleta", img: require("../../assets/bike.jpg") },
  ];

  const novosItens = [
    { id: 1, nome: "Nintendo", img: require("../../assets/nintendo.jpg") },
    { id: 2, nome: "Urso de Pelúcia", img: require("../../assets/pelucia.jpg") },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Banner */}
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerText}>Encontre novos lares para seus itens</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AddItem")}>
            <Text style={styles.buttonText}>Vender agora</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkText}>Descubra como funciona</Text>
          </TouchableOpacity>
        </View>

      
        {/* Categorias */}
        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>Categorias</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesList}>
            {["Roupas", "Móveis", "Eletrônicos", "Acessórios"].map((categoria, index) => (
              <View key={index} style={styles.category}>
                <Text style={styles.categoryText}>{categoria}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Destaques */}
        <View style={styles.productsContainer}>
          <Text style={styles.sectionTitle}>Destaques</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productsList}>
            {destaques.map((item) => (
              <View key={item.id} style={styles.productCard}>
                <Image source={item.img} style={styles.productImage} />
                <Text style={styles.productText}>{item.nome}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Novos Itens */}
        <View style={styles.productsContainer}>
          <Text style={styles.sectionTitle}>Recentemente Adicionados</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productsList}>
            {novosItens.map((item) => (
              <View key={item.id} style={styles.productCard}>
                <Image source={item.img} style={styles.productImage} />
                <Text style={styles.productText}>{item.nome}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Depoimentos */}
        <View style={styles.testimonialContainer}>
          <Text style={styles.sectionTitle}>O que nossos usuários dizem</Text>
          <Text style={styles.testimonialText}>
            "O ReUse! me ajudou a dar um novo lar para coisas que não usava mais. Super recomendo!" - Ana Souza
          </Text>
        </View>

        {/* Rodapé */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 ReUse! | Todos os direitos reservados</Text>
        </View>
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
    paddingBottom: 20,
  },
  bannerContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#C3D6C7",
    borderRadius: 10,
    marginVertical: 10,
    width: "90%",
  },
  bannerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3D6262",
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
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
  linkText: {
    color: "#2082DE",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  categoriesContainer: {
    paddingVertical: 20,
    width: "90%",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3D6262",
    marginBottom: 10,
  },
  categoriesList: {
    flexDirection: "row",
    gap: 10,
  },
  category: {
    backgroundColor: "#E8BFAB",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#414141",
  },
  productsContainer: {
    paddingVertical: 20,
    width: "90%",
  },
  productsList: {
    flexDirection: "row",
    gap: 10,
  },
  productCard: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    elevation: 2,
    width: 150,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#414141",
    marginTop: 5,
  },
  testimonialContainer: {
    backgroundColor: "#E8E8E8",
    padding: 20,
    width: "90%",
    borderRadius: 8,
  },
  testimonialText: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#3D6262",
    textAlign: "center",
  },
  footer: {
    padding: 20,
    backgroundColor: "#414141",
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    color: "#FFF",
    fontSize: 14,
  },
});
