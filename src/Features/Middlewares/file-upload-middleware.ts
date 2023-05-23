import multer from "multer";
import crypto from "crypto";
import { createDir } from "../Utilities";
const storage = multer.diskStorage({
  destination: (a, b, cd) => {
    createDir("./files");
    cd(null, "./files");
  },
  filename: (c, file, cd) => {
    let ft = file.originalname.split(".");
    let filetype = ft[ft.length - 1];
    crypto.randomBytes(16, (er, hash) => {
      if (er) {
        console.error({ uploadfileError: er });
        cd(er, "");
      } else {
        cd(null, hash.toString("hex") + "." + filetype);
      }
    });
  },
});
export const multer_file = multer({ storage, limits: {} }).single("file");

export const multer_files = multer({ storage, limits: {} }).array("files", 4);
