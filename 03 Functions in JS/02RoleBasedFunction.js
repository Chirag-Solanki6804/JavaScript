

function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is all access to WebPage`;
            break;

        case "subAdmin":
            return `${name} is all access to create/delete course`;
            break;
        
        case "testprep":
            return `${name} is all access to create/delete tests`;
            break; //this is not necessary

        case "user":
            return `${name} is access to consume content`;
            break;

        default:return "trial user";
        break;
    }
}

console.log(getUserRole("chirag", "user"));