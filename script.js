import { check } from 'k6';
import { sleep } from 'k6';
import http from 'k6/http';

export let options = {
  stages: [ //Example Stress test
    { duration: '2m', target: 100 }, // below normal load
    { duration: '5m', target: 100 },
    { duration: '2m', target: 200 }, // normal load
    { duration: '5m', target: 200 },
    { duration: '2m', target: 300 }, // around the breaking point
    { duration: '5m', target: 300 },
    { duration: '2m', target: 400 }, // beyond the breaking point
    { duration: '5m', target: 400 },
    { duration: '10m', target: 0 }, // scale down. Recovery stage.
  ],
};

export default function() {
  //If using HEADER
	let params = {
		headers: {/* 'Accept':'application/json' */}
	};

	let res = http.get(/* 'LINK TO TEST' */, params);
	check(res, {
		"is Status 200": (r) => r.status === 200
	});
  sleep(1);
};