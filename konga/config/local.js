/**
 * Created by pang on 7/10/2016.
 */
'use strict';
var fs = require('fs');
/**
 * Local environment settings
 *
 * While you're DEVELOPING your app, this config file should include
 * any settings specifically for your development computer (db passwords, etc.)
 *
 * When you're ready to deploy your app in PRODUCTION, you can always use this file
 * for configuration options specific to the server where the app will be deployed.
 * But environment variables are usually the best way to handle production settings.
 *
 * PLEASE NOTE:
 *      This file is included in your .gitignore, so if you're using git
 *      as a version control solution for your Sails app, keep in mind that
 *      this file won't be committed to your repository!
 *
 *      Good news is, that means you can specify configuration for your local
 *      machine in this file without inadvertently committing personal information
 *      (like database passwords) to the repo.  Plus, this prevents other members
 *      of your team from committing their local configuration changes on top of yours.
 *
 * For more information, check out:
 * http://links.sailsjs.org/docs/config/local
 */
module.exports = {

  /**
   * The default fallback URL to Kong's admin API.
   */
  kong_admin_url: process.env.KONG_ADMIN_URL || 'http://gluu.local.org:8001',


  connections: {
    postgres: {
      adapter: 'sails-postgresql',
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'admin',
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_DATABASE || 'konga',
      poolSize: process.env.DB_POOLSIZE || 10,
      ssl: process.env.DB_SSL || false
    }
  },

  models: {
    connection: process.env.DB_ADAPTER || 'postgres',
  },

  session: {
    secret: '' // Add your own SECRET string here
  },

  ssl: {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  },

  port: process.env.PORT || 1338,
  environment: 'development',
  log: {
    level: 'info'
  },
  oxdWeb: 'http://localhost:8553',
  opHost: 'https://gluu.local.org',
  oxdId: '4a9ea86e-821f-4d27-9cbe-9a70f3b226c8',
  clientId: '@!4068.62D5.C8A8.F3C0!0001!B574.28AF!0008!7099.9D0C.5FCE.E164',
  clientSecret: '9517e565-f96b-49f4-835d-e50eb5492c98',
  oxdVersion: 'Version 3.1.1'
};
