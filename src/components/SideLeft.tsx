import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

const SideLeft = () => {
  return (
    <aside className="hidden md:block">
      <Header />
      <Menu />
      <Footer />
    </aside>
  );
};

export default SideLeft;
