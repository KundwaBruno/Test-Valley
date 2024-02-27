import { useRouter } from 'next/router';
import Button from './button';
import SectionWrapper from './sectionWrapper';

const NotFoundComponent = () => {
  const { push } = useRouter();

  return (
    <SectionWrapper>
      <div className="flex flex-col justify-center items-center ">
        <div className="font-bold text-3xl md:text-6xl mb-2 text-custom_black dark:text-custom_white">
          Not Found!
        </div>
        <div className="text-sm text-custom_black dark:text-custom_gray mt-2 text-center">
          I looked everywhere but i couldn&apos;t find this page, Sorry!
        </div>
        <Button onClick={() => push('/')} className="mt-5">
          Go back home
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default NotFoundComponent;
