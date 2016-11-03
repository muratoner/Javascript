if (typeof(Worker) !== "undefined") {
    // Evet! Web worker destekleniyor!
    // Kodlarınız.....
    var w = new Worker("demo.js");
    w.onmessage = function (event){
        document.querySelector("#res").innerText = event.data;
    }
} else {
    // Üzgünüz! Web worker desteklenmiyor..
} 