const { mdToPdf } = require('md-to-pdf');
const path = require('path');
const fs = require('fs');

const files = [
  {
    input: 'public/recursos/guia-completa-automatizacion-n8n.md',
    output: 'public/recursos/guia-completa-automatizacion-n8n.pdf'
  },
  {
    input: 'public/recursos/checklist-bi-readiness.md',
    output: 'public/recursos/checklist-bi-readiness.pdf'
  },
  {
    input: 'public/recursos/ebook-50-procesos-automatizar.md',
    output: 'public/recursos/ebook-50-procesos-automatizar.pdf'
  }
];

const pdfConfig = {
  pdf_options: {
    format: 'A4',
    margin: {
      top: '20mm',
      right: '20mm',
      bottom: '20mm',
      left: '20mm'
    },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: `
      <div style="width: 100%; font-size: 9px; padding: 0 20mm; display: flex; justify-content: space-between; color: #666;">
        <span>© 2024 Servicios Creativos</span>
        <span style="margin: 0 auto;">servicioscreativos.online</span>
        <span class="pageNumber"></span>
      </div>
    `
  },
  stylesheet_encoding: 'utf-8',
  stylesheet: path.join(__dirname, 'pdf-styles.css')
};

async function convertFiles() {
  console.log('🚀 Starting PDF generation...\n');

  for (const file of files) {
    try {
      console.log(`📄 Converting: ${file.input}`);
      
      // Check if input file exists
      if (!fs.existsSync(file.input)) {
        console.error(`   ❌ File not found: ${file.input}`);
        continue;
      }

      // Convert to PDF
      const pdf = await mdToPdf(
        { path: file.input },
        {
          ...pdfConfig,
          dest: file.output
        }
      );

      if (pdf) {
        const stats = fs.statSync(file.output);
        const fileSizeInKB = (stats.size / 1024).toFixed(2);
        console.log(`   ✅ Generated: ${file.output} (${fileSizeInKB} KB)\n`);
      }
    } catch (error) {
      console.error(`   ❌ Error converting ${file.input}:`, error.message);
    }
  }

  console.log('✨ PDF generation complete!');
}

convertFiles().catch(console.error);

