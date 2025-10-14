import Header from './Header';
import Menu from './Menu';
import Social from './Social';

const SideLeft = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[52%] lg:flex-col lg:justify-between lg:py-24">
      <Header />
      <Menu />
      <Social />
    </header>
  );
};

export default SideLeft;
