
const tabContents=document.getElementsByClassName("tab-content");
const tablinks=document.getElementsByClassName("tab-links")

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }

  for(tabcontent of tabContents){
    tabcontent.classList.remove("active-content");
  }
  document.getElementById(tabname).classList.add("active-content")
  document.tablinks.classList.add("active-link")
}