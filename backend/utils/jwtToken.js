const sendToken = (user, statusCode, res) => {
  console.log("inside sendToken--------: ");
  const token = user.getJwtToken();
  console.log("sendToken-token------: ", token);
  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: "none",
    secure: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
