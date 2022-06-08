# E-Learning System

## App Initialization

Run <code>composer install</code> and <code>npm install</code> to install dependencies.

Run <code>php artisan key:generate</code> to generate app key then create .env file or copy contents from .env.example file.

After generating the app key and creating the env file, run <code>php artisan cache:clear</code> and <code>php artisan config:clear</code>.

Finally, run <code>npm run dev</code> to compile js and css files to the public folder.

## Development Server

Run <code>php artisan serve</code> to run development server.

Alternatively, run <code>npm run watch</code> for hot reload after file changes.
