import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-web";
import { Button } from "react-native";

const Screen01 = ({ navigation }) => {
    const [name, setName] = useState("Khanh123");
    const [pass, setPass] = useState("");
    return (
        <View
            style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                padding: 20,
            }}
        >
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Username"
                style={{
                    padding: 16,
                    borderWidth: 1,
                    borderColor: "#000",
                    borderRadius: 4,
                    marginBottom: 10,
                }}
            />
            <TextInput
                value={pass}
                onChangeText={setPass}
                placeholder="Password"
                style={{
                    padding: 16,
                    borderWidth: 1,
                    borderColor: "#000",
                    borderRadius: 4,
                    marginBottom: 10,
                }}
                secureTextEntry={true}
            />
            <View>
                <Button
                    title="Login"
                    onPress={() => {
                      navigation.navigate({
                            name: "Screen02",
                            params: {
                                name,
                                pass,
                            },
                        });
                    }}
                />
            </View>
        </View>
    );
};

export default Screen01;

const styles = StyleSheet.create({});
