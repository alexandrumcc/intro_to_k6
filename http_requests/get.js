import http from 'k6/http';

export default function () {
  const res = http.get('https://k6.io');
  console.log(JSON.stringify(res.headers));
}
