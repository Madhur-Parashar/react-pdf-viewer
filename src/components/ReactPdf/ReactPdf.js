import React, { Component } from "react";
import { Document, Page } from "react-pdf";

import { pdfjs } from "react-pdf";
import "./reactpdf.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class ReactPdf extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };
  componentDidUpdate() {
    console.log("UPDATE");
  }
  componentWillReceiveProps(newProps) {
    if (newProps.pdf !== this.props.pdf) {
      this.setState({ numPages: null, pageNumber: 1 });
    }
  }
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };
  goToPrevPdfPage = () => {
    if (this.state.pageNumber > 1) {
      this.setState(state => ({
        pageNumber: this.state.pageNumber - 1
      }));
    }
  };
  goToNextPdfPage = () => {
    if (this.state.pageNumber < this.state.numPages) {
      this.setState(state => ({
        pageNumber: this.state.pageNumber + 1
      }));
    }
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className="b-react-pdf-container">
        <Document
          file={this.props.pdf}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <div>
          <button onClick={this.goToPrevPdfPage} className="b-react-pdf-btn">
            PREV
          </button>
          <button onClick={this.goToNextPdfPage} className="b-react-pdf-btn">
            NEXT
          </button>
        </div>
        <div>
          <a download href={this.props.pdf}>
            {" "}
            Download Now
          </a>
        </div>
      </div>
    );
  }
}

export default ReactPdf;
