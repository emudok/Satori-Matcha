export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'matcha-vibrant': '#4C7031',
                'matcha-soft': '#A8BA9A',
                'off-white': '#F9F7F2',
                'dark-text': '#1A1A1A',
            },
            fontFamily: {
                title: ['Playfair Display', 'serif'],
                body: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}