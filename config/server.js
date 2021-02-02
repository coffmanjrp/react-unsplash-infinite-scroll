module.exports = {
  APPLICATION_ID: precess.env.APPLICATION_ID || 'REPLACE',
  SECRET: process.env.SECRET || 'REPLACE',
  CALLBACK_URL: process.env.CALLBACK_URL || 'http://localhost:3000',
};
