import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const storage = new GridFsStorage({
  url: process.env.URL, 
  file: async (req, file) => {
    console.log('Received file:', file);  // Log the file object

    const match = ["image/png", "image/jpeg", "application/pdf"];
    if (!match.includes(file.mimetype)) {
      console.log('File type not allowed:', file.mimetype);  // Log unsupported file types
      return `${Date.now()}-file-${file.originalname}`;
    }

    const fileMetadata = {
      bucketName: 'fs',
      filename: `${Date.now()}-file-${file.originalname}`,
    };

    console.log('File metadata:', fileMetadata);  // Log the metadata being used

    return fileMetadata;
  },
});

storage.on('file', (f) => {
  console.log('File object:', f);
});

const upload = multer({ storage });

export default upload;
