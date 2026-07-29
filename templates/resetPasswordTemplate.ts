type ResetPasswordTemplateProps = {
  user: string
  resetURL: string
  URL: string
}

export const resetPasswordTemplate = ({
  user,
  resetURL,
  URL
}: ResetPasswordTemplateProps) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reset Your Password</title>
</head>
<body style="margin:0; padding:0; background-color:#ffffff; font-family:'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td valign="middle">
                    <img
                      src="${URL}/logo.png"
                      alt="Soujata Exim"
                      width="70"
                      style="display:block;"
                    />
                  </td>
                  <td
                    valign="middle"
                    style="padding-left:12px; font-size:22px; font-weight:700; color:#27684A;"
                  >
                    Soujata Exim
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="font-size:15px; line-height:1.7; color:#202124; padding-bottom:20px;">
              Hello ${user},
            </td>
          </tr>

          <tr>
            <td style="font-size:15px; line-height:1.7; color:#202124; padding-bottom:20px;">
              Please click on the link below to reset your password:
            </td>
          </tr>

          <tr>
            <td style="padding-bottom:20px;">
              <a href="${resetURL}" target="_blank" style="font-size:15px; color:#27684A; text-decoration:underline;">
                Change my password
              </a>
            </td>
          </tr>

          <tr>
            <td style="font-size:15px; line-height:1.7; color:#202124; padding-bottom:20px;">
              If you didn't request this, please ignore this email. If you experience any difficulty, please email
              <a href="mailto:info@soujataexim.com" style="color:#27684A; text-decoration:underline;">info@soujataexim.com</a>.
              Your password won't change until you access the link above and create a new one.
            </td>
          </tr>

          <tr>
            <td style="font-size:15px; line-height:1.7; color:#202124;">
              Thank you,<br />
              Soujata Exim Support
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:32px 0;">
              <hr style="border:none; border-top:1px solid #e0e0e0; margin:0;" />
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="font-size:12px; line-height:1.6; color:#5f6368;">
              © ${new Date().getFullYear()} Soujata Exim. You received this email to let you know about important changes to your Soujata Exim account and services.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>

`