const fs = require("fs");
const path = require("path");

// 要忽略的目录和文件
const IGNORED_DIRS = [".git", "node_modules"];
const IGNORED_FILES = [
  ".gitignore",
  "README.md",
  "updateReadme.js",
  "package.json",
  "package-lock.json",
];

function scanDirectory(dir, baseDir = "") {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = baseDir ? path.join(baseDir, entry.name) : entry.name;

    if (entry.isDirectory()) {
      if (!IGNORED_DIRS.includes(entry.name)) {
        files.push(...scanDirectory(fullPath, relativePath));
      }
    } else if (!IGNORED_FILES.includes(entry.name)) {
      files.push({
        path: relativePath,
        name: entry.name,
      });
    }
  }

  return files;
}

function groupFilesByType(files) {
  const groups = {};

  for (const file of files) {
    const ext = path.extname(file.path).slice(1) || "other";
    if (!groups[ext]) {
      groups[ext] = [];
    }
    groups[ext].push(file);
  }

  return groups;
}

function generateReadmeContent(fileGroups) {
  let content = "# JS 手写算法集合\n\n";
  content += "这个仓库包含了各种 JavaScript 手写实现的算法和数据结构。\n\n";

  // 遍历每个文件类型组
  for (const [type, files] of Object.entries(fileGroups)) {
    if (files.length === 0) continue;

    content += `## ${type.toUpperCase()} 文件\n\n`;

    // 对文件按名称排序
    files.sort((a, b) => a.path.localeCompare(b.path));

    for (const file of files) {
      content += `- [${file.path}](./${file.path})\n`;
    }

    content += "\n";
  }

  content += "## 如何使用\n\n";
  content += "每个文件都是独立的实现，可以单独查看和学习。\n\n";
  content += "## 自动生成\n\n";
  content +=
    "本 README.md 文件是通过 `npm run update-readme` 命令自动生成的。\n";

  return content;
}

/**
 * 主函数
 */
function main() {
  const projectRoot = path.resolve(__dirname);
  const files = scanDirectory(projectRoot);
  const fileGroups = groupFilesByType(files);
  const readmeContent = generateReadmeContent(fileGroups);

  fs.writeFileSync(path.join(projectRoot, "README.md"), readmeContent);
  console.log("README.md 已更新！");
}

main();
