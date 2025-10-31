const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run(){
    core.notice('Starting deployment to S3 bucket');
}

run();