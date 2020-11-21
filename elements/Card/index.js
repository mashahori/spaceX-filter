import { SmallText } from 'elements';
import * as S from './styles';

const Card = ({ data }) => {
  const { image, title, text } = data;
  return (
    <>
      <S.Picture src={image} alt={title} />
      <S.Title>{title}</S.Title>
      <SmallText>{text}</SmallText>
    </>
  );
};

export default Card;
