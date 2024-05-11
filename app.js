const addButton = document.querySelector('button');
const input = document.getElementById('input');
const inputDiv = document.querySelector('.inputDiv');
const listDiv = document.querySelector('.listDiv');
const plus = document.querySelector('.plus');
const icon = document.querySelector('.sortIcon'); 
const sortIconReverse = document.querySelector('.sortIconReverse');
const cleanİnput = document.querySelector('.delete');
const listArray = [];
let isAscending = true; 

function updateListVisibility() {
    listDiv.style.display = listDiv.children.length > 0 ? "block" : "none";
}

function displayList() {
    listDiv.innerHTML = ''; 
    listArray.forEach(text => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-div');

        const textSpan = document.createElement('span');
        textSpan.classList.add('text');
        textSpan.innerText = text;
        listItem.appendChild(textSpan);

        const deleteButton = document.createElement('div');
        deleteButton.classList.add('delete');
        deleteButton.style.cursor = 'pointer';
        deleteButton.innerHTML = `
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L9 9" stroke="#C4C4C4"/>
                <path d="M1 9L9 1" stroke="#C4C4C4"/>
            </svg>`;
        listItem.appendChild(deleteButton);

        listDiv.appendChild(listItem);

        deleteButton.addEventListener('click', function () {
            const index = listArray.indexOf(text);
            if (index > -1) {
                listArray.splice(index, 1); 
            }
            listDiv.removeChild(listItem);
            updateListVisibility();
        });
    });
    updateListVisibility();
}

addButton.addEventListener('click', function() {
    const inputValue = input.value.trim();
    if (inputValue !== '') {
        listArray.push(inputValue); 
        displayList(); 
        input.value = ''; 
        inputDiv.style.display = "none"; 
    } else {
        console.log("Please enter some text.");
    }
});

plus.addEventListener('click', function() {
    inputDiv.style.display = "block";
    input.value = ""; 
});

icon.addEventListener('click', function() {
    if (isAscending) {
        listArray.sort(); 
        sortIconReverse.style.display = "block";
        icon.style.display = "none";
    } else {
        listArray.sort().reverse(); // Sort and reverse the list in one step
        icon.style.display = "block";
        sortIconReverse.style.display = "none";
    }
    isAscending = !isAscending; 
    displayList(); 
});

sortIconReverse.addEventListener('click', function() {
    if (!isAscending) {
        listArray.reverse(); 
        icon.style.display = "block";
        sortIconReverse.style.display = "none";
    } else {
        listArray.sort().reverse(); // Sort and reverse the list in one step
        icon.style.display = "block";
        sortIconReverse.style.display = "none";
    }
    isAscending = !isAscending; 
    displayList(); 
});


cleanİnput.addEventListener('click', function() {
input.value = "";
}); 