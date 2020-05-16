function getData() {
    const url = 'https://api.adviceslip.com/advice';
    const xhttps = new XMLHttpRequest();


    xhttps.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            console.log(JSON.parse(this.responseText));
            const data = JSON.parse(this.responseText);


            document.getElementById("advice").innerHTML = data.slip.advice;
        }
    };
    xhttps.open("GET", url, true);
    xhttps.send();

}

const button = document.getElementById("btn");
button.addEventListener("click", () => {
    getData();
});