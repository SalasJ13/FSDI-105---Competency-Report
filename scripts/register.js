console.log("Register");
//create constructor
class User{
    constructor(email,password,first,last,age,address,phone,payment,color){
        //this.attr=parameter;
        this.email=email;
        this.password=password;
        this.fname=first;
        this.lname=last;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}


//clase 2
function isValid(user){
    
    let valid = true;
    
    $('input').removeClass("error");

    if(user.email.length == 0)
    {

        valid = false;
        $("#txtEmail").addClass("error");
    }
    if(user.password.length == 0)
    {
        valid = false;
        $("#txtPassword").addClass("error");

    }
    if(user.fname.length==0){
        valid = false;
        $("#txtFirst").addClass("error");
    }
    if(user.lname.length==0){
        valid = false;
        $("#txtLast").addClass("error");
    }
    if(user.age.length==0){
        valid = false;
        $("#txtAge").addClass("error");
    }
    if(user.address.length==0){
        valid = false;
        $("#txtAddress").addClass("error");
    }
    if(user.phone.length==0){
        valid = false;
        $("#txtPhone").addClass("error");
    }
    if(user.payment.length==0){
        valid = false;
        $("#selPayment").addClass("error");
    }
    if(user.color.length==0){
        valid = false;
        $("#txtColor").addClass("error");
    }
    return valid;

}


//clase1
function registerUser(){
   let email = $("#txtEmail").val();//****check your id on the HTML
   let password = $("#txtPassword").val();
   let first=$("#txtFirst").val();
   let last = $("#txtLast").val();
   let age = $("#txtAge").val();
   let address = $("#txtAddress").val();
   let phone = $("#txtPhone").val();
   let payment = $("#selPayment").val();
   let color=$("#txtColor").val();
    
   let user=new User(email,password,first,last,age,address,phone,payment, color); //creating an instance
    
   if(isValid(user)){
        console.log(user);
        saveUser(user);
    }
    clear();
}

function init(){
    console.log("Init function");
    $("btnSave").click(registerUser);
}
window.onload=init;

function clear(){
    email = $("#txtEmail").val("");//****check your id on the HTML
    password = $("#txtPassword").val("");
    first=$("#txtFirst").val("");
    last = $("#txtLast").val("");
    age = $("#txtAge").val("");
    address = $("#txtAddress").val("");
    phone = $("#txtPhone").val("");
    payment = $("#selPayment").val("");
    color=$("#txtColor").val("");
}