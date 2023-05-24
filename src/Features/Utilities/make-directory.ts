import fs from "fs";

export const createDir = (dirName: string) => {
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName, { recursive: true });
  }
};
