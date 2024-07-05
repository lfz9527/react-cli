"use strict"

const path = require("path")
const fs = require("fs")
const appDirectory = fs.realpathSync(process.cwd())

const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

const moduleFileExtensions = [".mjs", ".js", ".ts", ".tsx", ".json", ".jsx"]

module.exports = {
  appIndexJs: resolveApp("src/index.tsx"),
  appHtml: resolveApp("public/index.html"),
  dist: resolveApp("dist"),
  appPackageJson: resolveApp("package.json"),
  appSrc: resolveApp("src"),
  moduleFileExtensions,
}
