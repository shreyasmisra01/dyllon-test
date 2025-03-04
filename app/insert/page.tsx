"use client";

import React, { useEffect, useState } from "react";
import {
  deleteFileAction,
  getFilesForHost,
  writeFileAction,
} from "../actions/serverAction";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import script from "../assets/script.png";
import toast from "react-hot-toast";

const Insert = () => {
  const [files, setFiles] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    async function fetchFiles() {
      const host = window.location.host;

      const fixedHost = host.replace(":", "_");
      console.log("fixed host??", fixedHost);
      const fetchedFiles = await getFilesForHost(fixedHost);

      setFiles(fetchedFiles);
    }
    fetchFiles();
  }, []);

  // Function to delete a file
  const deleteFile = async (
    file: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setDeleteLoading(true);
    try {
      await deleteFileAction(file); // Assuming deleteFileAction is a function that deletes the file
      toast("File deleted successfully");
      setDeleteLoading(false);

      setTimeout(() => {
        router.refresh();
      }, 500);
    } catch (error) {
      toast("Error deleting file");
      console.log("Error deleting file", error);
    } finally {
      setDeleteLoading(false);
      // router.refresh();
    }
  };

  // Handle the form submission to add a file
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent the default behavior of the button (form submission)
    setLoading(true);

    const host = window.location.host;
    const form = e.currentTarget.form; // Access the form associated with the button

    if (form) {
      const formData = new FormData(form); // Now TypeScript knows form is not null
      const inputValue = formData.get("myInput") as string;

      if (inputValue) {
        try {
          await writeFileAction(inputValue, host); // Assuming writeFileAction is a function that writes the file
          toast("File added successfully");
          setTimeout(() => {
            router.refresh();
          }, 700);
        } catch (error) {
          toast("Error adding file");
          console.log("Error adding file", error);
        } finally {
          setLoading(false);
        }
      }
    } else {
      toast("Form not found");
      setLoading(false);
    }
  };

  return (
    <div className="">
      <form>
        <div className="text-center p-2">
          <Link className="text-2xl  font-bold " href={"/"}>
            Go to Homepage
          </Link>
        </div>
        <div className="grid grid-cols-2 items-center justify-items-center gap-16 font-[family-name:var(--font-geist-sans)] bg-white ">
          <div className="space-y-3">
            <div className="text-black bg-slate-200 p-10">
              <p className="mb-10">
                Instructions on how the add the url in the input:
              </p>
              <Image
                src={script}
                alt="script image alt"
                className="shadow-lg border border-black mb-5"
              />
              <ul className="list-disc">
                <li>Copy the underlined url from the modal.</li>
                <li>
                  Paste the url in the input box. (Example is shown below)
                </li>
                <li>Click the Submit button.</li>
                <li>
                  The entered url will be shown in the blue background below the
                  input box in this format (url of the website.txt).
                </li>
              </ul>
              <div className="gap-2 flex text-black mt-5">
                <p>Url example:</p>
                <span className="font-bold underline">
                  https://wscan.dealopia.com/api/static?fileName=dyllontestnew1&lastScannedDate=20250221
                </span>
              </div>
            </div>
          </div>
          <div className="text-black">
            <div className="mb-10">
              <label htmlFor="" className="text-black text-lg">
                Insert Script url
              </label>
              <input
                name="myInput"
                className="text-black w-[500px] border border-black p-3 rounded-lg"
                type="url"
              />
            </div>
            {loading ? (
              <button
                type="button"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              >
                Loading
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                type="button"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              >
                Submit
              </button>
            )}

            <div className="mt-10">
              <h2 className="text-xl font-bold">Files</h2>
              <ul>
                {files.map((file) => (
                  <div key={file}>
                    <li className="flex space-x-8 items-center">
                      <span className="bg-blue-200 p-2 rounded-xl">{file}</span>
                      {deleteLoading ? (
                        <button
                          type="button"
                          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                        >
                          Loading
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                          onClick={(e) => deleteFile(file, e)}
                        >
                          Delete
                        </button>
                      )}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Insert;
