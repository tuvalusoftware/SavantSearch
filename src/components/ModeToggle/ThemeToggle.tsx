import { useTheme } from 'next-themes';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    const toggleDarkMode = (checked: boolean) => {
        if (checked) setTheme('dark');
        else setTheme('light');
    };

    return (
        <div className="">
            <DarkModeSwitch
                checked={theme === 'dark'}
                onChange={toggleDarkMode}
                size={20}
            />
        </div>
    );
}
