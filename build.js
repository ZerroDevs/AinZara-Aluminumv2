const fs = require('fs-extra');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');
const { minify } = require('html-minifier-terser');
const CleanCSS = require('clean-css');

const sourceDir = __dirname;
const targetDir = path.join(__dirname, 'dist');

// Define files and folders to ignore when copying
const ignoreList = [
    'node_modules',
    'dist',
    '.git',
    'package.json',
    'package-lock.json',
    'build.js',
    'Python'
];

async function build() {
    console.log('Starting build process...');

    // 1. Clean the target directory if it exists
    if (fs.existsSync(targetDir)) {
        console.log('Cleaning old dist folder...');
        fs.emptyDirSync(targetDir);
    } else {
        fs.mkdirSync(targetDir);
    }

    // 2. Copy files (excluding ignored items)
    console.log('Copying files...');
    const items = fs.readdirSync(sourceDir);
    for (const item of items) {
        if (!ignoreList.includes(item)) {
            fs.copySync(path.join(sourceDir, item), path.join(targetDir, item));
        }
    }

    // 3. Process files in the dist folder
    console.log('Minifying and Obfuscating...');
    await processDirectory(targetDir);

    console.log('Build completed successfully! The protected site is in the "dist" folder.');
}

async function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            await processDirectory(fullPath); // Recursively process directories
        } else {
            const ext = path.extname(fullPath).toLowerCase();

            try {
                if (ext === '.js') {
                    // Obfuscate JavaScript
                    let jsCode = fs.readFileSync(fullPath, 'utf8');
                    let obfuscationResult = JavaScriptObfuscator.obfuscate(jsCode, {
                        compact: true,
                        controlFlowFlattening: true,
                        controlFlowFlatteningThreshold: 0.75,
                        deadCodeInjection: true,
                        deadCodeInjectionThreshold: 0.4,
                        debugProtection: true, // Prevent dev tools debugging
                        debugProtectionInterval: 2000,
                        disableConsoleOutput: true,
                        identifierNamesGenerator: 'hexadecimal',
                        log: false,
                        numbersToExpressions: true,
                        renameGlobals: false,
                        selfDefending: true,
                        simplify: true,
                        splitStrings: true,
                        splitStringsChunkLength: 10,
                        stringArray: true,
                        stringArrayEncoding: ['base64'],
                        stringArrayIndexShift: true,
                        stringArrayRotate: true,
                        stringArrayShuffle: true,
                        stringArrayWrappersCount: 1,
                        stringArrayWrappersChainedCalls: true,
                        stringArrayWrappersParametersMaxCount: 2,
                        stringArrayWrappersType: 'variable',
                        stringArrayThreshold: 0.75,
                        unicodeEscapeSequence: false
                    });
                    fs.writeFileSync(fullPath, obfuscationResult.getObfuscatedCode());
                    console.log(`Obfuscated: ${file}`);
                } else if (ext === '.html') {
                    // Minify HTML
                    let htmlCode = fs.readFileSync(fullPath, 'utf8');
                    let minifiedHtml = await minify(htmlCode, {
                        collapseWhitespace: true,
                        removeComments: true,
                        minifyJS: true,
                        minifyCSS: true
                    });
                    fs.writeFileSync(fullPath, minifiedHtml);
                    console.log(`Minified: ${file}`);
                } else if (ext === '.css') {
                    // Minify CSS
                    let cssCode = fs.readFileSync(fullPath, 'utf8');
                    let minifiedCss = new CleanCSS({}).minify(cssCode).styles;
                    fs.writeFileSync(fullPath, minifiedCss);
                    console.log(`Minified: ${file}`);
                }
            } catch (err) {
                console.error(`Error processing ${file}:`, err.message);
            }
        }
    }
}

build();
