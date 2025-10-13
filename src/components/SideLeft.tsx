import Header from './Header';
import Menu from './Menu';
import Social from './Social';

const SideLeft = () => {
  return (
    <aside className="hidden md:block">
      <Header />
      <Menu />
      <Social />
    </aside>
  );
};

export default SideLeft;
