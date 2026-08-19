import Logo from "./Logo";

export default function Navbar({ children }: { children: React.ReactNode }) {
  //component composition (putting children prop solves props drilling)
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}
