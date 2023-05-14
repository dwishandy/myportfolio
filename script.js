// sidebar start
const toggleSidebar = document.querySelector("#toggle-sidebar");
const sidebar = document.querySelector(".sidebar");
        
toggleSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-open");
});
// sidebar end

// efek ketik start
const txtElement = ['frontend programmer', 'student'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';
        
(function ngetik(){
    if(count == txtElement.length){
        count = 0;
    }
    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }
    setTimeout(ngetik, 300);
})();
// efek ketik end