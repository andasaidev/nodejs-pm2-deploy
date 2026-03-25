const dotenv = require('dotenv');
dotenv.config({ path: '../.env.deploy' });

module.exports = {
  apps: [{
    name: 'mesto-backend',
    script: './dist/app.js',
    env: {
      NODE_ENV: 'production',
    },
  }],

  deploy: {
    production: {
      user: process.env.USER,
      host: process.env.SERVER_IP,
      ref: `origin/${process.env.BRANCH}`,
      repo: process.env.REPO_PATH,
      path: process.env.BACKEND_PATH,
      'pre-deploy': `bash scripts/deployEnv.sh ${process.env.USER}@${process.env.SERVER_IP} ${process.env.BACKEND_PATH}`,
      'post-deploy': 'cd backend && npm ci && npm run build && pm2 startOrRestart ecosystem.config.js --env production',
      'ssh_options': 'StrictHostKeyChecking=no'
    },
  },
};