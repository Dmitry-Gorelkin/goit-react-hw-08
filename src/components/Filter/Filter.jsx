import { useDispatch } from 'react-redux';
import { FormInput, FormLabel } from '../UI/Form/Form.styled';
import { FilterContrainer } from './Filter.styled';
import { addFilter } from '../../redux/filter/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handlFilter = e => {
    console.log(e.target.value.toLowerCase());
    dispatch(addFilter(e.target.value.toLowerCase()));
  };

  return (
    <FilterContrainer>
      <FormLabel>
        Find contacts by name
        <FormInput type="text" name="filter" onChange={handlFilter} />
      </FormLabel>
    </FilterContrainer>
  );
};
