"use strict"
module.exports = {
  types: [
    { value: "feat", name: "特性:   🚀  新增功能", emoji: "🚀" },
    { value: "fix", name: "修复:   🧩  修复缺陷", emoji: "🧩" },
    { value: "docs", name: "文档:   📚  文档变更", emoji: "📚" },
    {
      value: "style",
      name: "格式:   🎨  代码格式（不影响功能，例如空格、分号等格式修正）",
      emoji: "🎨",
    },
    {
      value: "refactor",
      name: "重构:   ♻️  代码重构（不包括 bug 修复、功能新增）",
      emoji: "♻️",
    },
    { value: "perf", name: "性能:   ⚡️  性能优化", emoji: "⚡️" },
    {
      value: "test",
      name: "测试:   ✅  添加疏漏测试或已有测试改动",
      emoji: "✅",
    },
    {
      value: "build",
      name: "构建:   📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）",
      emoji: "📦️",
    },
    { value: "ci", name: "集成:   🎡  修改 CI 配置、脚本", emoji: "🎡" },
    { value: "rollback", name: "回退:   ⏪️  回滚 commit", emoji: "⏪️" },
    {
      value: "other",
      name: "其他:   🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）",
      emoji: "🔨",
    },
  ],
  // it needs to match the value for field type. Eg.: 'fix'
  /*  scopeOverrides: {
	fix: [
	  {name: 'merge'},
	  {name: 'style'},
	  {name: 'e2eTest'},
	  {name: 'unitTest'}
	]
  },  */
  // override the messages, defaults are as follows
  messages: {
    type: "选择一种你的提交类型:",
    scope: "选择一个scope (可选):",
    // used if allowCustomScopes is true
    customScope: "Denote the SCOPE of this change:",
    subject: "短说明:\n",
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: "非兼容性说明 (可选):\n",
    footer: "关联关闭的issue，例如：#31, #34(可选):\n",
    confirmCommit: "确定提交说明?(yes/no)",
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["特性", "修复"],
  // limit subject length
  subjectLimit: 100,
}
