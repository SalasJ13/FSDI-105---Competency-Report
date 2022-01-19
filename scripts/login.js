//clase4
function login(){
    console.log("login script");
    //conseguir los valores ingresados desde el login y mostrarlos en consoal
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    console.log(email,password);
    //leer todos los usuarios
    let usList=readUsers();
    let flag=false;
    //travel the array and display on the console each one of the names
    for(let i=0;i<usList.length;i++){
        console.log(usList[i])
        //validar el usuario
        if(email==usList[i].email && password==usList[i].password){
            console.log("Welcome");
            flag=true;
            window.location="users.html";
        }
    }
    if(flag==false){
        console.log("Error");
        $("#alertError").removeClass("hide");
        
        setTimeout(function(){
            $("#alertError").addClass("hide");
        },3000);
    }
}
function init(){
    $("#btnLogin").click(login);
}
window.onload=init;

