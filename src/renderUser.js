
const renderUser = () => {

    if(JSON.parse(localStorage.getItem('dataArr')) != null){

        let element = document.querySelector("ul");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }

        let arr = [];
        arr = JSON.parse(localStorage.getItem('dataArr'));

        for(let i of arr){
            const li = document.createElement('li');
            li.textContent = `Vartotojo vardas: ${i.name}, pavarde: ${i.lname}, el. pastas: ${i.mail}`;
            document.querySelector('ul').appendChild(li)
        }
    }
}

export default renderUser;