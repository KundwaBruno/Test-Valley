import { FC, HTMLProps } from 'react';

interface InputProps {
  className?: string;
  regex?: string;
}

const Input: FC<InputProps & HTMLProps<HTMLInputElement>> = (props) => {
  const { className } = props;
  return (
    <div>
      <input
        placeholder="Type something ..."
        className={`dark:text-gray-400 text-custom_black border-2 text-sm md:text-base border-custom_gray dark:border-custom_border_dark bg-background_light dark:bg-background_dark placeholder:text-custom_gray outline-none rounded-xl p-3 w-full ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
