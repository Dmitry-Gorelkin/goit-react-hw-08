import { useDispatch, useSelector } from 'react-redux';
import { FormInput, FormLabel } from '../UI/Form/Form.styled';
import { FilterContrainer } from './Filter.styled';
import { addFilter } from '../../redux/filter/slice';
import { selecFilter } from '../../redux/filter/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selecFilter);

  const handlFilter = e => {
    console.log(e.target.value.toLowerCase());
    dispatch(addFilter(e.target.value.toLowerCase()));
  };

  return (
    <FilterContrainer>
      <FormLabel>
        Find contacts by name
        <FormInput type="text" name="filter" value={filter} onChange={handlFilter} />
      </FormLabel>
    </FilterContrainer>
  );
};
