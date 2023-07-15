function send() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic QUMwY2QwNzkyZmFhMGI5ZjBjZmIwNWZmM2I4MTQzZTNiNzpiZWFjN2YwOGM5OTI2OWViYjJjOWMyMzgyOGFhNmY5MA==");

  var messageInput = document.getElementById('message');
  var messageContent = messageInput.value;

  var formdata = new FormData();
  formdata.append("To", "+14077147158");
  formdata.append("From", "+18445591471");
  formdata.append("Body", messageContent);

  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
  };

  fetch("https://api.twilio.com/2010-04-01/Accounts/AC0cd0792faa0b9f0cfb05ff3b8143e3b7/Messages.json", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  // Clear the textarea after sending the message
  messageInput.value = "";
}