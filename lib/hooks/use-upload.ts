import type { Dispatch, SetStateAction } from 'react';
import { useState, useEffect } from 'react';

interface UseUploadData {
  error: string | null;
  progress: number | null;
  isLoading: boolean;
}

export function useUpload(
  initialUrl = '',
  initialFile = ''
): [UseUploadData, Dispatch<SetStateAction<string | undefined>>, Dispatch<SetStateAction<string | undefined>>] {
  const [url, setUrl] = useState(initialUrl);
  const [file, setFile] = useState(initialFile);

  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function doUpload() {
      setIsLoading(true);
      setError(null);

      const xhr = new XMLHttpRequest();

      setProgress(0);

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          setProgress(event.loaded / event.total);
        }
      };

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            setProgress(1);
          } else {
            setError(xhr.statusText);
          }

          setUrl(undefined);
          setFile(undefined);
          setIsLoading(false);

          setTimeout(() => setProgress(null), 1000);
        }
      };

      xhr.open('PUT', url);
      xhr.send(file);
    }

    if (url !== undefined && file !== undefined) {
      doUpload();
    }
  }, [url, file]);

  return [{ error, progress, isLoading }, setUrl, setFile];
}

export default useUpload;
