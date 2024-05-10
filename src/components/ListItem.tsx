import React from "react";
import { Pressable, Text } from "react-native";

// List Item Component
export const ListItem = ({
    index, height, setHeight,
}: {
    index: string;
    height: number;
    setHeight: React.Dispatch<React.SetStateAction<number>>;
}) => {
    return (
        <Pressable
            onPress={() => setHeight(height === 100 ? 200 : 100)}
            style={{
                height,
                backgroundColor: "cyan",
                borderWidth: 2,
                borderColor: "white",
                alignItems: "center",
                justifyContent: "space-around",
            }}
        >
            <Text>
                Item: {index}, size: {height}
            </Text>
        </Pressable>
    );
};
