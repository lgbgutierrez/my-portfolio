function openExperience(evt, toggleContent) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab__experience-content");
  tablinks = document.getElementsByClassName("tab__experience-link");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(toggleContent).style.display = "block";
  evt.currentTarget.className += " active";
}

function openProjects(evt, toggleContent) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab__projects-content");
  tablinks = document.getElementsByClassName("tab__projects-link");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(toggleContent).style.display = "block";
  evt.currentTarget.className += " active";
}