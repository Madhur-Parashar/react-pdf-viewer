import React, { Component } from "react";
import ReactPdf from "../ReactPdf/ReactPdf";
import PDF1 from "../../assets/PDF-1.pdf";
import PDF2 from "../../assets/PDF-2.pdf";
import PDF3 from "../../assets/PDF-3.pdf";
import PDF4 from "../../assets/PDF-4.pdf";
import "./selectpdf.css";
class SelectPdf extends Component {
  state = {
    selectedPdf: PDF1,
    pdfs: [PDF1, PDF2, PDF3, PDF4]
  };
  handleChangePdf(event) {
    switch (event.target.value) {
      case "PDF1":
        this.setState({ selectedPdf: this.state.pdfs[0] });
        break;
      case "PDF2":
        this.setState({ selectedPdf: this.state.pdfs[1] });
        break;
      case "PDF3":
        this.setState({ selectedPdf: this.state.pdfs[2] });
        break;
      case "PDF4":
        this.setState({ selectedPdf: this.state.pdfs[3] });
        break;
      default:
        this.setState({ selectedPdf: this.state.pdfs[0] });
        break;
    }
  }
  render() {
    return (
      <div>
        <div
          className="b-select-container"
          onChange={e => this.handleChangePdf(e)}
        >
          <select className="b-select">
            <option value="PDF1">Select Pdf</option>
            <option value="PDF1">PDF-1</option>
            <option value="PDF2">PDF-2</option>
            <option value="PDF3">PDF-3</option>
            <option value="PDF4">PDF-4</option>
          </select>
        </div>
        <ReactPdf pdf={this.state.selectedPdf} />
      </div>
    );
  }
}

export default SelectPdf;
