const { theme } = require("antd/lib")
const { defaultAlgorithm, defaultSeed } = theme
const mapV5Token = defaultAlgorithm(defaultSeed)

// 修改成less的变量
const generateModifyVars = () => {
  const modifyVars = {}
  for (const key in mapV5Token) {
    modifyVars[`ant_${key}`] = mapV5Token[key]
  }
  return modifyVars
}

module.exports = generateModifyVars
