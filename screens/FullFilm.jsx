import React from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Loading } from '../components/Loading';

const FilmImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const FilmView = styled.View`
  background-color: #374151;
  height: 100%;
`;

const FilmText = styled.Text`
  color: #fff;
  font-size: 18px;
  line-height: 24px;
`;

export const FullFilmscreen = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState();
  const { id, title } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title,
    });
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=1b0a1eb62852f6c43141292786597248`)
      .then(({ data }) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Помилка', 'Не вдалось отримати фільм');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Loading />
      </View>
    );
  }

  return (
    <FilmView style={{ padding: 20 }}>
      <FilmImage source={{ uri: `https://image.tmdb.org/t/p/w500/${data.backdrop_path}` }} />
      <FilmText>Назва: {data.title}</FilmText>
      <FilmText>Дата виходу: {data.release_date}</FilmText>
      <FilmText>Оцінка: {data.vote_average}</FilmText>
      <FilmText>Опис: {data.overview}</FilmText>
    </FilmView>
  );
};
