import './Button.css';

const Button = ({ type = 'button', func = 'primary', onClickHandler, children }) => {

  return (
    <button className={`button ${func === 'primary' ? 'primary' : 'secondary'}`} type={type} onClick={onClickHandler}>
      { children }
    </button>
  );

};

export default Button;
