export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const view = new Uint16Array(this.buffer);
    let str = "";
    
    for(let i = 0; i < view.length; i++) {
      str += String.fromCharCode(view[i]);
    }
    return str;
  }
}