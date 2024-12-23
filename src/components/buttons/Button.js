import './Button.css';

const Button = ({ type = 'button', func = 'primary', children }) => {

  const onClickHandler = () => {};

  return (
    <button className={`button ${func === 'primary' ? 'primary' : 'secondary'}`} type={type} onClick={onClickHandler}>
      { children }
    </button>
  );

};

export default Button;
