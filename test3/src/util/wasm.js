/**
 * @param {String} path wasm 文件路径
 * @param {Object} imports 传递到 wasm 代码中的变量
 */
function loadWebAssembly (path, imports = {}) {
  return fetch(path)
    .then(response => response.arrayBuffer())
    .then(buffer => {
      console.log(buffer)
      return WebAssembly.compile(buffer)
    })
    .then(module => {
      imports.env = imports.env || {}

      // 开辟内存空间
      imports.env.memoryBase = imports.env.memoryBase || 0
      if (!imports.env.memory) {
        imports.env.memory = new WebAssembly.Memory({ initial: 256 })
      }

      // 创建变量映射表
      imports.env.tableBase = imports.env.tableBase || 0
      if (!imports.env.table) {
      // 在 MVP 版本中 element 只能是 "anyfunc"
        imports.env.table = new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
      }

      // 创建 WebAssembly 实例
      return new WebAssembly.Instance(module, imports)
    })
}
export default { loadWebAssembly }
