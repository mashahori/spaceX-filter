import { useState } from 'react';
import SearchIcon from 'public/icons/search.svg';
import { Field, Form, Submit } from './styles';

const Search = props => {
  const { placeholder, handleSearch, initialValue, isMain = false } = props;
  const [value, setValue] = useState(initialValue || '');

  return (
    <Form
      isMain={isMain}
      onSubmit={evt => {
        evt.preventDefault();
        handleSearch(value);
      }}
    >
      <Field
        name="search"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        isMain={isMain}
      />
      <Submit
        type="submit"
        aria-label="Поиск"
        disabled={!value}
        isMain={isMain}
      >
        <SearchIcon />
      </Submit>
    </Form>
  );
};

export default Search;
