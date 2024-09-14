const version = document.getElementById('version')
const description = document.getElementById('description')
const btn = document.getElementById('btn')
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const ver = urlParams.get('ver');
fetch('../version.txt')
  .then(response => response.text())
  .then(data => {
    version.innerText = data;
    if (ver !== null && ver !== '') {
      const dataTrim = data.trim();
      const verTrim = ver.trim();
      if (dataTrim === verTrim) {
        description.innerText = 'At this time, no updates are available.'
        btn.remove();
      }
      else if (dataTrim !== verTrim) {
        description.innerText = 'An update was found.\nClick the button below to download the latest version.'
      }
    }   
  })
  .catch(error => console.error('Error fetching the text file:', error));
