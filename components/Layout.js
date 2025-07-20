// components/Layout.js
import Navbar from '../components/navbar';
import MyFooter from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <MyFooter />
    </>
  );
};

export default Layout;
