// screens/SearchScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import YelpService from "../services/YelpService";
import Toast from 'react-native-toast-message';

    
const SearchScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState('');
  const [location, setLocation] = useState('');
  const [erreur, setErreur] = useState(false);
  const handleSearch = async () => {
    console.log("resto", restaurant);
    try {
      const response = await YelpService.get('/search', {
        params: {
          term: restaurant,
          location: location,
        },
      });
      
      navigation.navigate('Results', { results: response.data.businesses });
    } catch (error) {
      setErreur(true);
        Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Aucun résultat, veuillez réesseyer    ',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
      console.error('Error fetching data from Yelp API:', error);
    }
  };



  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={restaurant}
        onChangeText={setRestaurant}
        placeholder="Nom du restaurant"
      />
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder="Ville ou code postal"
      />
      <Button title="Valider" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default SearchScreen;
