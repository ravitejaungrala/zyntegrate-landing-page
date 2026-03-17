import fs from 'fs';
import https from 'https';
import path from 'path';

const urls = {
    'salesforce': 'https://api.iconify.design/logos:salesforce.svg',
    'sns': 'https://api.iconify.design/logos:aws-sns.svg',
    'sqs': 'https://api.iconify.design/logos:aws-sqs.svg',
    'aws_fallback': 'https://api.iconify.design/logos:aws.svg'
};

const assetsDir = path.join(process.cwd(), 'src', 'assets');

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                 reject(new Error(`Failed to download from ${url}: Status Code ${response.statusCode}`));
                 return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {}); // Delete the file on error
            reject(err);
        });
    });
}

async function run() {
    for (const [key, url] of Object.entries(urls)) {
        const dest = path.join(assetsDir, `${key === 'aws_fallback' ? 'aws' : key}.svg`);
        try {
            console.log(`Downloading ${key} from ${url}...`);
            await downloadFile(url, dest);
            console.log(`Successfully downloaded ${key} to src/assets/`);
        } catch (err) {
            console.error(`Error downloading ${key}: ${err.message}`);
        }
    }
}

run();
