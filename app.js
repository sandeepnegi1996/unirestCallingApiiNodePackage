var unirest = require("unirest");

// uni
//   .post("http://mockbin.com/request")
//   .headers({ Accept: "application/json", "Content-Type": "application/json" })
//   .send({ parameter: 23, foo: "bar" })
//   .end(function(response) {
//     console.log(response.body);
//   });

// var request = unirest("GET", "https://jsonplaceholder.typicode.com/todos/1");
// console.log(request.body);
// console.log("hello world");

// var req = unirest(
//   "GET",
//   "https://community-open-weather-map.p.rapidapi.com/weather"
// );

// req.query({
//   callback: "test",
//   id: "2172797",
//   units: '"metric" or "imperial"',
//   mode: "xml, html",
//   q: "india"
// });

// req.headers({
//   "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
//   "x-rapidapi-key": "de20edbb93mshaf88e4c687732ecp100ba4jsn59109ec4d1ca"
// });

// req.end(function(res) {
//   if (res.error) throw new Error(res.error);

//   console.log(res.body);
// });

var req = unirest("GET", "https://currency-exchange.p.rapidapi.com/exchange");

req.query({
  q: "1",
  from: "SGD",
  to: "INR"
});

req.headers({
  "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
  "x-rapidapi-key": "de20edbb93mshaf88e4c687732ecp100ba4jsn59109ec4d1ca"
});

req.end(function(res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
