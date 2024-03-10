// vanilla js
//color pallete https://colorhunt.co/palette/1d2b537e2553ff004dfaef5d

(async () =>  {
  let volume = document.querySelector("#volumePercent");
  const slider = document.querySelector("#slider");
  volume.textContent = slider.value;

  slider.addEventListener("input", (event) => {
    volume.textContent = event.target.value;
  });

  showAllAudibleTabs(await getAllAudibleTabs());
  console.log(await getAllTabs());
})()

async function getAllTabs () {
  let queryOptions = { };
  let tabs = await chrome.tabs.query(queryOptions);
  return tabs;
};

async function getAllAudibleTabs() {
  let queryOptions = { audible: true };
  let tabs = await chrome.tabs.query(queryOptions);
  return tabs;
};

async function showAllAudibleTabs() {
  let tabs = await getAllAudibleTabs();
  let list = document.querySelector("#audibleTabs");
  if (!tabs.length) {
    let li = document.createElement('li');
    li.innerText = 'No audible tabs';
    list.appendChild(li);
  } else {
    for (const tab of tabs) {
      let li = document.createElement('li');
      li.innerText = tab.title;
      let img = document.createElement('img')
      img.id = "favicon";
      img.src = tab.favIconUrl;
      list.appendChild(li);
      li.appendChild(img);
    }
  }
}