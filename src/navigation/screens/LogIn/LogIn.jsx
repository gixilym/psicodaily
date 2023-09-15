import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import LogInBtn from "./LogInBtn";

import { Entypo } from "@expo/vector-icons";

function LogIn() {
  const [mail, setMail] = useState(""),
    [password, setPassword] = useState(""),
    [shownPass, setShownPass] = useState(true);

  function selectEye() {
    return shownPass ? (
      <Entypo name="eye" size={24} color="#8f8f8f" />
    ) : (
      <Entypo name="eye-with-line" size={24} color="#8f8f8f" />
    );
  }

  return (
    <View style={container}>
      <Text style={logo}>PsicoDaily</Text>

      <View style={inputContainer}>
        <TextInput
          onChangeText={mail => setMail(mail)}
          style={input}
          placeholder="Ingrese su email"
          placeholderTextColor="#8f8f8f"
        />

        <View style={inputEyeContainer}>
          <TextInput
            onChangeText={password => setPassword(password)}
            style={input}
            placeholder="Contraseña"
            placeholderTextColor="#8f8f8f"
            secureTextEntry={shownPass}
          />

          <TouchableOpacity
            onPress={() => setShownPass(!shownPass)}
            style={eyeContainer}
          >
            {selectEye()}
          </TouchableOpacity>
        </View>
      </View>

      <LogInBtn />

      <Text style={forgotPassword}>¿Olvidaste tu Contraseña?</Text>

      <TouchableOpacity style={registerButton}>
        <Text style={registerButtonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LogIn;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000000",
      alignItems: "center",
      justifyContent: "center",
      rowGap: 15,
    },
    logo: {
      fontSize: 40,
      fontWeight: "bold",
      marginBottom: 40,
      color: "#d2d1d1",
    },
    inputContainer: {
      width: "80%",
      alignItems: "center",
      justifyContent: "center",
      rowGap: 15,
    },
    input: {
      backgroundColor: "#373737",
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 15,
      fontSize: 16,
      color: "#ffffff",
      width: "100%",
      height: 50,
    },
    loginButton: {
      backgroundColor: "#2196F3",
      borderRadius: 10,
      padding: 10,
    },
    loginButtonText: {
      color: "#ffffff",
      fontSize: 18,
      textAlign: "center",
    },
    forgotPassword: {
      color: "#2caba6",
      marginTop: 20,
      fontSize: 16,
      fontFamily: "poppinsMedium",
    },
    registerButton: {
      marginTop: 20,
    },
    registerButtonText: {
      color: "#2caba6",
      fontSize: 18,
      fontWeight: "bold",
      fontFamily: "poppinsBold",
      textTransform: "capitalize",
      fontStyle: "italic",
    },
    eyeContainer: {
      position: "absolute",
      width: 50,
      height: 50,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    inputEyeContainer: {
      position: "relative",
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    containerGoogle: {
      backgroundColor: "#373737",
      width: "80%",
      height: 50,
      borderRadius: 8,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "start",
      columnGap: 20,
      paddingHorizontal: 15,
    },
    googleSvg: {
      height: 30,
      borderRadius: 8,
      width: 45,
    },
    googleText: {
      color: "#ffffff",
      fontSize: 20,
      fontFamily: "poppinsLight",
      height: "100%",
      lineHeight: 55,
    },
  }),
  {
    container,
    logo,
    input,
    inputContainer,
    registerButton,
    registerButtonText,
    forgotPassword,
    eyeContainer,
    inputEyeContainer,
    sesionBtns,
    googleText,
    googleSvg,
    containerGoogle,
  } = styles;

// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithCredential,
// } from "firebase/auth";
// import { useNavigation } from "@react-navigation/native";
// import LogInBtn from "./LogInBtn";

// import * as Google from "expo-auth-session/providers/google";
// import * as WebBrowser from "expo-web-browser";
// import { auth } from "../../../../server/firebase";

// import Svg, { Path } from "react-native-svg";
// import { Entypo } from "@expo/vector-icons";

// WebBrowser.maybeCompleteAuthSession();

// function LogIn() {
//   const [mail, setMail] = useState(""),
//     [password, setPassword] = useState(""),
//     [shownPass, setShownPass] = useState(true),
//     [userInfo, setUserInfo] = useState();

//   const [request, response, promptAsync] = Google.useAuthRequest({
//     iosClientId:
//       "274767819936-mnu4to09sl8o7b0mdg7ckcs8v6aq4765.apps.googleusercontent.com",
//     androidClientId:
//       "274767819936-bbbh2u6gp295m5sdpv2675emi8kit18k.apps.googleusercontent.com",
//   });

//   const nav = useNavigation();

//   //!NO FUNCA EL LOGIN TIRA ERROR 404.

//   useEffect(() => {
//     if (response?.type === "success") {
//       const { id_token } = response.params,
//         credential = GoogleAuthProvider.credential(id_token);
//       signInWithCredential(auth, credential);
//     }
//   }, [response]);

//   function createAccount() {
//     createUserWithEmailAndPassword(auth, mail, password)
//       .then(userCredential =>
//         Alert.alert(
//           `Tu usuario: ${userCredential.user.email} fue creado con éxito.`
//         )
//       )
//       .catch(err => Alert.alert(err.message));
//   }

//   function signIn() {
//     signInWithEmailAndPassword(auth, mail, password)
//       .then(userCredential => {
//         Alert.alert(
//           `Inciaste sesión correctamente con: ${userCredential.user.email}`
//         );
//         nav.navigate("Home");
//       })
//       .catch(err => {
//         Alert.alert(err.message);
//         console.error(err.message);
//       });
//   }

//   function selectEye() {
//     return shownPass ? (
//       <Entypo name="eye" size={24} color="#8f8f8f" />
//     ) : (
//       <Entypo name="eye-with-line" size={24} color="#8f8f8f" />
//     );
//   }

//   return (
//     <View style={container}>
//       <Text style={logo}>PsicoDaily</Text>

//       <TouchableOpacity onPress={() => promptAsync()} style={containerGoogle}>
//         <View style={googleSvg}>
//           <Svg viewBox="0 0 256 262">
//             <Path
//               fill="#4285F4"
//               d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
//             ></Path>
//             <Path
//               fill="#34A853"
//               d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
//             ></Path>
//             <Path
//               fill="#FBBC05"
//               d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
//             ></Path>
//             <Path
//               fill="#EB4335"
//               d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
//             ></Path>
//           </Svg>
//         </View>
//         <Text style={googleText}>Inicia con Google</Text>
//       </TouchableOpacity>

//       <View style={inputContainer}>
//         <TextInput
//           onChangeText={mail => setMail(mail)}
//           style={input}
//           placeholder="Ingrese su email"
//           placeholderTextColor="#8f8f8f"
//         />

//         <View style={inputEyeContainer}>
//           <TextInput
//             onChangeText={password => setPassword(password)}
//             style={input}
//             placeholder="Contraseña"
//             placeholderTextColor="#8f8f8f"
//             secureTextEntry={shownPass}
//           />

//           <TouchableOpacity
//             onPress={() => setShownPass(!shownPass)}
//             style={eyeContainer}
//           >
//             {selectEye()}
//           </TouchableOpacity>
//         </View>
//       </View>

//       <LogInBtn signIn={signIn} />

//       <Text style={forgotPassword}>¿Olvidaste tu Contraseña?</Text>

//       <TouchableOpacity onPress={createAccount} style={registerButton}>
//         <Text style={registerButtonText}>Registrarse</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// export default LogIn;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: "#000000",
//       alignItems: "center",
//       justifyContent: "center",
//       rowGap: 15,
//     },
//     logo: {
//       fontSize: 40,
//       fontWeight: "bold",
//       marginBottom: 40,
//       color: "#d2d1d1",
//     },
//     inputContainer: {
//       width: "80%",
//       alignItems: "center",
//       justifyContent: "center",
//       rowGap: 15,
//     },
//     input: {
//       backgroundColor: "#373737",
//       borderRadius: 10,
//       paddingHorizontal: 20,
//       paddingVertical: 15,
//       fontSize: 16,
//       color: "#ffffff",
//       width: "100%",
//       height: 50,
//     },
//     loginButton: {
//       backgroundColor: "#2196F3",
//       borderRadius: 10,
//       padding: 10,
//     },
//     loginButtonText: {
//       color: "#ffffff",
//       fontSize: 18,
//       textAlign: "center",
//     },
//     forgotPassword: {
//       color: "#2caba6",
//       marginTop: 20,
//       fontSize: 16,
//       fontFamily: "poppinsMedium",
//     },
//     registerButton: {
//       marginTop: 20,
//     },
//     registerButtonText: {
//       color: "#2caba6",
//       fontSize: 18,
//       fontWeight: "bold",
//       fontFamily: "poppinsBold",
//       textTransform: "capitalize",
//       fontStyle: "italic",
//     },
//     eyeContainer: {
//       position: "absolute",
//       width: 50,
//       height: 50,
//       flexDirection: "row",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     inputEyeContainer: {
//       position: "relative",
//       flexDirection: "row",
//       justifyContent: "flex-end",
//     },
//     containerGoogle: {
//       backgroundColor: "#373737",
//       width: "80%",
//       height: 50,
//       borderRadius: 8,
//       flexDirection: "row",
//       alignItems: "center",
//       justifyContent: "start",
//       columnGap: 20,
//       paddingHorizontal: 15,
//     },
//     googleSvg: {
//       height: 30,
//       borderRadius: 8,
//       width: 45,
//     },
//     googleText: {
//       color: "#ffffff",
//       fontSize: 20,
//       fontFamily: "poppinsLight",
//       height: "100%",
//       lineHeight: 55,
//     },
//   }),
//   {
//     container,
//     logo,
//     input,
//     inputContainer,
//     registerButton,
//     registerButtonText,
//     forgotPassword,
//     eyeContainer,
//     inputEyeContainer,
//     sesionBtns,
//     googleText,
//     googleSvg,
//     containerGoogle,
//   } = styles;
