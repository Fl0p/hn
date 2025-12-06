import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import type { FileWithPath } from "react-dropzone";
import Image from "next/image";
import { Cross2Icon } from "@radix-ui/react-icons";

import { SpriteHolder } from "../sprite-holder";
import { labelVariants } from "../ui/label";
import { cn } from "~/utils";

type Props = {
  files: File[];
  setFiles: (arg: File[]) => void;
  maxFileNumber: number;
  title?: string;
};

const MAX_FILE_SIZE = 40000000;
// add extensions
const ALLOWED_EXTENSION = ["pdf"];

export const UploadImage = ({
  files,
  setFiles,
  maxFileNumber,
  title,
}: Props) => {
  const [sizeWarning, setSizeWarning] = useState(false);
  const [extensionWarning, setExtensionWarning] = useState(false);
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      const newFiles =
        files.length > maxFileNumber - 1 ? files.slice(1) : files;
      const [file] = acceptedFiles;
      const extension = file?.name.split(".").at(-1);
      if (file?.size && file?.size > MAX_FILE_SIZE) {
        setSizeWarning(true);
        return;
      }
      if (extension && !ALLOWED_EXTENSION.includes(extension)) {
        setExtensionWarning(true);
        return;
      }
      setFiles([...newFiles, ...acceptedFiles]);
      setSizeWarning(false);
      setExtensionWarning(false);
    },
    [files, setFiles, maxFileNumber],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const deleteHandler = (index: number) => {
    const helperArr = files.filter((_, i) => i !== index);
    setFiles(helperArr);
  };

  return (
    <div className="h-1/2 w-2/3">
      <label
        className={cn(labelVariants(), "mb-2 block")}
        htmlFor="image-upload"
      >
        {title}
      </label>
      <div
        {...getRootProps()}
        className="flex min-h-56 w-full flex-col items-center justify-center border border-dashed"
      >
        <input
          {...getInputProps()}
          id="image-upload"
          className="border-warning border"
        />
        <SpriteHolder className="h-20 w-20" section="upload" name="upload" />
        <div>Create submission</div>
        <div className="text-sm italic">
          Allowed formats: PDF, max {maxFileNumber} files
        </div>
        {sizeWarning && <div className="text-warning">Too big file size</div>}
        {extensionWarning && (
          <div className="text-warning">
            Invalid file extension: PDF required
          </div>
        )}
        <div className="my-4 flex gap-4">
          {files?.length > 0 &&
            files.map((i, index) => {
              return (
                <div key={index}>
                  <div>
                    <Cross2Icon
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteHandler(index);
                      }}
                      className="ml-auto h-5 w-5 cursor-pointer"
                    />
                  </div>
                  <Image
                    width="0"
                    height="0"
                    className="h-auto w-[120px]"
                    src={URL.createObjectURL(i)}
                    alt={i.name}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
