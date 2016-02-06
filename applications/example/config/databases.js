// Databases including persistent session storage and application specific

module.exports = {

  //dbName: {
  //  alias: 'dbAlias', // optional alias to access database from global context
  //  url: 'mongodb://127.0.0.1:27017/impress', // connection string
  //  collections: ['sessions', 'users', 'groups', 'testCollection'], // optional
  //  slowTime: '2s', // timeout to mark requests as "slow"
  //  security: true, // flag to mark database as data source for security provider
  //},

  // MySQL example database configuration
  //
  //  mysqlConnection: {
  //    url: 'mysql://impress:password@127.0.0.1/impress', // connection string (required)
  //    slowTime: 1000,                                    // time to log query as slow (optional, default: '2s', in milliseconds or string like '5s')
  //  },

  // PgSQL example database configuration
  //
  //  pgsqlConnection: {
  //    url: 'postgres://impress:password@127.0.0.1/test', // connection string (required)
  //    slowTime: 1000,                                    // time to log query as slow (optional, default: '2s', in milliseconds or string like '5s')
  //  },

  // MongoDB example database configuration
  //
  //  mongoConnection: {
  //    url: 'mongodb://127.0.0.1:27017/dbname',   // connection string (required)
  //    collections: ['collname1', 'collname2'], // collection to be created automatically if not exists
  //    slowTime: '2s',                            // time to log query as slow (optional, default: '2s', in milliseconds or string like '5s')
  //    security: true,                            // flag to use this database for security subsystem (optional, dafault: false), collections: sessions, users, groups
  //  }
};
