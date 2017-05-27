const crypto = require('crypto');

/*哈希算法*/
const hash = crypto.createHash('md5');
hash.update('Hello, world!');
console.log(hash.digest('hex'));

/*哈希算法*/
const sha = crypto.createHash('sha1');
sha.update('Hello, world!');
console.log(sha.digest('hex'));

/*哈希算法，需要一个密钥*/
const hmac = crypto.createHmac('sha256', 'secret-key');
hmac.update('Hello, world!');
console.log(hmac.digest('hex'));