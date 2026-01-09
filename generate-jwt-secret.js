const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const secret = crypto.randomBytes(32).toString('hex');
const envPath = path.join(__dirname, '.env');

let envContent = '';
if (fs.existsSync(envPath)) {
  envContent = fs.readFileSync(envPath, 'utf-8');
  if (envContent.includes('JWT_SECRET=')) {
    envContent = envContent.replace(/JWT_SECRET=.*/g, `JWT_SECRET=${secret}`);
  } else {
    envContent += `\nJWT_SECRET=${secret}`;
  }
} else {
  envContent = `JWT_SECRET=${secret}\n`;
}

fs.writeFileSync(envPath, envContent);
console.log('✅ JWT_SECRET has been written to .env file.');
console.log(`🔑 JWT_SECRET = ${secret}`);
