import ArrayBufferConverter from "./ClassArrayBufferConverter";
import getBuffer from "./FuncGetBuffer";

const buffer = getBuffer();
const converter = new ArrayBufferConverter();
converter.load(buffer);
console.log(converter.toString());