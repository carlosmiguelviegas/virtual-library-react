import './Button.css';

const Button = ({ type = 'button', primary = true, secondary = false, children }) => {

  const onClickHandler = () => {};

  return (
    <button className={`button ${primary ? 'primary' : ''} ${secondary ? 'secondary' : ''}`} type={type} onClick={onClickHandler}>
      { children }
    </button>
  );

};

export default Button;
