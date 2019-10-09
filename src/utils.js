const TIMEOUT_VALUE = 5000;
// URL - адрес заглушка для имитации работы с сервером.
// при замене значения 500 на 200 в URL данные будут загружаться с сервера
const URL = `https://httpbin.org/status/500`;
var LoadStatus = {
    OK: 200
  };

export const download = (onSuccess, onError) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = `json`;
  xhr.addEventListener('load', function () {
      if (xhr.status === LoadStatus.OK) {
        onSuccess(xhr.response);
      } else {
        onError();
      }
    });
  xhr.addEventListener('error', function () {
    onError();
  });
  xhr.addEventListener('timeout', function () {
    onError();
  });

  xhr.timeout = TIMEOUT_VALUE;
  xhr.open(`GET`, URL);
  xhr.send();
};

export const upload = (onSuccess, onError, data) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
      if (xhr.status === LoadStatus.OK) {
        onSuccess();
      } else {
        onError();
      }
    });
  xhr.addEventListener('error', function () {
    onError();
  });
  xhr.addEventListener('timeout', function () {
    onError();
  });

  xhr.timeout = TIMEOUT_VALUE;
  xhr.open(`POST`, URL);
  xhr.send(data);
};
