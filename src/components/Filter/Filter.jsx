import { FormInput, FormLabel } from '../UI/Form/Form.styled';
import { FilterContrainer } from './Filter.styled';

export const Filter = () => {
  const handlFilter = e => {
    console.log(e.target.value.toLowerCase());
  };

  return (
    <FilterContrainer>
      <FormLabel>
        Find contacts by name
        <FormInput type="text" name="" id="" onChange={handlFilter} />
      </FormLabel>
    </FilterContrainer>
  );
};
