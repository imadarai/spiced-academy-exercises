// Write a function that expects a string representing a selector to be passed as
// a parameter. The function should find all the elements in the document that
// match the selector and change their style so that the text they contain is
//  italic, underlined, and bold.

function iub(val) {

    //selecting all nodes with the value of val
    var changeStyles = document.querySelectorAll(val);
    console.log(changeStyles);

    //crawling through the nodes and making the changes to styles
    for (var i = 0; i < changeStyles.length; i++) {
        changeStyles[i].style.fontWeight = 'bold';
        changeStyles[i].style.fontStyle = 'italic';
        changeStyles[i].style.textDecoration = 'underline';
    }
}
