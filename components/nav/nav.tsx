import { useRouter } from 'next/router';
import { NavLink } from '../nav-link';

const Nav = () => {
  const router = useRouter();

  const { pathname } = router;

  return (
    <nav className='mb-5 w-full bg-slate-700 px-3 py-5'>
      <ul className='flex'>
        <li className='mx-6'>
          <NavLink pathname={pathname} text='Home' goToUrl='/' />
        </li>
        <li className='mx-6'>
          <NavLink pathname={pathname} text='Movies' goToUrl='/movies' />
        </li>
      </ul>
    </nav>
  );
};

export { Nav };
