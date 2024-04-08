import { extendTheme } from '@chakra-ui/react';

// Объявите свои цвета
const customTheme = extendTheme({
    colors: {
        accent: {
            100: "#ABDAF1",
        },
        textAccent: {
            50: "#7463D7",
            100: "#4934C5",
        },
        text: {
            50: "#A4A4A4",
            70: "#828282",
            80: "#888888",
            100: "#404040",
        }
    },
    fonts: {
        heading: 'DINPro, sans-serif',
        body: 'DINPro, sans-serif',
        // Можно также добавить mono и другие типы шрифтов
    },
    styles: {
        global: {
            // Устанавливаем шрифт для всего body документа
            'html, body': {
                fontFamily: 'body',
            },
        },
    },
});

export default customTheme;