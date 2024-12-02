import './Button.scss'

const Button = ({ children, onClick, className, path }) => {
  return (
    <button
      className={`custombutton px-24 py-3 rounded-md text-white  ${className}`}
      onClick={onClick}
    >
     <a href={`${path}`}> {children} </a>
    </button>
  );
};

export default Button;
