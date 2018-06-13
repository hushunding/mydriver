//加密解密
import * as crypto from 'crypto';
import * as fs from 'fs';

function getFileHash(filePath: string) {
    const hash = crypto.createHash('sha1');
    fs.createReadStream(filePath).pipe(hash);
    return hash.digest('hex');

}