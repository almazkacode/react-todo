import * as SC from './Button.style';

interface ButtonProps {
  label: string;
  isActive?: boolean;
  onClick: () => void;
}
export const Button = ({ label, isActive = false, onClick }: ButtonProps) => {
  return (
    <SC.Button onClick={onClick} active={isActive} aria-label={label}>
      {label}
    </SC.Button>
  );
};
