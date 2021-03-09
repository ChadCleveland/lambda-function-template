# lambda-function-template
When ready for production
 + Rename /p/mon-yr/app/ to the month and year of the production deployment.
  + M-YY format. i.e. 3-21
 + Clone to /p/3-21/app when stable.

Deploy from app directory
 + Keep template.yml files in the /app/ directories.
 + In terminal, navigate to /app/ directory before building and deploying.
  + cd d/11-4/app
 + In terminal, build a deploy stack for AWS CloudFormation.
  + **sam build**
 + In terminal, deploy the stack.
  + **sam deploy --guided**
  + During /d/ work, use a new stack name every time to avoid conflicts in AWS.
   + **Be sure to keep AWS clean during testing. Keep CloudFormation open and delete any old tests. S3 will need manual updates. Check the services in use for resources that failed to roll back.**
  + During /p/ implementation, use a descriptive and concise stack name.