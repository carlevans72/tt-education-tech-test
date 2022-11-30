import Link from 'next/link';

type NavLinkProps = {
  pathname: string;
  text: string;
  goToUrl: string;
};

const NavLink = ({ pathname, text, goToUrl }: NavLinkProps) => {
  return (
    <Link
      href={goToUrl}
      className={`py-2 text-white ${
        pathname === goToUrl ? 'border-b-4 border-purple-500' : ''
      }`}
    >
      {text}
    </Link>
  );
};

export { NavLink };
