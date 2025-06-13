import { useState, useCallback } from 'react';

const useFileUpload = (options = {}) => {
  const {
    maxFiles = 10,
    maxSize = 5 * 1024 * 1024, // 5MB
    acceptedTypes = ['.pdf'],
    onFilesChange
  } = options;

  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState([]);
  const [uploading, setUploading] = useState(false);

  const validateFile = (file) => {
    const errors = [];

    // Check file size
    if (file.size > maxSize) {
      errors.push(`File ${file.name} is too large. Maximum size is ${maxSize / (1024 * 1024)}MB`);
    }

    // Check file type
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    if (!acceptedTypes.includes(fileExtension)) {
      errors.push(`File ${file.name} has invalid type. Accepted types: ${acceptedTypes.join(', ')}`);
    }

    return errors;
  };

  const addFiles = useCallback((newFiles) => {
    const fileArray = Array.from(newFiles);
    const validationErrors = [];
    const validFiles = [];

    // Check total file count
    if (files.length + fileArray.length > maxFiles) {
      validationErrors.push(`Maximum ${maxFiles} files allowed`);
      return;
    }

    fileArray.forEach(file => {
      const fileErrors = validateFile(file);
      if (fileErrors.length === 0) {
        // Check for duplicates
        const isDuplicate = files.some(existingFile => 
          existingFile.name === file.name && existingFile.size === file.size
        );
        if (!isDuplicate) {
          validFiles.push({
            id: Date.now() + Math.random(),
            file,
            name: file.name,
            size: file.size,
            type: file.type,
            status: 'ready'
          });
        } else {
          validationErrors.push(`File ${file.name} is already added`);
        }
      } else {
        validationErrors.push(...fileErrors);
      }
    });

    if (validFiles.length > 0) {
      const updatedFiles = [...files, ...validFiles];
      setFiles(updatedFiles);
      onFilesChange?.(updatedFiles);
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setTimeout(() => setErrors([]), 5000);
    }
  }, [files, maxFiles, maxSize, acceptedTypes, onFilesChange]);

  const removeFile = useCallback((fileId) => {
    const updatedFiles = files.filter(f => f.id !== fileId);
    setFiles(updatedFiles);
    onFilesChange?.(updatedFiles);
  }, [files, onFilesChange]);

  const clearFiles = useCallback(() => {
    setFiles([]);
    setErrors([]);
    onFilesChange?.([]);
  }, [onFilesChange]);

  const getFilesByCategory = useCallback((category) => {
    return files.filter(f => f.category === category);
  }, [files]);

  return {
    files,
    errors,
    uploading,
    addFiles,
    removeFile,
    clearFiles,
    getFilesByCategory,
    setUploading
  };
};

export default useFileUpload;