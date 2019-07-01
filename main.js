document.addEventListener('DOMContentLoaded', function(){
    
    var select = document.getElementById('select');
    var options = [];
    var titulos = document.querySelectorAll('h3');

    for( var i = 0; titulos.length > i; i++){
        var str = titulos[i].innerText.replace(/\s/g, '');
        options.push();
        select.innerHTML += `
            <li> <a href="#${ str }">${ str }</a></li>
        `;
        titulos[i].id = str;  
    }

    select.addEventListener('change', function(value){
        window.location.href = this.value;
    });

});