const url = process.env.BASE_URL || 'http://localhost:8000';
import grid from 'gridfs-stream'
import mongoose from 'mongoose';

let gfs, GridFSBucket
const conn = mongoose.connection
conn.once('open',()=>{
    GridFSBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName:'fs'
    })
    gfs = grid(conn.db, mongoose.mongo)
    gfs .collection('fs')
})


export const getImage = async (req, res) => {
    try {
      const file = await gfs.files.findOne({ filename: req.params.filename });
  
      if (!file) {
        return res.status(404).json({ error: 'File not found' });
      }
  
      const readstream = GridFSBucket.openDownloadStream(file._id);
      readstream.pipe(res);
    } catch (error) {
      console.error('Error fetching file:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  



export const uploadFileController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    console.log('Uploaded file:', req.file);  // Log the uploaded file object

    const imageUrl = `${url}/files/${req.file.filename}`;
    return res.status(200).json({ imageUrl });
  } catch (error) {
    console.error('Upload Controller Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
