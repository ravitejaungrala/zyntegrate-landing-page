import fs from 'fs';
import https from 'https';
import path from 'path';

const urls = {
    'hubspot': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/hubspot.svg',
    'salesforce': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/salesforce.svg',
    'sns': 'https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/master/dist/ApplicationIntegration/SimpleNotificationService.png',
    'sqs': 'https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/master/dist/ApplicationIntegration/SimpleQueueService.png',
    'webhook': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/webhooks.svg',
    'http': 'https://api.iconify.design/mdi:earth.svg' // Better fallback for HTTP
};

const assetsDir = path.join(process.cwd(), 'src', 'assets');

if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

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
        const ext = url.endsWith('.svg') ? '.svg' : '.png';
        const dest = path.join(assetsDir, `${key}${ext}`);
        try {
            console.log(`Downloading ${key} from ${url}...`);
            await downloadFile(url, dest);
            console.log(`Successfully downloaded ${key} to src/assets/${key}${ext}`);
        } catch (err) {
            console.error(`Error downloading ${key}: ${err.message}`);
            // Try fallback if failure
            if (key === 'webhook') {
                 try {
                     const fallbackUrl = 'https://api.iconify.design/mdi:webhook.svg';
                     console.log(`Trying fallback for webhook: ${fallbackUrl}`);
                     await downloadFile(fallbackUrl, path.join(assetsDir, 'webhook.svg'));
                     console.log(`Successfully downloaded fallback webhook`);
                 } catch (fallbackErr) {
                     console.error(`Fallback failed: ${fallbackErr.message}`);
                 }
            }
        }
    }
}

run();
