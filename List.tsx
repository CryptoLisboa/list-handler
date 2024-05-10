import React, { useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { ListItem } from "./ListItem";

// Data creation
const data = Array.from({ length: 100 }, (_, index) => ({
    id: `item-${index}`,
    title: `Item ${index + 1}`,
}));

interface Item {
    id: string;
    title: string;
}

// List Component
export const List = () => {
    const [height, setHeight] = useState(100);

    const renderItem = ({ item }: { item: Item }) => (
        <ListItem index={item.title} height={height} setHeight={setHeight} />
    );

    return <FlashList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} estimatedItemSize={150} />;
};
