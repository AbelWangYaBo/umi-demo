import Header from '../components/header';

import NavMenu from './nav-menu';

export default (props) => {
  return (
    <div>
      <Header />
      <NavMenu />
      <div className="container">{props.children}</div>
    </div>
  );
};
