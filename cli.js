#!/usr/bin/env node

const { execSync } = require('child_process');
const { join } = require('path');
const fs = require('fs');
const { promisify } = require('util');
const rimraf = promisify(require('rimraf'));

(async () => {
  try {
    const targetDirectory = process.argv[2] || process.cwd();
    const projectName = 'react-register-login-fullstack'; 
    const finalPath = join(targetDirectory, projectName);

    if (fs.existsSync(finalPath)) {
      console.error(`A directory named ${projectName} already exists in ${targetDirectory}. Please choose a different name or location.`);
      process.exit(1);
    }

    console.log(`Creating a new React register/login project in ${finalPath}...`);

    execSync(`git clone https://github.com/furbo1/react-register-login-fullstack.git "${projectName}"`, { stdio: 'inherit', cwd: targetDirectory });

    await rimraf(join(finalPath, '.git'));

    console.log('Project created successfully.');
  } catch (error) {
    console.error('Failed to create the project:', error.message);
    process.exit(1);
  }
})();

