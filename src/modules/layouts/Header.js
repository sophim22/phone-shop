import { Navbar } from "../components/Navbar";
import { MobileNav } from "../components/MobileNav";
const Header = () => {
  return (
    <div>
      <Navbar scrolling={true}/>
      <MobileNav />
    </div>
  );
};

export default Header;
