module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','7e7fcc25f2799e6b0ba6b56cc7d98af45a57989037c419a1c1a4d9f231813378dd9bd0598e0842b02bd7875ca371919eadcfac14cdb7cb3298cc56d295b8253e'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','FdiXO8O4vd35jgpecmEqQA=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT','8QETriQZ4RdwFwBxLx27KA=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
