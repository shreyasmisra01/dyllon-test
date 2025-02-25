"use server";

import fs from "fs/promises";
import path from "path";

const BASE_PATH = process.env.BASEURL;
export async function writeFileAction(data: string, filename: string) {
  try {
    // Sanitize filename to prevent directory traversal attacks
    const sanitizedFilename = filename.replace(/[^a-zA-Z0-9._-]/g, "_");

    // Construct the file path within the public directory
    const filePath = path.join(
      process.cwd(),
      "public",
      `${sanitizedFilename}.txt`
    );

    // Write the data to the file
    await fs.writeFile(filePath, data);

    console.log(`File "${sanitizedFilename}" written successfully`);
    return {
      success: true,
      message: `File "${sanitizedFilename}" written successfully`,
    };
  } catch (error) {
    console.error(`Error writing file "${filename}":`, error);
    return { success: false, message: `Error writing file "${filename}"` };
  }
}

export async function readFileAction(filename: string) {
  try {
    const sanitizedFilename = filename.replace(/[^a-zA-Z0-9._-]/g, "_");
    const filePath = path.join(BASE_PATH, `${sanitizedFilename}.txt`);

    try {
      await fs.access(filePath, fs.constants.F_OK); // Check if the file exists
    } catch (accessError: string) {
      if (accessError.code === "ENOENT") {
        console.log(`File "${filename}" does not exist.`);
        return { success: false, message: "File does not exist", data: null };
      }
      // throw accessError; // Re-throw if it's a different error
    }

    const data = await fs.readFile(filePath, "utf-8");
    return { success: true, data: data };
  } catch (error) {
    console.error(`Error reading file "${filename}":`, error);
    return { success: false, message: "Error reading file", data: null };
  }
}
export async function deleteFileAction(filename: string) {
  try {
    console.log("filename filename", filename);
    // Remove .txt if it exists in the input filename
    const baseFilename = filename.replace(/\.txt$/, "");
    const sanitizedFilename = baseFilename.replace(/[^a-zA-Z0-9._-]/g, "_");
    console.log("filename sanitizedFilename", sanitizedFilename);

    const filePath = path.join(
      process.cwd(),
      "public",
      `${sanitizedFilename}.txt`
    );
    console.log("filename filePath", filePath);

    await fs.unlink(filePath);
    console.log(`File "${sanitizedFilename}.txt" deleted successfully`);
    return {
      success: true,
      message: `File "${sanitizedFilename}.txt" deleted successfully`,
    };
  } catch (error) {
    console.error(`Error deleting file "${filename}":`, error);
    return { success: false, message: `Error deleting file "${filename}"` };
  }
}

export async function getFilesForHost(host: string): Promise<string[]> {
  try {
    const publicDir = path.join(process.cwd(), "public");
    const files = await fs.readdir(publicDir);
    const hostFiles = files.filter((file) => file.startsWith(host + ".txt"));
    return hostFiles;
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
}
