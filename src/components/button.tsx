import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  size?: 'large' | 'small';
  disabled?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, disabled, size, className }) => {
  return (
    <motion.button
      type="submit"
      whileTap={{ scale: !disabled ? 0.9 : 1 }}
      disabled={disabled}
      onClick={onClick}
      className={`dark:bg-custom_white text-sm font-medium bg-custom_black py-2 px-3 md:p-3 rounded-lg md:px-5 dark:text-black hover:opacity-90 text-white disabled:opacity-70 disabled:cursor-not-allowed ${className}`}>
      {children}
    </motion.button>
  );
};

export default Button;
