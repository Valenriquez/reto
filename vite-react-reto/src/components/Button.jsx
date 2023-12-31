import './Button.css';
import { Link } from 'react-router-dom';

 
const SIZES = ['btn--medium', 'btn--large'];
const STYLES = ['btn--primary', 'btn--outline'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
 
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
      
    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button
                className={`btn ${checkButtonSize} ${checkButtonStyle}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};