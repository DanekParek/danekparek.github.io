
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#addBtn').onclick = newElement;
    document.querySelector('#error').onclick = errorOff;

    let myNodelist = document.querySelectorAll("#myUL li");

    myNodelist.forEach(item => {
       updateListItem(item)
    })

    function newElement(){
        let inputValue = document.querySelector("#myInput").value;

        if(inputValue.length > 0 ){
            let li = document.createElement("li");
            li.innerHTML = inputValue;
            document.querySelector("#myUL").appendChild(li)
            document.querySelector("#myInput").value = "";
            updateListItem(li)
        }
        else{
            erronOn()
        }
    }


    function erronOn() {
        document.querySelector("#error").style.display = "flex";
    }

    function errorOff() {
        document.querySelector("#error").style.display = "none";
    }

    function updateListItem(item){
        let span = document.createElement('span'); //<span><span>
        let txt = document.createTextNode('\u00D7');
        span.className = "close"
        span.onclick = function (){
            this.parentElement.style.display = "none";
        }

        span.appendChild(txt)
        item.appendChild(span);
        item.onclick = function (){
            this.classList.toggle("checked")
        }
    }


});