#!/usr/bin/env node

const { execSync } = require('child_process');
const { join } = require('path');
const { promisify } = require('util');
const ncp = require('ncp').ncp;
const copy = promisify(ncp);
const rimraf = promisify(require('rimraf'));

(async () => {
    const targetDirectory = process.argv[2] || process.cwd(); 
    console.log(`Creating a new React register/login project in ${targetDirectory}...`);

    const projectPath = join(targetDirectory, 'react-register-login-fullstack');
    
    try {
        execSync('git clone https://github.com/furbo1/react-register-login-fullstack.git', { stdio: 'inherit', cwd: targetDirectory });
        
        await rimraf(join(projectPath, '.git'));

        console.log('Project created successfully.');
    } catch (error) {
        console.error('Failed to create the project:', error);
    }
})();
