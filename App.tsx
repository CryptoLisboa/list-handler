import React, { useState } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { StatusBar } from "expo-status-bar";

// Data creation
const data = Array.from({ length: 100 }, (_, index) => ({
    id: `item-${index}`,
    title: `Item ${index + 1}`,
}));

interface Item {
    id: string;
    title: string;
}

// List Item Component
const ListItem = ({
    index,
    height,
    setHeight,
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

// List Component
const List = () => {
    const [height, setHeight] = useState(100);

    const renderItem = ({ item }: { item: Item }) => (
        <ListItem index={item.title} height={height} setHeight={setHeight} />
    );

    return <FlashList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} estimatedItemSize={150} />;
};

// App Component
export default function App() {
    return (
        <View style={{ height: Dimensions.get("window").height, width: Dimensions.get("window").width }}>
            <List />
            <StatusBar style="auto" />;
        </View>
    );
}
