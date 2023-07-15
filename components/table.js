async function loadTable() {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic QUMwY2QwNzkyZmFhMGI5ZjBjZmIwNWZmM2I4MTQzZTNiNzpiZWFjN2YwOGM5OTI2OWViYjJjOWMyMzgyOGFhNmY5MA==");

    var formdata = new FormData();

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
    };

    await fetch("https://api.twilio.com/2010-04-01/Accounts/AC0cd0792faa0b9f0cfb05ff3b8143e3b7/Messages.json", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}

