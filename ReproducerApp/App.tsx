/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, View, Text } from 'react-native';
import { FlashList } from "@shopify/flash-list";

const DATA = [
  {
    title: "A Section",
    type: "section",
  },
  {
    title: "1 Item",
    type: "item",
  },
  {
    title: "2 Item",
    type: "item",
  },
  {
    title: "B Section",
    type: "section",
  },
  {
    title: "3 Item",
    type: "item",
  },
  {
    title: "4 Item",
    type: "item",
  },
  {
    title: "5 Item",
    type: "item",
  },
  {
    title: "C Section",
    type: "section",
  },
  {
    title: "6 Item",
    type: "item",
  },
  {
    title: "7 Item",
    type: "item",
  },
  {
    title: "8 Item",
    type: "item",
  },
];

const stickyHeaderIndices = DATA.reduce((acc, item, i) => item.type === "section" ? [...acc, i] : acc, []);

const renderItem = ({ item }) => {
  switch (item.type) {
    case "item":
      return (
        <View style={styles.cell}>
          <Text>{item.title}</Text>
        </View>
      )
    case "section":
      return (
        <View style={styles.section}>
          <Text>{item.title}</Text>
        </View>
      )
    default:
      return null
  }
}

function App() {
  return (
    <View style={styles.container}>
      <FlashList
        data={DATA}
        renderItem={renderItem}
        stickyHeaderIndices={stickyHeaderIndices}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  },
  list: {
    flex: 1,
    backgroundColor: "blue"
  },
  section: {
    height: 20,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center"
  },
  cell: {
    height: 40,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center"
  },
});

export default App;
