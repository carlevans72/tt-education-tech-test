import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../button';

type ModalProps = {
  isLoading: boolean;
  heading: string;
  content: ReactNode;
  show: boolean;
  closeModalHandler: () => void;
};

const Modal = ({
  isLoading,
  heading,
  content,
  show,
  closeModalHandler,
}: ModalProps) => {
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModalHandler();
      }
    };

    window.addEventListener('keydown', close);

    return () => window.removeEventListener('keydown', close);
  }, [closeModalHandler]);

  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className='fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-slate-700/80'>
      <div className='bg-white w-[80%] min-w-[320px] rounded-lg flex flex-col h-[460px]'>
        <div className='p-5'>
          <h2 className='mb-5 font-bold text-2xl'>{heading}</h2>

          <div className='overflow-y-auto h-[300px] mb-5'>
            {isLoading ? <p>Loading ...</p> : content}
          </div>

          <Button
            text='Close'
            disabled={false}
            clickHandler={closeModalHandler}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
};

export { Modal };
