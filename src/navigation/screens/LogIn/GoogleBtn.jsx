import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
// import { auth } from "../../../../server/firebase";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Svg, { Path } from "react-native-svg";
// import * as WebBrowser from "expo-web-browser";
// import * as Google from "expo-auth-session/providers/google";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// WebBrowser.maybeCompleteAuthSession();

function GoogleBtn() {
  // const [userInfo, setUserInfo] = useState(null);

  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   iosClientId:
  //     "1052137670730-h0nec1jrv3vefc7v19htgampdq2c169p.apps.googleusercontent.com",
  //   androidClientId:
  //     "1052137670730-tn1ne8pij69bklv7lj3gdmbi1k4bm87t.apps.googleusercontent.com",
  //   webClientId:
  //     "1052137670730-942e4tktt96ujhr8mmlc8mhg9frsdr21.apps.googleusercontent.com",
  // });

  // useEffect(() => {
  //   handleSigInGoogle();
  // }, [response]);

  // async function handleSigInGoogle() {
  //   const user = await getLocalUser();
  //   if (!user) {
  //     if (response?.type === "success") {
  //       getUserInfo(response.authentication.accessToken);
  //     }
  //   } else {
  //     setUserInfo(user);
  //   }
  // }

  // async function getLocalUser() {
  //   const data = await AsyncStorage.getItem("@user");
  //   if (!data) return null;
  //   else return JSON.parse(data);
  // }

  // async function getUserInfo(token) {
  //   if (!token) return null;
  //   else {
  //     try {
  //       const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
  //         headers: { Autorization: "Bearer " + token },
  //       });

  //       const user = await res.JSON();
  //       await AsyncStorage.setItem("@user", JSON.stringify(user));
  //       setUserInfo(user);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  // }

  // async function logInWithGoogle() {
  //   const res = new GoogleAuthProvider();
  //   return await signInWithPopup(auth, res);
  // }

  return (
    <TouchableOpacity
      // onPress={() => {
      //   promptAsync();
      // }}
      onPress={() => Alert.alert("Comming soon..")}
      style={containerGoogle}
    >
      <View style={googleSvg}>
        <Svg viewBox="0 0 256 262">
          <Path
            fill="#4285F4"
            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
          />
          <Path
            fill="#34A853"
            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
          />
          <Path
            fill="#FBBC05"
            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
          />
          <Path
            fill="#EB4335"
            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
          />
        </Svg>
      </View>
      <Text style={googleText}>Inicia con Google</Text>
    </TouchableOpacity>
  );
}

export default GoogleBtn;

const styles = StyleSheet.create({
    containerGoogle: {
      backgroundColor: "rgba(55, 55, 55, 0.5)",
      borderWidth: 1,
      borderColor: "rgb(55, 55, 55)",
      width: "100%",
      height: 50,
      borderRadius: 18,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      columnGap: 15,
      paddingHorizontal: 18,
    },
    googleSvg: {
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      width: 30,
      alignItems: "center",
    },
    googleText: {
      color: "#9d9d9d",
      fontSize: 20,
      height: "auto",
    },
  }),
  { googleText, googleSvg, containerGoogle } = styles;
