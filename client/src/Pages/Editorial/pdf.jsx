import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PdfViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={1} />
      </Document>
      <p>Page 1 of {numPages}</p>
    </div>
  );
};

export default PdfViewer;
