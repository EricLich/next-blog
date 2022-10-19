import PageHead from "../PageHead";

interface LayoutProps {
  children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <PageHead />
      {children}
    </>
  );
};

export default Layout;
