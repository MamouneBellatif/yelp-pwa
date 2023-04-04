// screens/ResultsScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image,TouchableOpacity  } from 'react-native';
const ResultsScreen = ({ route, navigation }) => {
  const { results } = route.params;

 const renderItem = ({ item: restaurant }) => (
       <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails', { restaurantId: restaurant.id })}>

    <View style={styles.restaurantContainer}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <View style={styles.restaurantInfo}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text>{restaurant.price}</Text>
        <Text>{restaurant.categories.map((cat) => cat.title).join(', ')}</Text>
        <Text>{restaurant.location.address1}</Text>
      </View>
    </View>
      
        </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={(restaurant) => restaurant.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  restaurantContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  restaurantInfo: {
    marginLeft: 10,
    justifyContent: 'space-around',
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default ResultsScreen;
