import React, { useCallback, useState } from "react";
import {
  Image,
  NativeModules,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { DemoButton } from "../components/DemoButton";
import styles from "../styles";
import {
  Callback,
  CameraOptions,
  ImageLibraryOptions,
  ImagePickerResponse,
} from "../types";
export * from "../types";

const includeExtra = true;
interface Action {
  title: string;
  type: "capture" | "library";
  options: CameraOptions | ImageLibraryOptions;
}

const actions: Action[] = [
  {
    title: "More Photos",
    type: "library",
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 0,
      mediaType: "photo",
      includeBase64: false,
      includeExtra,
    },
  },
];
export const UploadPhoto = () => {
  const DEFAULT_OPTIONS: ImageLibraryOptions & CameraOptions = {
    mediaType: "photo",
    videoQuality: "high",
    quality: 1,
    maxWidth: 0,
    maxHeight: 0,
    includeBase64: false,
    cameraType: "back",
    selectionLimit: 0,
    saveToPhotos: false,
    durationLimit: 0,
    includeExtra: false,
  };

  const launchCamera = (
    options: CameraOptions,
    callback?: Callback,
  ): Promise<ImagePickerResponse> => {
    return new Promise(resolve => {
      NativeModules.ImagePickerManager.launchCamera(
        { ...DEFAULT_OPTIONS, ...options },
        (result: ImagePickerResponse) => {
          if (callback) {
            callback(result);
          }
          resolve(result);
        },
      );
    });
  };

  const launchImageLibrary = (
    options: ImageLibraryOptions,
    callback?: Callback,
  ): Promise<ImagePickerResponse> => {
    return new Promise(resolve => {
      NativeModules.ImagePickerManager.launchImageLibrary(
        { ...DEFAULT_OPTIONS, ...options },
        (result: ImagePickerResponse) => {
          if (callback) {
            callback(result);
          }
          resolve(result);
        },
      );
    });
  };
  const onButtonPress = useCallback((type, options) => {
    if (type === "capture") {
      console.log("test1", options, setResponse);
      launchCamera(options, setResponse);
    } else {
      launchImageLibrary(options, setResponse);
    }
  }, []);
  const [response, setResponse] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [response2, setResponse2] = useState<any>([]);

  const handlePress = (url: string) => {
    console.log(`removing ${url}`);
    let a = response.assets.filter((item: { uri: any }) => item.uri != url);
    response.assets = a;
    setResponse2(a);
  };
  return (
    <>
      <ScrollView horizontal style={styles.containerImg}>
        {response?.assets &&
          response?.assets.map(({ uri }: { uri: string }) => (
            <View key={uri} style={styles.imgSubContainer}>
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={styles.imgUpload}
                source={{ uri: uri }}
              />
              <TouchableOpacity
                key={uri}
                onPress={() => handlePress(uri)}
                style={styles.closeImg}
              >
                <Text style={styles.txtClose}>x</Text>
              </TouchableOpacity>
            </View>
          ))}
      </ScrollView>
      {actions.map(({ title, type, options }) => {
        return (
          <DemoButton key={title} onPress={() => onButtonPress(type, options)}>
            {title}
          </DemoButton>
        );
      })}
    </>
  );
};
