function sum(a,b){
  return a+b;
}

function square(n){
  return n*n;
}

var api = {
  sum:sum,
  square:square
};

module.exports = api;
