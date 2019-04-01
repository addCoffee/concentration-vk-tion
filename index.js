/*let news = document.getElementById("l_nwsf");
news.addEventListener("click", () => {
  chrome.tabs.create({
    url: "https://habr.com/ru/top/",
    title: "Vay"
  });
});*/
window.onload = function() {
  let deleteElems = [
    "l_pr",
    "l_gr",
    "l_ph",
    "l_vid",
    "l_ap",
    "l_fav",
    "l_doc",
    "ads_left",
    "top_notify_btn",
    "ts_wrap",
    "l_fr"
  ];

  let deleteAppsId = document.querySelectorAll(".side_bar_inner li");
  for (let i of deleteAppsId) {
    if (/l_app/.test(i.id)) {
      deleteElems.push(i.id);
    }
  }

  let deleteDivs = document.querySelectorAll(".more_div");

  for (let i of deleteElems) {
    document.getElementById(i).remove();
  }

  for (let i of deleteDivs) {
    i.remove();
  }

  /*let news = document.getElementById("l_nwsf");
  news.addEventListener("click", () => { 
    chrome.tabs.create({
      url: "https://habr.com/ru/top/",
      title: "Vay"
    });
  });*/
};
