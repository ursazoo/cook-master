import { ReactElement } from 'react';

const Layout = ({ children }: { children?: ReactElement }) => {
  return (
    <div>
      <div>admin layout</div>
      {children}
    </div>
  );
};

export default Layout;
