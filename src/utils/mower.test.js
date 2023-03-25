const { moveMower } = require('./mower');

test('the moveMower function is executed without errors', () => {
  const mower = { x: 0, y: 0, orientation: 'N' };
  const instructions = ['M', 'R', 'M'];
  
  expect(() => moveMower(mower, instructions)).not.toThrow();
});