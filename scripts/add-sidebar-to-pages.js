const fs = require('fs');
const path = require('path');

// List of component directories to update
const components = [
  'accordion', 'alert', 'avatar', 'badge', 'breadcrumb', 'button',
  'button-group', 'calendar', 'card', 'carousel', 'chart', 'checkbox',
  'collapsible', 'combobox', 'command', 'context-menu', 'data-table',
  'date-picker', 'dialog', 'drawer', 'dropdown-menu', 'empty', 'field',
  'hover-card', 'input', 'input-group', 'input-otp', 'item', 'kbd',
  'label', 'menubar', 'native-select', 'navigation-menu', 'pagination',
  'popover', 'progress', 'radio-group', 'scroll-area', 'select',
  'separator', 'sheet', 'sidebar', 'skeleton', 'slider', 'sonner',
  'spinner', 'switch', 'table', 'tabs', 'textarea', 'toggle',
  'toggle-group', 'tooltip'
];

const appDir = path.join(__dirname, '..', 'app');

components.forEach(component => {
  const pagePath = path.join(appDir, component, 'page.tsx');

  if (!fs.existsSync(pagePath)) {
    console.log(`⏭️  Skipping ${component} - file not found`);
    return;
  }

  let content = fs.readFileSync(pagePath, 'utf8');

  // Check if already has DocsLayoutWrapper
  if (content.includes('DocsLayoutWrapper')) {
    console.log(`✅ ${component} - already has sidebar`);
    return;
  }

  // Check if it's a client component
  const isClientComponent = content.startsWith("'use client'") || content.startsWith('"use client"');

  // Add import for DocsLayoutWrapper
  if (!content.includes("import { DocsLayoutWrapper }")) {
    // Find the last import statement
    const importRegex = /import .+ from .+\n/g;
    const imports = content.match(importRegex);
    if (imports && imports.length > 0) {
      const lastImport = imports[imports.length - 1];
      const lastImportIndex = content.lastIndexOf(lastImport);
      const insertPosition = lastImportIndex + lastImport.length;

      content = content.slice(0, insertPosition) +
                "import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'\n" +
                content.slice(insertPosition);
    }
  }

  // Wrap the return content with DocsLayoutWrapper
  // Find the main return statement
  const returnMatch = content.match(/return \(/);
  if (returnMatch) {
    const returnIndex = returnMatch.index + returnMatch[0].length;

    // Find the closing parenthesis of the return statement
    let depth = 1;
    let closeIndex = returnIndex;
    for (let i = returnIndex; i < content.length; i++) {
      if (content[i] === '(') depth++;
      if (content[i] === ')') {
        depth--;
        if (depth === 0) {
          closeIndex = i;
          break;
        }
      }
    }

    // Extract the content between return ( and )
    const returnContent = content.slice(returnIndex, closeIndex);

    // Wrap it with DocsLayoutWrapper
    const wrappedContent = `\n    <DocsLayoutWrapper>${returnContent.trim()}\n    </DocsLayoutWrapper>\n  `;

    content = content.slice(0, returnIndex) + wrappedContent + content.slice(closeIndex);
  }

  // Write the updated content back
  fs.writeFileSync(pagePath, content, 'utf8');
  console.log(`✨ ${component} - sidebar added`);
});

console.log('\n🎉 Done! All component pages have been updated.');
