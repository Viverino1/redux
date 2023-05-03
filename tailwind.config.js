/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                '19' : '76px',
                '22' : '88px',
                '23' : '92px',
                '104' : '416px',
                '106' : '424px',
                '108' : '432px',
                'event' : '84px',
                '5min' : '7px',
            },
            colors: {
                'NavBarColor' : '#1c1c1c',
                'NavBarTextColor' : '#c4cece',
                'BodyColor' : '#292b2b',
                'LinesColor' : '#949c9c',
                'RedEventColor' : '#ff4040',
                'RedEventTextColor' : '#ffffff',
            },
            transitionProperty: {
                'width': 'width'
            },
            transitionDuration: {
                '400' : '400ms',
            }
        },
    },
    plugins: [],
}
