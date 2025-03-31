import * as SC from './Filters.style';
import { Button } from '../../ui/Button/Button';
import React from 'react';

export type FilterType = 'all' | 'active' | 'completed';

interface FiltersProps {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

const filterOptions: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];

export const Filters = React.memo(({ filter, setFilter }: FiltersProps) => {
  return (
    <SC.FilterContainer>
      {filterOptions.map(({ label, value }) => (
        <Button
          key={value}
          label={label}
          isActive={filter === value}
          onClick={() => setFilter(value)}
        />
      ))}
    </SC.FilterContainer>
  );
});
