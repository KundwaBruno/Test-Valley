import { FC } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper: FC<Props> = ({ children, className, id }) => {
  return (
    <section id={id} className={`${className} bg-background lg:bg-white`}>
      <div className="w-[417px] lg:w-11/12  xl:w-[84%] max-w-screen-xl m-auto xl:px-36 px-5 bg-white">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
