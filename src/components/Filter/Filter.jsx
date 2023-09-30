import { useDispatch, useSelector } from 'react-redux';
import { CiEraser } from 'react-icons/ci';

import {
  TextFilter,
  InputFilter,
  ContactFilterDiv,
  ButtonFilter,
} from './Filter.styled';
import { selectFilter } from 'redux/selectors';
import { setFilters } from '../../redux/filters/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  return (
    <ContactFilterDiv>
      <TextFilter> Find contacts by name </TextFilter>
      <InputFilter
        type="text"
        value={filters}
        onChange={evt => dispatch(setFilters(evt.target.value))}
      />

      <ButtonFilter onClick={() => dispatch(setFilters(''))}>
        <CiEraser />
      </ButtonFilter>
    </ContactFilterDiv>
  );
};
