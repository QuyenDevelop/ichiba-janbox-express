import { SCREENS } from "@configs";
import { useAppDispatch } from "@hooks";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { logout } from "@redux";
import React, { FunctionComponent, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { IRootState } from "src/redux/store";
import styles from "./styles";

export const InfoScreen: FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const userInfo = useSelector((state: IRootState) => state.user);
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState<string>(userInfo.name || "");
  const [age, setAge] = useState<string>(userInfo.age?.toString() || "");
  const [sex, setSex] = useState<string>(userInfo.sex || "");

  const updateInfo = () => {
    dispatch(updateInfo({ name: username, age: Number(age), sex: sex }));
    navigation.goBack();
  };

  const handeLogout = () => {
    dispatch(logout());
    navigation.navigate(SCREENS.AUTH_STACK, {
      screen: SCREENS.LOGIN,
    });
  };

  return (
    <View style={styles.container}>
      <Text>User info</Text>
      <View style={styles.infoRow}>
        <Text>Name: </Text>
        <TextInput
          placeholder="Enter your name"
          defaultValue={username}
          onChangeText={setUsername}
          style={styles.input}
        />
      </View>
      <View style={styles.infoRow}>
        <Text>Age: </Text>
        <TextInput
          placeholder="Enter your age"
          defaultValue={age}
          onChangeText={setAge}
          style={styles.input}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.infoRow}>
        <Text>Sex: </Text>
        <TextInput
          placeholder="Enter your sex"
          defaultValue={sex}
          onChangeText={setSex}
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.applyBtn} onPress={updateInfo}>
        <Text style={styles.applyBtnText}>Apply</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.applyBtn} onPress={handeLogout}>
        <Text style={styles.applyBtnText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
