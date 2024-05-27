import getBuffer from "../FuncGetBuffer";

const buffer = getBuffer();
const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

test('создание ArrayBuffer правильной длины', () => {
  expect(buffer instanceof ArrayBuffer).toBe(true);

  expect(buffer.byteLength).toBe(data.length * 2);
});

test('содержит правильный формат записи в UTF-16', () => {
  const expectedBytes = new Uint16Array(Array.from(data).map(char => char.charCodeAt(0)));
  const view = new Uint16Array(buffer);

  for(let i=0; i<view.length; i++) {
    expect(view[i]).toBe(expectedBytes[i]);
  }
})