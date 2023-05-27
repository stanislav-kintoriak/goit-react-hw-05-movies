import { Header, NavLinkBtns } from './Header.styled';

const HeaderSpace = () => {
  return (
    <Header>
      <h2>Navigation</h2>
      <nav>
        <NavLinkBtns to="/">Home</NavLinkBtns>
        <NavLinkBtns to="/movies">Movies</NavLinkBtns>
      </nav>
    </Header>
  );
};

export default HeaderSpace;
