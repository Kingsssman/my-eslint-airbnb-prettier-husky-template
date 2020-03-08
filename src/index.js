const name = 'Capt. Gangway';

console.log(name);

// bad
[1, 2, 3].map(x => {
  const y = x + 1;
  return x * y;
});

const person = {
  name: 'Yoda',
  designation: 'Jedi Master ',
};

function trainJedi(jediWarrion) {
  if (jediWarrion.name === 'Yoda') {
    console.log('No need! already trained');
  }
  console.log(`Training ${jediWarrion.name} complete`);
}

trainJedi(person);

trainJedi({
  name: 'Adeel',
  designation: 'padawan',
});
