var enteredName, enteredRR, enteredContact;
var showName = document.getElementById('name');
var showRN = document.getElementById('leo');
var showContact = document.getElementById('che');
var showRes = document.getElementById('Result');

var dataDiv = document.querySelector('.data');

var Data = [
    { name: 'Hasnain', rollNumber: '268797', contact: 'h@gmail.com', result: 'Passed' },
    { name: 'owais', rollNumber: '266604', contact: 'ow@gmail.com', result: 'Failed' },
    { name: 'umaim', rollNumber: '268515', contact: 'um@gmail.com', result: 'Passed' },
    { name: 'ahmad', rollNumber: '268371', contact: 'ah@gmail.com', result: 'Passed' }
];

function blurInp(e, checkInp) {
    var nameError = document.getElementsByClassName('name-error')[0];
    var passError = document.getElementsByClassName('passward-error')[0];
    var mailError = document.getElementsByClassName('gmail-error')[0];

    if (checkInp === 'name') {
        if (e.target.value.length < 3) {
            nameError.innerText = 'Name should be at least 3 characters';
            nameError.style.display = 'block';
            return;
        }
        nameError.style.display = 'none';
        enteredName = e.target.value;
    }

    if (checkInp === 'tin') {
        if (e.target.value.length < 6) {
            tinError.innerText = 'Roll Number should be at least 6 characters';
            tinError.style.display = 'block';
            return;
        }
        passError.style.display = 'none';
        enteredRR = e.target.value;
    }

    if (checkInp === 'maill') {
        if (e.target.value.indexOf('@') === -1) {
            maillError.innerText = 'Incorrect Email';
            maillError.style.display = 'block';
            return;
        }
        mailError.style.display = 'none';
        enteredContact = e.target.value;
    }
}

function showData() {
    var match = null;
    for (var i = 0; i < Data.length; i++) {
        if (
            Data[i].name === enteredName &&
            Data[i].rollNumber === enteredRR &&
            Data[i].contact === enteredContact
        ) {
            match = Data[i];
            break;
        }
    }

    if (match) {
        showName.innerText = match.name;
        showRN.innerText = match.rollNumber;
        showContact.innerText = match.contact;
        showRes.innerText = match.result;
        dataDiv.style.display = 'block';
    } else {
        alert('No matching record found!');
        dataDiv.style.display = 'none';
    }
}