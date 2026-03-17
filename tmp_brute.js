import fs from 'fs';
import https from 'https';
import path from 'path';

const assetsDir = path.join(process.cwd(), 'src', 'assets');

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                 reject(new Error(`Status ${response.statusCode}`));
                 return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function tryDownloadVariations(name, prefixes, destFilename) {
    const dest = path.join(assetsDir, destFilename);
    for (const prefix of prefixes) {
        const url = `https://api.iconify.design/${prefix}:${name}.svg`;
        try {
            console.log(`Trying ${prefix}:${name}...`);
            await downloadFile(url, dest);
            console.log(`Success: ${prefix}:${name} saved to ${destFilename}`);
            return true;
        } catch (err) {
            // console.log(`Failed ${prefix}:${name}`);
        }
    }
    return false;
}

async function run() {
    // Salesforce
    const salesforceSuccess = await tryDownloadVariations('salesforce', ['logos', 'simple-icons', 'gg'], 'salesforce.svg');
    if (!salesforceSuccess) console.log("Failed all Salesforce variations");

    // AWS SNS
    const snsSuccess = await tryDownloadVariations('aws-sns', ['logos', 'simple-icons'], 'sns.svg');
    if (!snsSuccess) {
         // Try generic aws
         await tryDownloadVariations('aws', ['logos', 'simple-icons'], 'sns.svg');
    }

    // AWS SQS
    const sqsSuccess = await tryDownloadVariations('aws-sqs', ['logos', 'simple-icons'], 'sqs.svg');
    if (!sqsSuccess) {
         await tryDownloadVariations('aws', ['logos', 'simple-icons'], 'sqs.svg');
    }
}

run();
