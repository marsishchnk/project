import axios from 'axios';
import React from 'react';
import {
  Alert,
  Text,
  FlatList,
  View,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { Film } from '../components/FIlm';

export const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState();

  const fetchFilms = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get('https://api.themoviedb.org/3/movie/popular?api_key=1b0a1eb62852f6c43141292786597248')
        .then(({ data }) => {
          setItems(data.results);
        })
        .catch((err) => {
          setItems([]);
          console.log(err);
          Alert.alert('Помилка', 'Не вдалось отримати фільми');
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 3000);
  };

  React.useEffect(fetchFilms, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
      <Text style={{ marginTop: 15 }}>Завантаження... Маруся УС-312</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchFilms} />}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('FullFilm', { id: item.id, title: item.title })}>
            <Film title={item.title} imageUrl={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
