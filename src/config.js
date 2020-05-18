export default {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload-stack"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://guy1tbxgy2.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_rSWgUigWL",
      APP_CLIENT_ID: "4qng0k6g3kj6fq5miprdntg9nn",
      IDENTITY_POOL_ID: "us-east-1:d7753161-8091-4038-99bf-ffa6f3ec6d75"
    },
    MAX_ATTACHMENT_SIZE: 5000000,
  };