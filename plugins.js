module.exports = ({ env }) => ({
  upload: {
      config: {
          provider: 'aws-s3',
          providerOptions: {
              accessKeyId: env('AKIARPLIJ5OQWWZ3WCC2'),
              secretAccessKey: env('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'),
              region: env('ap-south-1'),
              params: {
                  Bucket: env('strapi-pro'),
              },
          },
      },
  }
});
