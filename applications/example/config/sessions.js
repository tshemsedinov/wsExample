// Sessions configuration

module.exports = {
  anonymous:  true,      // Allow anonymous sessions (client should request /api/auth/anonymous to generate SID)
  cookie:     'SID',     // Session cookie name
  characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', // Possible characters for SID
  secret:     'secret',  // session secret is a string known just at server side to sign session cookie
  length:     64,        // SID length in bytes
  persist:    true,      // Store sessions in persistent database

  perIpLimit:   '20',
  perUserLimit: '5',
  //confirmTime:  '1m',
  //expireTime:   '2m',
  
  database:   'impress', // Database connection name to store sessions
  // domain:     'name.com' // optional domain for cookie '.domain.com' for all subdomains
};
