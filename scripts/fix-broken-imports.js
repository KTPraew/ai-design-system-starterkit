const fs = require('fs');
const path = require('path');

// List of component directories to check
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

components.forEach(component => {
  const pagePath = path.join(appDir, component, 'page.tsx');

  if (!fs.existsSync(pagePath)) {
    console.log(`⏭️  Skipping ${component} - file not found`);
    return;
  }

  let content = fs.readFileSync(pagePath, 'utf8');
  let modified = false;

  // Pattern: import {\nimport { DocsLayoutWrapper }
  // This means the DocsLayoutWrapper import is inserted inside another import block
  const brokenPattern = /import \{\s*\nimport { DocsLayoutWrapper }/;

  if (brokenPattern.test(content)) {
    console.log(`🔧 ${component} - fixing broken import inside multi-line import`);

    // Remove the DocsLayoutWrapper import from inside the import block
    content = content.replace(/\nimport { DocsLayoutWrapper } from '@\/components\/docs-layout-wrapper'\n/g, '\n');

    // Find the position after the Card import and before the lucide-react import
    const lines = content.split('\n');
    let insertIndex = -1;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Find the last import before the lucide-react multi-line import
      if (line.includes("from '@/components/ui/") || line.includes('from "@/components/ui/')) {
        insertIndex = i;
      }

      // Stop at the start of lucide-react import
      if (line === 'import {' && i > insertIndex) {
        break;
      }
    }

    if (insertIndex > -1) {
      lines.splice(insertIndex + 1, 0, "import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'");
      content = lines.join('\n');
      modified = true;
      console.log(`✅ ${component} - import moved to correct position`);
    }
  }

  if (modified) {
    fs.writeFileSync(pagePath, content, 'utf8');
  } else {
    console.log(`✓ ${component} - no issues found`);
  }
});

console.log('\n🎉 Done! All broken imports have been fixed.');
