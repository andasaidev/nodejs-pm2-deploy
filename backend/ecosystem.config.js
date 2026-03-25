const dotenv = require('dotenv');
dotenv.config({ path: './.env.deploy' });

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
      user: USER,
      host: SERVER_IP,
      ref: BRANCH,
      repo: REPO_PATH,
      path: BACKEND_PATH,
      'pre-deploy-local': `bash scripts/deployEnv.sh ${USER}@${SERVER_IP} ${BACKEND_PATH}`,
      'post-deploy': 'cd backend && npm ci && npm run build && pm2 startOrRestart ecosystem.config.js --env production',
      'ssh_options': 'StrictHostKeyChecking=no'
    },
  },
};