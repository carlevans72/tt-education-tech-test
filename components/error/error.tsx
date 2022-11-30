import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Error = ({ children }: Props) => {
  return (
    <div
      className='border border-red-700 text-red-700 bg-red-200 font-bold p-3 rounded-md'
      role='alert'
    >
      {children}
    </div>
  );
};

export { Error };
