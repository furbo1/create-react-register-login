#!/usr/bin/env node

const { execSync } = require('child_process');
const fsExtra = require('fs-extra');
const path = require('path');

(async () => {
    const targetDirectory = process.argv[2] || process.cwd();
    const templateRepoUrl = 'https://github.com/furbo1/react-register-login-fullstack.git';
    const tempDirName = 'react-auth'; // Temporary directory name for cloned repo

    try {
        console.log(`Creating a new React register/login project in ${targetDirectory}...`);

        // Step 1: Clone the repository to a temporary directory
        execSync(`git clone ${templateRepoUrl} "${tempDirName}"`, { stdio: 'inherit', cwd: targetDirectory });

        const tempDirPath = path.join(targetDirectory, tempDirName);

        await fsExtra.remove(path.join(tempDirPath, '.git'));

        console.log('Project created successfully.');
    } catch (error) {
        console.error('Failed to create the project:', error);
    }
})();
