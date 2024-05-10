import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { RecyclerViewList } from "react-native-recyclerview-list";

const data = Array.from({ length: 100 }, (_, index) => ({
    id: `item-${index}`,
    title: `Item ${index + 1}`,
}));

interface DataPoint {
    id: string;
    title: string;
}

export default function App() {
    const renderItem = ({ item }: { item: DataPoint }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <RecyclerViewList
                style={styles.list}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item: DataPoint) => item.id} // Explicitly define the type of 'item'
                initialNumToRender={10}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    list: {
        width: "100%", // Make list full width
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 16, // Adjust font size for better readability
    },
});
