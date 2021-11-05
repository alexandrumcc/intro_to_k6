import { check } from 'k6';
import http from 'k6/http';

export function testLogin(params) {
  let data = params || { username: 'admin', password: 'test' };
  let res = http.post('http://demo.loadimpact.com/login', data);

  let success = check(res, {
    "status is 200": r => r.status === 200
  });
}

export default function () {
  testLogin();
}
