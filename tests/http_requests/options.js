import http from 'k6/http';

const url = 'https://httpbin.test.k6.io/';

export default function () {
  const params = { headers: { 'X-MyHeader': 'k6test' } };
  const res = http.options(url, null, params);
  console.log(res.headers['Allow']);
}
