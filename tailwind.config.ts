import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        container: {
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                foreground: {
                    DEFAULT: '#1F2C3E',
                    dark: '#1F2C3E'
                },
                background: {
                    DEFAULT: '#12181F',
                    dark: '#12181F'
                },
                button: {
                    dark: '#F6C82E',
                    DEFAULT: '#1b2436'
                },
                text: {
                    DEFAULT: '#1b2436',
                    dark: '#f4f6fb'
                },
                buttonText: {
                    DEFAULT: '#f4f6fb',
                    dark: '#1b2436'
                },
                form: {
                    dark: '#f4f6fb',
                    DEFAULT: '#1b2436'
                },
                error: {
                    DEFAULT: '#304b74',
                    dark: '#ff0000'
                },
                warning: {
                    DEFAULT: '#2b4061',
                    dark: '#ffcc00'
                },
                secondary: {
                    DEFAULT: '#283852',
                    dark: '#282c34'
                },
                primary: {
                    DEFAULT: '#F6C82E',
                    dark: '#f4f6fb'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: {
                    DEFAULT: '#1e293b',
                    dark: '#334155'
                },
                hover: {
                    DEFAULT: '#ffda5f',
                    dark: '#334155'
                },
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    1: 'hsl(var(--chart-1))',
                    2: 'hsl(var(--chart-2))',
                    3: 'hsl(var(--chart-3))',
                    4: 'hsl(var(--chart-4))',
                    5: 'hsl(var(--chart-5))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            },
            fontFamily: {
                poppins: 'var(--font-Poppins)',
                orbitron: 'var(--font-orbitron)'
            }
        }
    },
    plugins: [require('tailwindcss-animate')]
};
export default config;
