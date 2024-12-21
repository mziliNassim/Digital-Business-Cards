const {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} = require("./emailTemplates");
const { mailtrapClient, sender } = require("./mail.config");

const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email: email }];

  try {
    const responce = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify you email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "verificationCode",
        verificationToken
      ),
    });
    console.log("sendVerificationEmail ~ responce:", responce);
  } catch (err) {
    console.log("sendVerificationEmail ~ err:", err);
    throw new Error(`Error sending verification Email : ${err.message}`);
  }
};

const sendWelcomeEmail = async (email, username) => {
  const recipient = [{ email: email }];

  try {
    const responce = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "d6392f42-5677-4b84-b934-50ebdeb32a0e",
      template_variables: {
        name: username,
        company_info_name: "Digital Business Cards",
      },
    });
    console.log("Welcome email send successfuly :", responce);
  } catch (err) {
    console.log("Error, Welcome email field :", err.message);
    throw new Error(`Error sending welcome Email : ${err.message}`);
  }
};

const sendResetPasswordEmail = async (email, resetURL) => {
  const recipient = [{ email: email }];

  try {
    const responce = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    });
    console.log("sendVerificationEmail ~ responce:", responce);
  } catch (err) {
    console.log("sendVerificationEmail ~ err:", err);
    throw new Error(`Error reset verification Email : ${err.message}`);
  }
};

const sendResetSuccessEmail = async (email) => {
  const recipient = [{ email: email }];

  try {
    const responce = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });
    console.log("sendResetSuccessEmail ~ responce:", responce);
  } catch (err) {
    console.log("sendResetSuccessEmail ~ err:", err.message);
    throw new Error(`Error sending Reset SuccessEmail Email : ${err.message}`);
  }
};

module.exports = {
  sendVerificationEmail,
  sendWelcomeEmail,
  sendResetPasswordEmail,
  sendResetSuccessEmail,
};
