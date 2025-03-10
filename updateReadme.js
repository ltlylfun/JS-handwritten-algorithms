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

function getChineseComment(filePath) {
  try {
    const buffer = Buffer.alloc(200);
    const fd = fs.openSync(filePath, "r");
    fs.readSync(fd, buffer, 0, 200, 0);
    fs.closeSync(fd);

    const content = buffer.toString("utf8");
    const firstLine = content.split("\n")[0].trim();

    if (firstLine.startsWith("//")) {
      const comment = firstLine.substring(2).trim();

      if (/[\u4e00-\u9fa5]/.test(comment)) {
        return comment;
      }
    }
    return "";
  } catch (error) {
    console.error(`读取文件 ${filePath} 失败:`, error);
    return "";
  }
}

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
      const chineseComment = getChineseComment(fullPath);
      files.push({
        path: relativePath,
        name: entry.name,
        chineseComment,
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

  for (const [type, files] of Object.entries(fileGroups)) {
    if (files.length === 0) continue;

    content += `## ${type.toUpperCase()} 文件\n\n`;

    files.sort((a, b) => a.path.localeCompare(b.path));

    for (const file of files) {
      const displayText = file.chineseComment
        ? `${file.path} (${file.chineseComment})`
        : file.path;
      content += `- [${displayText}](./${file.path})\n`;
    }

    content += "\n";
  }

  content += "## 如何使用\n\n";
  content +=
    "每个文件都是独立的实现，可以单独查看和学习。每个文件的第一行注释描述了实现的功能。\n\n";
  content += "## 自动生成\n\n";
  content +=
    "本 README.md 文件是通过 `npm run update-readme` 命令自动生成的。链接文字包含文件路径和中文描述（如果文件第一行有中文注释）。\n";

  return content;
}

function main() {
  const projectRoot = path.resolve(__dirname);
  const files = scanDirectory(projectRoot);
  const fileGroups = groupFilesByType(files);
  const readmeContent = generateReadmeContent(fileGroups);

  fs.writeFileSync(path.join(projectRoot, "README.md"), readmeContent);
  console.log("README.md 已更新！");
}

main();
