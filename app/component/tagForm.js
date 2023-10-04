"use client"
import { useState } from "react"
import "../config/barcodes"
import { jsPDF } from "jspdf";
const QRCode = require("qrcode")

const TagForm = () => {
    const [id, setId] = useState("")

    const generatePDF = async(e) => {
        e.preventDefault()
        let svg = document.querySelector("#barcode")
        let canvas = document.createElement("canvas")
        let qrcanvas = document.querySelector("#qrCode")

        let ctx = canvas.getContext("2d")
        let ctx2 = qrcanvas.getContext("2d")

        await JsBarcode("#barcode", id);
        await QRCode.toCanvas(qrcanvas, id)

        var data = svg.outerHTML;
        canvas.width = svg.width.animVal.value
        canvas.height = svg.height.animVal.value
        
        let img1 = new Image()
        
        var s = new Blob([data], {type: 'image/svg+xml'});
        var url = URL.createObjectURL(s);

        img1.onload = () => {
            ctx.drawImage(img1, 0, 0);
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var imgData2 = qrcanvas.toDataURL("image/jpeg", 1.0)
            var pdf = new jsPDF();

            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.addImage(imgData2, 'JPEG', 0, 50);
            pdf.save("tag.pdf");
        }



        img1.src = url;
    }

    return(
        <form onSubmit={generatePDF}>
            <svg id="barcode"></svg>
            <canvas id="qrCode"></canvas>
            <h3>Tag Form</h3>
            <input value={id} onChange={(e) => setId(e.target.value)} placeholder="Escribe tu ID" type="text"></input>
            <input value="Generar codigo de barras" type="submit"></input>
        </form>
    )
}

export default TagForm