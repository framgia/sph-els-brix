const mix = require("laravel-mix");

mix.browserSync({
    proxy: "http://127.0.0.1:8000/",
});

mix.ts("resources/js/index.tsx", "public/js")
    .react()
    .css("resources/css/app.css", "public/css");
