import ArrayBufferConverter from "../ClassArrayBufferConverter";


const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
const buffer = new ArrayBuffer(data.length * 2);
const view = new Uint16Array(buffer);

for (let i = 0; i < data.length; i++) {
  view[i] = data.charCodeAt(i);
};

const converter = new ArrayBufferConverter();
converter.load(buffer);



test('должен загружать arrayBuffer', () => {
  expect(converter.buffer).toBe(buffer);
});

test('должен возвращать корректную строку', () => {
  expect(converter.toString()).toBe(data);
})


