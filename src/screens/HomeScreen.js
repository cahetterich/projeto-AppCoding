// //src/screens/HomeScreen.js
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// // import Header from "../components/Header";

// export default function HomeScreen() {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       {/* Header fixo */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>ReUse!</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
//           <Text style={styles.loginButtonText}>Entrar</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Main Content */}
//       <View style={styles.main}>
//         <Text style={styles.title}>Bem-vindo ao ReUse!</Text>
//         <Text style={styles.subtitle}>
//           Um projeto inovador para reutilização consciente.
//         </Text>
        
//         <TouchableOpacity style={styles.highlightButton} onPress={() => navigation.navigate('Signup')}>
//           <Text style={styles.highlightButtonText}>Criar Conta</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Sections sobre o projeto */}
//       <View style={styles.section}><Text style={styles.sectionText}>Como funciona o ReUse?</Text></View>
//       <View style={styles.section}><Text style={styles.sectionText}>Benefícios da reutilização</Text></View>
//       <View style={styles.section}><Text style={styles.sectionText}>Casos de sucesso</Text></View>
//       <View style={styles.section}><Text style={styles.sectionText}>Nosso compromisso ambiental</Text></View>
//       <View style={styles.section}><Text style={styles.sectionText}>Junte-se a nós!</Text></View>

//       {/* Footer */}
//       <View style={styles.footer}>
//         <View style={styles.footerLinks}>
//           <Text style={styles.footerText}>Sobre | Contato | Termos</Text>
//         </View>
//         <View style={styles.footerSocials}>
//           <Text style={styles.footerText}>Redes Sociais</Text>
//         </View>
//         <View style={styles.footerSlogan}>
//           <Text style={styles.footerText}>ReUse! - Transformando o descarte em oportunidade.</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F6F6F6',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingTop: 40,
//   },
//   header: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     backgroundColor: '#3D6262',
//     position: 'absolute',
//     top: 0,
//   },
//   headerTitle: {
//     fontSize: 20,
//     color: '#FFF',
//     fontWeight: 'bold',
//   },
//   loginButton: {
//     backgroundColor: '#2082DE',
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//   },
//   loginButtonText: {
//     color: '#FFF',
//     fontSize: 16,
//   },
//   main: {
//     margin: 80,
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#3D6262',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 18,
//     color: '#414141',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   highlightButton: {
//     backgroundColor: '#2082DE',
//     paddingVertical: 14,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//     marginTop: 10,
//   },
//   highlightButtonText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   section: {
//     width: '90%',
//     padding: 20,
//     marginVertical: 10,
//     backgroundColor: '#D1D1D1',
//     borderRadius: 8,
//   },
//   sectionText: {
//     fontSize: 16,
//     color: '#414141',
//   },
//   footer: {
//     width: '100%',
//     backgroundColor: '#3D6262',
//     paddingVertical: 20,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   footerLinks: {
//     marginBottom: 10,
//   },
//   footerSocials: {
//     marginBottom: 10,
//   },
//   footerSlogan: {},
//   footerText: {
//     color: '#FFF',
//     fontSize: 14,
//     textAlign: 'center',
//   },
// });

// //src/screens/HomeScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.main}>
        <Text style={styles.title}>Bem-vindo ao ReUse!</Text>
        <Text style={styles.subtitle}>
          Um projeto inovador para reutilização consciente.
        </Text>
        
        <TouchableOpacity style={styles.highlightButton} onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.highlightButtonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}><Text style={styles.sectionText}>Como funciona o ReUse?</Text></View>
      <View style={styles.section}><Text style={styles.sectionText}>Benefícios da reutilização</Text></View>
      <View style={styles.section}><Text style={styles.sectionText}>Casos de sucesso</Text></View>
      <View style={styles.section}><Text style={styles.sectionText}>Nosso compromisso ambiental</Text></View>
      <View style={styles.section}><Text style={styles.sectionText}>Junte-se a nós!</Text></View>

      <View style={styles.footer}>
        <View style={styles.footerLinks}>
          <Text style={styles.footerText}>Sobre | Contato | Termos</Text>
        </View>
        <View style={styles.footerSocials}>
          <Text style={styles.footerText}>Redes Sociais</Text>
        </View>
        <View style={styles.footerSlogan}>
          <Text style={styles.footerText}>ReUse! - Transformando o descarte em oportunidade.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 80, // 🛠️ Ajuste para não sobrepor o Header
  },
  main: {
    width: "90%",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3D6262",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#414141",
    textAlign: "center",
    marginBottom: 20,
  },
  highlightButton: {
    backgroundColor: "#2082DE",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
  },
  highlightButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  section: {
    width: "90%",
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#D1D1D1",
    borderRadius: 8,
  },
  sectionText: {
    fontSize: 16,
    color: "#414141",
  },
  footer: {
    width: "100%",
    backgroundColor: "#3D6262",
    paddingVertical: 20,
    alignItems: "center",
    marginTop: 20,
  },
  footerLinks: {
    marginBottom: 10,
  },
  footerSocials: {
    marginBottom: 10,
  },
  footerSlogan: {},
  footerText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
  },
});
