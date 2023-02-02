const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const crypto_backend = [
  ...common,
  'tests/apps/crypto/backend/features/**/*.feature',
  '--require tests/apps/crypto/backend/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
  crypto_backend
};
