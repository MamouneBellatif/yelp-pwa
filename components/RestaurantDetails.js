// screens/RestaurantDetailsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import YelpService from '../services/YelpService';

const RestaurantDetailsScreen = ({ route }) => {
  const { restaurantId } = route.params;

  const [restaurant, setRestaurant] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const response = await YelpService.get(`/${restaurantId}`);
        setRestaurant(response.data);
      } catch (error) {
        console.error('Error fetching restaurant details:', error);
      }
    };

    const fetchRestaurantReviews = async () => {
      try {
        const response = await YelpService.get(`/${restaurantId}/reviews`);
        setReviews(response.data.reviews);
      } catch (error) {
        console.error('Error fetching restaurant reviews:', error);
      }
    };

    fetchRestaurantDetails();
    fetchRestaurantReviews();
  }, [restaurantId]);

  if (!restaurant) {
    return <Text>Loading...</Text>;
  }

return (
<ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <View style={styles.restaurantDetails}>
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
        <Text>{restaurant.price} - {restaurant.categories.map((cat) => cat.title).join(', ')}</Text>
        <Text>{restaurant.location.address1}</Text>
        <Text>Telephone: {restaurant.display_phone}</Text>
        <Text>Note: {restaurant.rating} ({restaurant.review_count} avis)</Text>
      </View>
      <View style={styles.reviewsContainer}>
        <Text style={styles.reviewsTitle}>Avis:</Text>
        {reviews.map((review, index) => (
          <View key={index} style={styles.review}>
            <Text style={styles.reviewUser}>{review.user.name}:</Text>
            <Text>{review.text}</Text>
            <Text style={styles.reviewRating}>Rating: {review.rating}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 15,
  },
  restaurantDetails: {
    marginBottom: 20,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewsContainer: {},
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  review: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  reviewUser: {
    fontWeight: 'bold',
  },
  reviewRating: {
    fontStyle: 'italic',
  },
});

export default RestaurantDetailsScreen;
