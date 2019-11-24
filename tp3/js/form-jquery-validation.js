$(document).ready(function () {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");

    $("form").on("submit", function (event) {
        event.preventDefault();


        // votre code de vérification du formulaire
       
Function validation() {
    var error = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("resultat").innerHTML = "";
}
    var champsList = document.querySelectorAll(".champ");
     
    champsList.forEach(function (champItem) {
        if (champItem.value.length ==0 ) {
            error += "champ vide : " + document.querySelector("[for='"+champItem.id+"']").textContent + "<br/>";
        }
        
    });
    
    
    if (error !=0) {
        document.getElementById("error").innerHTML = error;
          //$('#myModal').modal("show");
        //$(".modal-title").text("Veuillez saisir les champs vides");
        //aficher la modal Remplir les champs
    }
    
    else { document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#Prenom").value;
        
       // $(".modal-title").text(" Bienvenue ! ");
        //$('#myModal').modal("show");
        //afficher une modal Bienvenue
            }


   
  


    console.log(error);
    console.log(resultat);
    return false;

