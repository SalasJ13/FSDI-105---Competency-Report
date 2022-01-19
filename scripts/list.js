function createRow(users){
    for(let i=0;i<users.length;i++){
        let user=users[i];
    
    let tmp=`<tr>
    <td>${user.email}</td>
    <td>${user.fname}</td>
    <td>${user.lname}</td>
    <td>${user.age}</td>
    <td>${user.address}</td>
    <td>${user.phone}</td>
    <td>${user.payment}</td>
    <td>${user.color}</td>
    </tr>`;

    console.log(tmp);

    $(".usersList").append(tmp);
    }
}

function init(){
    console.log("Listing users");
    let users=readUsers();
    createRow(users);
}
window.onload=init;