import styled from 'styled-components/native';

const FilmView = styled.View`
  background-color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-bottom-style: solid;
`;

const FilmImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 20px;
`;

const FilmTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;


const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0, 50) + '...';
  }

  return str;
};

export const Film = ({ title, imageUrl }) => {
  return (
    <FilmView>
      <FilmImage source={{ uri: imageUrl }} />
      <FilmTitle>{truncateTitle(title)}</FilmTitle>
    </FilmView>
  );
};
