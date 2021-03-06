exports.DATABASE_URL =
    process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    'mongod://localhost/boardgameDB';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET || 'password';
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';

// this is config from old mongo github