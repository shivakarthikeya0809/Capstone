let email="  john.DOE@email.COM";
email=email.trim().toLowerCase();
let username=email.split("@")[0];
username=username.charAt(0).toUpperCase()+username.slice(1);
console.log(username);