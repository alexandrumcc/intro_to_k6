import http from 'k6/http';
import { Counter } from 'k6/metrics';

const CounterErrors = new Counter('Errors');

export const options = { thresholds: { Errors: ['count<100'] } };

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/1/');
  const contentOK = res.json('name') === 'Bert';
  CounterErrors.add(!contentOK);
}
