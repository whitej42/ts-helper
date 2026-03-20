const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync(path.join(__dirname, 'trains.json'), 'utf-8');
const data = JSON.parse(raw);

function normalizeKey(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '_');
}

const dlcPacks = [];

data.forEach(pack => {
  const dlcPack = {
    key: pack.key,
    name: pack.name,
    publisher: pack.publisher,
    traction: pack.traction,
    trainVariants: []
  };

  for (const [operatorFullName, stops] of Object.entries(pack.operators)) {

    const match = operatorFullName.match(/Class (\d+):?\s*(.*)/);
    const trainClass = match ? match[1] : null;
    const operatorName = match ? match[2] : operatorFullName;

    const operatorKey = normalizeKey(operatorName);

    const displays = stops.map(s => ({
      code: s.id,
      main: s.stop,
      additional: s.other_side || null
    }));

    dlcPack.trainVariants.push({
      class: trainClass,
      operatorKey,
      displays
    });
  }

  dlcPacks.push(dlcPack);
});

fs.writeFileSync(
  path.join(__dirname, 'normalized.json'),
  JSON.stringify({ dlcPacks }, null, 2)
);

console.log('Done');