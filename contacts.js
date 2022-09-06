let filterInput=document.getElementById('filter-input'); 
//add event listener

filterInput.addEventListener('keyup', filterNames); 

function filterNames(e){
    //get value of input

    var filterValue=document.getElementById('filter-input').value.toLowerCase; 

    // console.log(filterValue);

    //get names
    let names=document.getElementById('names'); 
    //get the itemList

    let li=names.querySelectorAll('li.collection-item');
    //loop through the collection items li 
    
    for(let i=0; i<li.length; i++){

        let a=li[i].getElementsByTagName('a')[0];
        // console.log(a);
        if (a.innerHTML.toLowerCase().indexOf(filterValue) > -1){
            li[i].style.display='';

        }
        else{
        li[i].style.display='none';

        }

    }


}