const fs = require('fs')
const path = require('path')
// Note: This script requires 'mammoth' to be installed.
// Run: npm install mammoth
// Then: node scripts/gen/parseChangshi.js
// Since the environment might not have mammoth, I have manually generated the data in src/helper/changshi_data.js

// const mammoth = require('mammoth');

const DOCX_PATH = path.join(
  __dirname,
  '../../src/assets/20个生活必须知道的核心常识知识.docx'
)
const OUTPUT_PATH = path.join(
  __dirname,
  '../../src/helper/changshi_data_gen.js'
)

async function parseDocx() {
  try {
    console.log('Parsing docx file...')
    // Mock implementation illustrating how it would be done:
    /*
    const result = await mammoth.extractRawText({ path: DOCX_PATH });
    const text = result.value;
    // Parse text to extract items (assuming some format)
    // ...
    // Write to OUTPUT_PATH
    */
    console.log(
      'This is a placeholder script. Please install mammoth and implement the parsing logic specific to your docx format.'
    )
    console.log(
      'For now, use the manually generated src/helper/changshi_data.js'
    )
  } catch (error) {
    console.error('Error parsing docx:', error)
  }
}

parseDocx()
