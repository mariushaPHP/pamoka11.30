import User from "./User";
import saveUser from "./saveUser";
import renderUser from "./renderUser";

const inputUser = () => {
    document.querySelector('.btn').addEventListener('click', () => {
        const user = new User(document.querySelector('.name').value,
                              document.querySelector('.lname').value,
                              document.querySelector('.email').value);
        //console.log(user)
        saveUser(user);
        renderUser();
    })
}

export default inputUser;