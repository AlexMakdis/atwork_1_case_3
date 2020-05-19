(() => {
  const url = 'https://git.ahs.lennertderyck.be/1920-atwork-3/api-data/news.json';

  function getJSON(url) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', url, true);
    xhr.onload = function () {
      if (xhr.status == 200) {
        let data = (!xhr.responseType) ? JSON.parse(response) : xhr.response;
        // Consume the JSON-data
        dataConsuming(data);
      } else {
        console.log('Error: ' + xhr.status);
      }
    };
    xhr.onerror = function () {
      console.log('Network Error!');
    };
    xhr.send(null);
  };

  let data = getJSON(url);

  function dataConsuming(data) {
    console.log(data);
    data.forEach(e => {
      console.log(e.title);
    });
  }

})();