import * as S from './styles';

const Icon = ({ name, className, white }) => (
  <S.Styled className={className} white={white} name={name} />
);

export default Icon;
