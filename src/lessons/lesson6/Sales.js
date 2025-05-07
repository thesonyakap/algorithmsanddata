const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const sales = Object.create(null);

for (let i = 0; i < input.length; i++) {
  const [buyer, product, qtyStr] = input[i].split(' ');
  const qty = +qtyStr;

  if (!sales[buyer]) sales[buyer] = Object.create(null);
  if (!sales[buyer][product]) sales[buyer][product] = 0;

  sales[buyer][product] += qty;
}

const buyers = Object.keys(sales).sort();

const output = [];

for (const buyer of buyers) {
  output.push(`${buyer}:`);
  const products = Object.keys(sales[buyer]).sort();
  for (const product of products) {
    output.push(`${product} ${sales[buyer][product]}`);
  }
}

console.log(output.join('\n'));