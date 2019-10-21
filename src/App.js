import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import pdf from "./assets/Vue.js-2-Cookbook.pdf";
import { pdfjs } from "react-pdf";
import "./App.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class App extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

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
      <div className="b-reat-pdf">
        <Document file={pdf} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <div>
          <button onClick={this.goToPrevPdfPage}>PREV</button>
          <button onClick={this.goToNextPdfPage}>NEXT</button>
        </div>
        <div>
          <a download href={pdf}>
            {" "}
            Download Now
          </a>
        </div>
      </div>
    );
  }
}

export default App;
