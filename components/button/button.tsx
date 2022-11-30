type ButtonProps = {
  text: string;
  disabled: boolean;
  clickHandler: () => void;
};

const Button = ({ text, disabled, clickHandler }: ButtonProps) => {
  return (
    <button
      className='bg-blue-700 text-white rounded px-5 py-2 hover:bg-blue-900 disabled:cursor-not-allowed disabled:bg-blue-400'
      disabled={disabled}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export { Button };
