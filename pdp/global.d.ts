declare module "home/components" {
  const Header: () => JSX.Element;
  const Footer: () => JSX.Element;
  const MainLayout: () => JSX.Element;

  export { Header, Footer, MainLayout };
}

declare module "shop/shop" {
  const Shop: () => JSX.Element;

  export { Shop };
}
