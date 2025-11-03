const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run(){
    //1) Get some input values
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucket-region', { required: true });
    const distFolder = core.getInput('dist-folder', { required: true });


    //2) Upload files to S3
    const s3Uri = `s3://${bucket}`; // Construct the S3 URI
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`); // Sync the dist folder to the S3 bucket

    const websiteUrl = `http://${bucket}.s3-website.${bucketRegion}.amazonaws.com`; // Construct the website URL
    core.setOutput('website-url', websiteUrl); // Set the output variable which is the generated website URL and can be used in the workflow

    core.notice('Hello from Deploy to S3 JavaScript Action!');
}

run();