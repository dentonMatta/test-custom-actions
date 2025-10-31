const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run(){
    core.notice('Hello from Deploy to S3 JavaScript Action!');
}

run();