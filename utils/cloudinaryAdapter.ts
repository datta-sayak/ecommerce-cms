import type { Adapter, HandleUpload, HandleDelete } from "@payloadcms/plugin-cloud-storage/types";
import type { UploadApiResponse } from "cloudinary";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const cloudinaryConfig = cloudinary;

export const cloudinaryAdapter: Adapter = () => {
  return {
    name: 'cloudinary-adapter',
    async handleUpload({ file }: Parameters<HandleUpload>[0]) {
      try {
        const nameWithoutExt = file.filename.replace(/\.[^/.]+$/, '');
      
        const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              resource_type: 'auto',
              public_id: nameWithoutExt,
              overwrite: false,
            },
            (error, result) => {
              if (error) return reject(error);
              if (!result) return reject(new Error('No result returned from Cloudinary'));
              resolve(result);
            },
          )
          uploadStream.end(file.buffer);
        })
      
        file.filename = `${uploadResult.public_id}.${uploadResult.format}`;
        file.filesize = uploadResult.bytes;
      } catch (err) {
        console.error('Upload Error', err);
        throw err;
      }
    },

    async handleDelete({ filename }: Parameters<HandleDelete>[0]) {
      try {
        await cloudinary.uploader.destroy(filename.replace(/\.[^/.]+$/, ''));
      } catch (error) {
        console.error('Cloudinary Delete Error:', error);
      }
    },

    staticHandler() {
      return new Response('Not implemented', { status: 501 });
    },
  }
}