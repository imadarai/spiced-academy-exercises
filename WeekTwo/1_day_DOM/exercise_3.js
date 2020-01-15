// Write a function that inserts an element into the body of the currently loaded
// page. That element should have fixed position, z-index of 2147483647, left of
// 20px, top of 100px, font-size of 200px, and contain the text 'AWESOME'.


function aweSome() {

    //Creating a new elemment div
    var newDiv = document.createElement('div');
    //Creating a new text Node to be later appended to div
    var text = document.createTextNode('Awesome!!!!');

    //styling my div
    newDiv.style.position = 'fixed';
    newDiv.style.zIndex = '2147483647';
    newDiv.style.left = '20px';
    newDiv.style.top = '100px';
    newDiv.style.fontSize = '200px';

    //Appending or Attaching my text to div
    newDiv.appendChild(text);

    //displaying or printing my 'art'
    document.body.appendChild(newDiv);

}

//running function
aweSome();
