# Performance Testing with K6
 Getting started:

 Create/ Start Services:
- `docker-compose up -d influxdb grafana`

Import Grafana Configuration:
- Load http://localhost:3000, and import the `grafana_dashboard.json` config to a new dashboard.

Start Test:
- `docker-compose run k6 run --vus 10 --duration 30s /tests/basics/simple.js`
- `docker-compose run k6 run /tests/basics/stages.js`