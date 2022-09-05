// // // // //Examine the Document Object// 
// // // // // console.dir(document); 

// // // // console.log(document.domain); //local host
// // // // console.log(document.URL);

// // // // console.log(document.title); 
// // // // document.title=123; 

// // // // console.log(document.title);

// // // // console.log(document.doctype); 


// // // // console.log(document.all);
// // // // console.log(document.all[10]);

// // // console.log(document.forms[0]);
// // // console.log(document.links); 

// // //get element by id 
// // var d=document.getElementById('header-title');
// // console.log(d); 
// // d.textContent="Hello"; 
// // console.log(d); 
// // d.innerText="Goodbye"; 
// // console.log(d); 

// // d.innerHTML="<h3>Hello</h3>"; 
// // console.log(d);
// // d.style.borderBottom='solid 3px #000'

// //get element by tag

// // console.log(document.domain);

// // var select=document.querySelector('select');
// // select.addEventListener('change', runEvent);


// //video 3

// // add an event listener 
// // const button=document.getElementById('button').addEventListener('mousedown', buttonclick);
// // console.log(123); 
// // const box=document.getElementById('box');//.addEventListener('mousedown', buttonclick);

// // box.addEventListener('mouseenter',runEvent);
// // box.addEventListener("mouseleave", runEvent);


// // var iteminput=document.querySelector('input[type="text"]');

// // var form=document.querySelector('form'); 

// // // iteminput.addEventListener('keydown', runEvent);
// // iteminput.addEventListener('input', runEvent);
// // // iteminput.addEventListener('paste',runEvent);



// // form.addEventListener('submit', runEvent);

// function runEvent(e){
//     e.preventDefault();

//     // console.log("Event: "+e.type);
//     // console.log(e.target.value);
//     // document.getElementById("output").innerHTML='<h3>'+e.target.value+'</h3>';
//     // document.body.style.display="none"; 
//     console.log("Event: "+ e.type);



// // }

// function buttonclick(e){
//     // console.log("Button Clicled"); 
// // document.getElementById('header-title').textContent='changed'; 
// // document.querySelector("#main").style.backgroundColor="purple";
// // console.log("Button Clicked!!"); 
// // // console.log(e);
// // console.log(e.target);
// // // console.log(e.target.class);
// // // console.log(e.type);
// // console.log(e.clientY);
// // console.log(e.offsetX);
// // console.log(e.offsetY); 
// // console.log(e.altKey); 
// // console.log(e.ctrlKey); 
// // console.log(e.SHIFTKey);
// //events on the mouse event
// console.log("Event Type: "+e.type);



// }

// // var button1=document.getElementById('button');
// // button.addEventListener('dblclick', runEvent);


// // function runEvent(e){
// //     console.log("Event Type: "+ e.type);

// // }






//add an item
var selet=document.querySelector('select');


var form=document.getElementById("addForm");
var itemList=document.getElementById("items");
var filter=document.getElementById("filter"); 


//form submit event 

form.addEventListener("submit", addItem);

filter.addEventListener('keyup', filterItems);

//delete event

itemList.addEventListener('click',removeItem);

//add item

    var valuee=1;
// console.log(valuee);


selet.addEventListener('input', runEvent); 
function runEvent(e){
    valuee=(selet.value);
}


function addItem(e){
    e.preventDefault();
    
    //get input value 
    var newItem='';
    newItem=document.getElementById("elementt").value;

    newItem.textContent; 

    //CREATE A NEW lI ELEMENTasd
    

    var li=document.createElement('Li'); 

    //add class
    li.className="list-group-item"; 
    // console.log(li);
    //add text node with input value 
    if(newItem==''){
         item.style.display="none";

   }else{
        li.append("Item: ");

   var k= li.appendChild(document.createTextNode(newItem));
  li.append("  Quantity:"+valuee);


   }



    //create a delete button element

    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    //append text node

    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);



    itemList.appendChild(li);
    // newItem.setText=""

}


function removeItem(e){
    if(e.target.classList.contains('delete')){

        if(confirm('Are you Sure?')){
            var li=e.target.parentElement; 
            itemList.removeChild(li); 

        }
    }

}

function filterItems(e){
    //convert it to the lowercase and search the thing 
    var text=e.target.value.toLowerCase();

    // get elements from the item list 

   var items= itemList.getElementsByTagName('li');
   //convert it into the array 
   Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent;

    if (itemName.toLocaleLowerCase().indexOf(text)!=-1){
        item.style.display="block";


    }else{
        item.style.display="none";

    }

   });


}














