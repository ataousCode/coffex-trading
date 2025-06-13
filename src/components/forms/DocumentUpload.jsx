import React, { useRef } from 'react';
import { Upload, X, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import useFileUpload from '../../hooks/useFileUpload';

const DocumentUpload = ({ 
  onFilesChange, 
  requiredDocuments = [], 
  maxFiles = 15,
  className = '' 
}) => {
  const fileInputRef = useRef(null);
  
  const { 
    files, 
    errors, 
    addFiles, 
    removeFile, 
    clearFiles 
  } = useFileUpload({
    maxFiles,
    maxSize: 10 * 1024 * 1024, // 10MB
    acceptedTypes: ['.pdf'],
    onFilesChange
  });

  const handleFileSelect = (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles.length > 0) {
      addFiles(selectedFiles);
    }
    // Reset input value to allow selecting the same file again
    e.target.value = '';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      addFiles(droppedFiles);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getUploadedDocumentTypes = () => {
    return files.map(f => {
      const name = f.name.toLowerCase();
      for (const doc of requiredDocuments) {
        if (name.includes(doc.toLowerCase()) || 
            name.includes(doc.toLowerCase().replace(/\s+/g, ''))) {
          return doc;
        }
      }
      return 'Other';
    });
  };

  const getMissingDocuments = () => {
    const uploadedTypes = getUploadedDocumentTypes();
    return requiredDocuments.filter(doc => 
      !uploadedTypes.some(type => 
        type.toLowerCase() === doc.toLowerCase()
      )
    );
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Required Documents List */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
          <FileText className="w-5 h-5 mr-2" />
          Required Documents (PDF format only)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {requiredDocuments.map((doc, index) => {
            const isUploaded = getUploadedDocumentTypes().some(type => 
              type.toLowerCase() === doc.toLowerCase()
            );
            return (
              <div key={index} className="flex items-center space-x-2">
                {isUploaded ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <div className="w-4 h-4 border-2 border-gray-300 rounded" />
                )}
                <span className={`text-sm ${
                  isUploaded ? 'text-green-700 font-medium' : 'text-blue-800'
                }`}>
                  {doc}
                </span>
              </div>
            );
          })}
        </div>
        
        {getMissingDocuments().length > 0 && (
          <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-sm text-yellow-800">
              <AlertCircle className="w-4 h-4 inline mr-1" />
              Missing documents: {getMissingDocuments().join(', ')}
            </p>
          </div>
        )}
      </div>

      {/* Upload Area */}
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Upload Documents
        </h3>
        <p className="text-gray-600 mb-4">
          Drag and drop your PDF files here, or click to browse
        </p>
        <p className="text-sm text-gray-500">
          Maximum file size: 10MB • Accepted format: PDF only
        </p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-medium text-red-800 mb-2">Upload Errors:</h4>
          <ul className="text-sm text-red-700 space-y-1">
            {errors.map((error, index) => (
              <li key={index}>• {error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Uploaded Files List */}
      {files.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-gray-900">
              Uploaded Files ({files.length}/{maxFiles})
            </h4>
            <button
              onClick={clearFiles}
              className="text-sm text-red-600 hover:text-red-800"
            >
              Clear All
            </button>
          </div>
          
          <div className="space-y-2">
            {files.map((fileItem) => (
              <div
                key={fileItem.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
              >
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="font-medium text-gray-900">{fileItem.name}</p>
                    <p className="text-sm text-gray-600">
                      {formatFileSize(fileItem.size)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(fileItem.id)}
                  className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;