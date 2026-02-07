const fs = require('fs');
const path = require('path');

// List of component directories to verify
const components = [
  'accordion', 'alert', 'aspect-ratio', 'avatar', 'badge', 'breadcrumb', 'button',
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
let hasIssues = false;

components.forEach(component => {
  const pagePath = path.join(appDir, component, 'page.tsx');

  if (!fs.existsSync(pagePath)) {
    console.log(`⏭️  Skipping ${component} - file not found`);
    return;
  }

  const content = fs.readFileSync(pagePath, 'utf8');

  // Check if DocsLayoutWrapper is imported
  const hasImport = content.includes("import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'");

  // Check if DocsLayoutWrapper is used in return statement
  const hasUsage = content.includes('<DocsLayoutWrapper>');

  if (!hasImport) {
    console.log(`❌ ${component} - missing DocsLayoutWrapper import`);
    hasIssues = true;
  } else if (!hasUsage) {
    console.log(`⚠️  ${component} - has import but not used`);
    hasIssues = true;
  } else {
    // Check if it's properly wrapped around the return statement
    const lines = content.split('\n');
    const returnLineIndex = lines.findIndex(line => line.trim().startsWith('return ('));

    if (returnLineIndex === -1) {
      console.log(`⚠️  ${component} - cannot find return statement`);
      hasIssues = true;
    } else {
      // Check if DocsLayoutWrapper appears shortly after return
      const nextFewLines = lines.slice(returnLineIndex, returnLineIndex + 5).join('\n');
      if (nextFewLines.includes('<DocsLayoutWrapper>')) {
        console.log(`✅ ${component} - sidebar properly configured`);
      } else {
        console.log(`⚠️  ${component} - DocsLayoutWrapper might be in wrong location`);
        hasIssues = true;
      }
    }
  }
});

if (!hasIssues) {
  console.log('\n🎉 All pages have sidebar properly configured!');
} else {
  console.log('\n⚠️  Some pages need attention.');
}
