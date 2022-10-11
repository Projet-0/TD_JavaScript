$( document ).ready(function(){
    /* Ma méthode
    let button = document.querySelector('button')

    button.onclick = () => {
        console.log("Jquery is ok");
    } 
    */

    let ul = document.querySelector('ul'); // list element
    let add = document.querySelector('button'); // Add button element
    
    //Test with add button
    (document.getElementById("item")).addEventListener('keypress',function(event){
        if(event.key === "Enter")
            $(add).click();
    })
    $(add).on( "click", function() {
        console.log( "A button was clicked!" );
        let output = document.getElementById('item');
        console.log(output.value);

        document.getElementById("item").focus();

        if (output.value.length > 0 ) {
            

            let li = document.createElement('li');
            let button_li = document.createElement('button');
            
            button_li.className = "li_btn" ;
            button_li.innerHTML = "Delete";


            li.innerHTML = output.value;
            li.appendChild(button_li);
            ul.appendChild(li);

            output.value = ""; // The field become empty
        }
        else {
            console.error("The field is empty");
        }
    });
    
    let delete_li = document.querySelector('button.li_btn');
    
    $("ul").on("click", '.li_btn', function() {
        $(this).parent().remove(); 
    });
});

