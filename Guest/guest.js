
function delete_user(obj){
    row = obj.parentElement.parentElement;
    localStorage.removeItem(id);
    row.remove();
}

function edit_user(obj) {
    row = obj.parentElement.parentElement.children;
    userForm.content.value = row[1].innerHTML;
    userForm.content1.value = row[2].innerHTML;
    userForm.content2.value = row[3].innerHTML;
}

function update_user() {
    var content = userForm.content.value;
    var content1 = userForm.content1.value;
    var content2 = userForm.content2.value;
    user = {
        content: content,
        content1: content1,
        content2: content2,
    };
    localStorage.setItem(id, JSON.stringify(user));
    read_data();
}
function delete_all(){
    read_data();
}


function create_user() {
    event.preventDefault();
    var content = userForm.content.value;
    var content1 = userForm.content1.value;
    var content2 = userForm.content2.value;

    user = {
 
        content: content,
        content1: content1,
        content2: content2,

    };

    tbody = document.getElementById("data");
    row = tbody.insertRow(-1);

    cell0 = row.insertCell(0);
    cell1 = row.insertCell(1);
    cell2 = row.insertCell(2);
    cell3 = row.insertCell(3);
    cell4 = row.insertCell(4);
    cell0.innerHTML = content;
    cell1.innerHTML = content1;
    cell2.innerHTML = content2;
    cell3.innerHTML = '<i class="fas fa-edit"></i>';
    cell4.innerHTML = `<span onclick="delete_user(this)"><i class="fas fa-trash"></i><span>`;
    userForm.content.value = null;
    userForm.content1.value = null;
    userForm.content2.value = null;

}


function read_data() {
    tbody = document.getElementById("data");
    tbody.innerHTML = null;



    for (i = 0; i < localStorage.length; i++) {
        row = tbody.insertRow(-1);
        cell0 = row.insertCell(0);
        cell1 = row.insertCell(1);
        cell2 = row.insertCell(2);
        cell3 = row.insertCell(3);
        cell4 = row.insertCell(4);
        
        user_data = JSON.parse(localStorage.getItem(localStorage.key(i)));

        cell0.innerHTML = user_data.content;
        cell1.innerHTML = user_data.content1;
        cell2.innerHTML = user_data.content2;
        cell3.innerHTML = `<span onclick="edit_user(this)"><i class="fas fa-edit"></i><span>`;
        cell4.innerHTML = `<span onclick="delete_user(this)"><i class="fas fa-trash"></i><span>`;

    }



}