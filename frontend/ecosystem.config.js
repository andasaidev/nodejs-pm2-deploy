const dotenv = require('dotenv');
dotenv.config({ path: '../.env.deploy' });

module.exports = {
  deploy: {
    production: {
      user: process.env.USER,
      host: process.env.SERVER_IP,
      ref: `origin/${process.env.BRANCH}`,
      repo: process.env.REPO_PATH,
      path: process.env.FRONTEND_PATH,
      'post-deploy': 'cd frontend && npm ci && npm run build',
    },
  },
};