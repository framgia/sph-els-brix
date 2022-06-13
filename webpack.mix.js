const mix = require("laravel-mix");

mix.ts("resources/js/index.tsx", "public/js")
    .react()
    .browserSync("http://127.0.0.1:8000/")
    .disableNotifications()
    .sourceMaps();
