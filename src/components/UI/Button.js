import styles from './Button.module.css';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../components/Store/ThemeSlice';

function Button(props) {
    const theme = useSelector(selectTheme);
    const { children, disabled = false, buttonType } = props;
    const buttonClassName = `${styles.button} ${styles[theme]} ${styles[buttonType]}`;

    return (
        <button
            {...props}
            className={buttonClassName}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button;