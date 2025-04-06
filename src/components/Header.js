
// src/components/Header.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const navigation = useNavigation();
  const route = useRoute();

  const isLoginScreen = route.name === "Login";
  const isUserLoggedScreen = route.name === "HomeUser" || route.name === "AddItem";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>ReUse!</Text>

        {/* Header para LoginScreen e HomeScreen */}
        {!isUserLoggedScreen && (
          <TouchableOpacity 
            onPress={() => navigation.navigate(isLoginScreen ? "Home" : "Login")} 
            style={styles.button}
          >
            <Text style={styles.buttonText}>{isLoginScreen ? "Voltar" : "Entrar"}</Text>
          </TouchableOpacity>
        )}

        {/* Header para HomeUser.js com ícones */}
        {isUserLoggedScreen && (
          <View style={styles.iconsContainer}>
            <Ionicons name="notifications-outline" size={24} color="#F6F6F6" style={styles.icon} />
            <Ionicons name="chatbubble-outline" size={24} color="#F6F6F6" style={styles.icon} />
            <Ionicons name="cart-outline" size={24} color="#F6F6F6" style={styles.icon} />
            <Ionicons name="person-circle-outline" size={24} color="#F6F6F6" style={styles.icon} />
          </View>
        )}
      </View>

      {/* Barra de pesquisa apenas para HomeUser */}
      {isUserLoggedScreen && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar produtos..."
            placeholderTextColor="#D1D1D1"
          />
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter" size={24} color="#F6F6F6" />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#3D6262",
    zIndex: 1000,
  },
  header: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "100%",   
  },  
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#F6F6F6",
  },
  button: {
    backgroundColor: "#2082DE",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 15,
  },
  searchContainer: {   
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#F6F6F6",
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  filterButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: "#2082DE",
    borderRadius: 5,
  },
});



// // // src/components/Header.js
// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";

// export default function Header() {
//   const navigation = useNavigation();
//   const route = useRoute();

//   const isLoginScreen = route.name === "Login";

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.logo}>ReUse!</Text>
//         <TouchableOpacity 
//           onPress={() => navigation.navigate(isLoginScreen ? "Home" : "Login")} 
//           style={styles.button}
//         >
//           <Text style={styles.buttonText}>{isLoginScreen ? "Voltar" : "Entrar"}</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "#3D6262",
//     zIndex: 1000, 
//   },
//   header: {
//     height: 70, 
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//     width: "100%",
//   },
//   logo: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#F6F6F6",
//   },
//   button: {
//     backgroundColor: "#2082DE",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: "#FFF",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });


// // src/components/Header.js - icons

// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { Ionicons } from "@expo/vector-icons";

// export default function Header() {
//   const navigation = useNavigation();
//   const route = useRoute();

//   const isLoginScreen = route.name === "Login";
//   const isHomeScreen = route.name === "Home";

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.logo}>ReUse!</Text>
//         {isLoginScreen ? (
//           <TouchableOpacity 
//             onPress={() => navigation.navigate("Home")} 
//             style={styles.button}
//           >
//             <Text style={styles.buttonText}>Voltar</Text>
//           </TouchableOpacity>
//         ) : isHomeScreen ? (
//           <View style={styles.iconsContainer}>
//             <Ionicons name="notifications-outline" size={24} color="#F6F6F6" style={styles.icon} />
//             <Ionicons name="chatbubble-outline" size={24} color="#F6F6F6" style={styles.icon} />
//             <Ionicons name="cart-outline" size={24} color="#F6F6F6" style={styles.icon} />
//             <Ionicons name="person-circle-outline" size={24} color="#F6F6F6" style={styles.icon} />
//           </View>
//         ) : (
//           <TouchableOpacity 
//             onPress={() => navigation.navigate("Login")} 
//             style={styles.button}
//           >
//             <Text style={styles.buttonText}>Entrar</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//       {isHomeScreen && (
//         <View style={styles.searchContainer}>
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Buscar produtos..."
//             placeholderTextColor="#D1D1D1"
//           />
//           <TouchableOpacity style={styles.filterButton}>
//             <Ionicons name="filter" size={24} color="#F6F6F6" />
//           </TouchableOpacity>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "#3D6262",
//     zIndex: 1000,
//   },
//   header: {
//     height: 70,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//     width: "100%",
//   },
//   logo: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#F6F6F6",
//   },
//   button: {
//     backgroundColor: "#2082DE",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: "#FFF",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   iconsContainer: {
//     flexDirection: "row",
//   },
//   icon: {
//     marginLeft: 15,
//   },
//   searchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     backgroundColor: "#F6F6F6",
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//     backgroundColor: "#FFF",
//     borderRadius: 5,
//     paddingHorizontal: 10,
//   },
//   filterButton: {
//     marginLeft: 10,
//     padding: 10,
//     backgroundColor: "#2082DE",
//     borderRadius: 5,
//   },
// });




// // src/components/Header2.js

// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { Ionicons } from "@expo/vector-icons";

// export default function Header() {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const isLoginScreen = route.name === "Login";
//   const isHomeScreen = route.name === "Home";
  
//   // Simulação de autenticação (deve ser substituído pelo estado real do usuário)
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.logo}>ReUse!</Text>
//         {isLoginScreen || !isAuthenticated ? (
//           <TouchableOpacity 
//             onPress={() => navigation.navigate("Login")} 
//             style={styles.button}
//           >
//             <Text style={styles.buttonText}>Entrar</Text>
//           </TouchableOpacity>
//         ) : (
//           <View style={styles.iconsContainer}>
//             <Ionicons name="notifications-outline" size={24} color="#F6F6F6" style={styles.icon} />
//             <Ionicons name="chatbubble-outline" size={24} color="#F6F6F6" style={styles.icon} />
//             <Ionicons name="cart-outline" size={24} color="#F6F6F6" style={styles.icon} />
//             <Ionicons name="person-circle-outline" size={24} color="#F6F6F6" style={styles.icon} />
//           </View>
//         )}
//       </View>
//       {isHomeScreen && isAuthenticated && (
//         <View style={styles.searchContainer}>
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Buscar produtos..."
//             placeholderTextColor="#D1D1D1"
//           />
//           <TouchableOpacity style={styles.filterButton}>
//             <Ionicons name="filter" size={24} color="#F6F6F6" />
//           </TouchableOpacity>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "#3D6262",
//     zIndex: 1000,
//   },
//   header: {
//     height: 70,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//     width: "100%",
//   },
//   logo: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#F6F6F6",
//   },
//   button: {
//     backgroundColor: "#2082DE",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: "#FFF",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   iconsContainer: {
//     flexDirection: "row",
//   },
//   icon: {
//     marginLeft: 15,
//   },
//   searchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     backgroundColor: "#F6F6F6",
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//     backgroundColor: "#FFF",
//     borderRadius: 5,
//     paddingHorizontal: 10,
//   },
//   filterButton: {
//     marginLeft: 10,
//     padding: 10,
//     backgroundColor: "#2082DE",
//     borderRadius: 5,
//   },
// });

