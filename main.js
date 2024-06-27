var tab_links = document.getElementsByClassName("tab");
var tab_contents = document.getElementsByClassName("tab_content");

function opentab(tab_name){
    console.log('hello')
    for(tab_link of tab_links){
        tab_link.classList.remove("active_link");
    }
    for(tab_content of tab_contents){
        tab_content.classList.remove("active_tab");
    }
    event.currentTarget.classList.add("active_link")
    document.getElementById(tab_name).classList.add("active_tab");
}