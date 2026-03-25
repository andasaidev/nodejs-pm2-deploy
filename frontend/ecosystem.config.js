const dotenv = require('dotenv');
dotenv.config({ path: './.env.deploy' });

const { USER, SERVER_IP, REPO_PATH, BRANCH, FRONTEND_PATH } = process.env;

module.exports = {
  deploy: {
    production: {
      user: USER,
      host: SERVER_IP,
      ref: BRANCH,
      repo: REPO_PATH,
      path: FRONTEND_PATH,
      'post-deploy': 'cd frontend && npm ci && npm run build',
    },
  },
};