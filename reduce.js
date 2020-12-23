const money = ['100', '100', '100', '1000', '1000', '10000', '10000'];

const result = money.reduce((won, current) => {
  if (!won[current]) {
    won[current] = 0;
  }
  won[current]++;

  return won;
}, {});

console.log(result);