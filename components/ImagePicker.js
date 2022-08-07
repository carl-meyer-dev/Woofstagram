import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "react-native-vector-icons/Ionicons";

const WoofImagePicker = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const clearImage = () => {
    setImage(null);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={pickImage}>
      {!image && (
        <>
          <Ionicons name="image-outline" size={32}></Ionicons>
          <Text>Pick an image</Text>
        </>
      )}

      {image && (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <Button title="Clear image" onPress={clearImage}></Button>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
});

export default WoofImagePicker;
