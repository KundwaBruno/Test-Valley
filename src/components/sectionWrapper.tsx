import { FC } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper: FC<Props> = ({ children, className, id }) => {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="w-11/12  xl:w-[84%] max-w-screen-2xl m-auto xl:px-36">{children}</div>
    </section>
  );
};

export default SectionWrapper;
