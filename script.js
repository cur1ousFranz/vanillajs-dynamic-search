let search = document.getElementById('search-person');

search.addEventListener('keyup', (e) => {
    e.preventDefault();

    // Search bar value
    let searchValue = search.value.toLowerCase();
    let row = document.getElementsByClassName('tbl-row');

    for(let i=0; i<row.length; i++){
        let td1 = row[i].getElementsByTagName('td')[0];
        let td2 = row[i].getElementsByTagName('td')[1];
        let td3 = row[i].getElementsByTagName('td')[2];

        let textContent1 = td1.textContent;
        let textContent2 = td2.textContent;
        let textContent3 = td3.textContent;

        if(textContent1.toLowerCase().indexOf(searchValue) != -1 ||
        textContent2.toLowerCase().indexOf(searchValue) != -1 ||
        textContent3.toLowerCase().indexOf(searchValue) != -1){

            row[i].style.display = '';
        }else{

            row[i].style.display = 'none';
        }

    }
    
});