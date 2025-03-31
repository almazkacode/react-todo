import * as SC from './FilterButton.style';

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <SC.Button onClick={onClick} active={isActive}>
      {label}
    </SC.Button>
  );
};
