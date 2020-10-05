// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-4dc68bdfe8484c9ed86df0fcf47186d133a91ec7.cmi5wcrefmbq.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_suap',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: '12345678'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}