import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return;
        // upload image here cloudinary

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        // file is uploaded successfully on cloudinary
        console.log("File uploaded successfully "+response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath); // remove file from node server as it is already uploaded on cloudinary   
        console.log(error);
        return null;
        
    }
}


// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });

export {uploadOnCloudinary}