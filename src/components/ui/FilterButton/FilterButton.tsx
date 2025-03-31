import * as SC from './FilterButton.style';

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}
export const FilterButton = ({ label, isActive, onClick }: FilterButtonProps) => {
  return (
    <SC.Button onClick={onClick} active={isActive}>
      {label}
    </SC.Button>
  );
};
