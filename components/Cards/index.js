import { Advert } from 'components';
import { List } from './styles';

const Cards = props => {
  const { data, type } = props;
  return (
    <section>
      <List type={type}>
        {data.map((el, i) => (
          <li key={i}>
            <Advert data={el} />
          </li>
        ))}
      </List>
    </section>
  );
};

export default Cards;
