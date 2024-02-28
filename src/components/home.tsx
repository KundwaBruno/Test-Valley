import PageWrapper from './pageWrapper';
import Banner from './sections/banner';
import HotDeals from './sections/hotDeals';
import TopPicks from './sections/topPicks';

const Home = () => {
  return (
    <PageWrapper>
      <Banner />
      <TopPicks />
      <HotDeals />
    </PageWrapper>
  );
};

export default Home;
