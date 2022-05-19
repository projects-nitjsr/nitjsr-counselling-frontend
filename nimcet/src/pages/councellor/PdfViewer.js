import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import pdf from "./test.pdf"
import Button from '@mui/material/Button';

function PdfViewer() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);



    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offSet) {
        setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }

    function changePageBack() {
        changePage(-1)
    }

    function changePageNext() {
        changePage(+1)
    }

    return (
        <div>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p> Page {pageNumber} of {numPages}</p>
            {pageNumber > 1 &&
                <Button variant='contained' onClick={changePageBack}>Previous Page</Button>
            }
            {
                pageNumber < numPages &&
                <Button variant='outlined' onClick={changePageNext}>Next Page</Button>
            }
        </div>
    )
}

export default PdfViewer