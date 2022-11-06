const mix = require("laravel-mix");

mix.postCss("css/app.css", "build", [
    require("tailwindcss")
])
    .ts("ts/index.ts", "build");