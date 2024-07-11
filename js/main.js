function openDisplayModal() {
    let modal = document.getElementById('display-modal');
    modal.style.display = 'block';
}

function closeDisplayModal() {
    let modal = document.getElementById('display-modal');
    modal.style.display = 'none';
}

function addToList() {
    let inputText = document.getElementById('nameInput').value;

    if (inputText.trim() !== ''){
        let listItem = document.createElement('li');

        listItem.textContent = inputText;

        document.getElementById('students').appendChild(listItem);
        document.getElementById('nameInput').value = '';
        document.getElementById('error-add').style.display = "none";
        document.getElementById('successful-add').style.display = "block";

        setTimeout(function() {
            document.getElementById('successful-add').style.display = "none";
        }, 2000);
    } else {
        document.getElementById('error-add').style.display = "block";

        setTimeout(function() {
            document.getElementById('error-add').style.display = "none";
        }, 2000);
    }
}

function cancelAdd() {
    document.getElementById('nameInput').value = '';
}

function randomSelect() {

}