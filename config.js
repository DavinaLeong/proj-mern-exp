const config = {
    app: {
        port: 3000,
    },
    paths: {
        root: './',
        src: './src',
        backend: './src/backend',
        client: './src/client'
    },
    mongodb: {
        host: 'mongodb://localhost:27017/',
        database: 'proj-mern-exp'
    }
};

config.app.client = {
    dir: config.paths.client + '/dist',
    route: config.paths.root
};

module.exports = config;