import React from 'react';
import {Component} from 'react';
import resumePdf from './Resume.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Resume extends Component {
    state = { file: resumePdf }

    onFileChange = (event) => {
        this.setState({
            file: event.target.files[0]
        })
    }

    render() {
        const file = this.state.file;

        return (
            <Document file={file}>
                <Page pageNumber={1} scale={2.0}/>
            </Document>
        )
    }
}