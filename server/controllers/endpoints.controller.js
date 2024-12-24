const endpoints = (req, res) => {
  res.status(200).json([
    {
      method: "GET",
      "check-auth": process.env.SERVER_URL + "/api/auth/check-auth",
    },
    {
      method: "POST",
      register: process.env.SERVER_URL + "/api/auth/register",
    },
    {
      method: "POST",
      login: process.env.SERVER_URL + "/api/auth/login",
    },
    {
      method: "POST",
      logout: process.env.SERVER_URL + "/api/auth/logout",
    },
    {
      method: "POST",
      "verify-email": process.env.SERVER_URL + "/api/auth/verify-email",
    },
    {
      method: "POST",
      "forgot-password": process.env.SERVER_URL + "/api/auth/forgot-password",
    },
    {
      method: "POST",
      "reset-password/:token":
        process.env.SERVER_URL + "/api/auth/reset-password/:token",
    },
  ]);
};

module.exports = endpoints;
