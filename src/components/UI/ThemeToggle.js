import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../Store/ThemeSlice';
import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import Button from './Button';

const ThemeToggle = ({ theme }) => {
    const dispatch = useDispatch();
    const handleToggleTheme = () => dispatch(toggleTheme());
    const tooltipText = theme === 'dark' ? 'Светлая тема' : 'Тёмная тема';

    return (
        <Button
            onClick={handleToggleTheme}
            buttonType="toggleButton"
            title={tooltipText}
        >
            {theme === 'dark' ? <BsSun /> : <BiMoon />}
        </Button>
    );
};

export default ThemeToggle;