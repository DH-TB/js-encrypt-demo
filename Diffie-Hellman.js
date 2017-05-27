const crypto = require('crypto');

/*密钥交换协议，基于数学算法，双方在不泄漏密钥的情况下商量出一个密钥*/
/*每次选的随机数不一样，所以每次输出都不一样*/

// xiaoming's keys:
var ming = crypto.createDiffieHellman(512);
var ming_keys = ming.generateKeys();    /*随机数*/

var prime = ming.getPrime();    /*素数*/
var generator = ming.getGenerator();    /*底数*/

console.log('Prime: ' + prime.toString('hex'));
console.log('Generator: ' + generator.toString('hex'));

// xiaohong's keys:
var hong = crypto.createDiffieHellman(prime, generator);
var hong_keys = hong.generateKeys();    /*随机数*/

// exchange and generate secret:
var ming_secret = ming.computeSecret(hong_keys);   /*协商出的密钥*/
var hong_secret = hong.computeSecret(ming_keys);

// print secret:
console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));