const fs = require('fs');
const path = require('path');

// List of component directories to fix
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

  // Check if DocsLayoutWrapper import exists
  if (!content.includes("import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'")) {
    console.log(`⚠️  ${component} - missing DocsLayoutWrapper import`);
    return;
  }

  // Find all DocsLayoutWrapper import statements
  const importRegex = /import { DocsLayoutWrapper } from '@\/components\/docs-layout-wrapper'\n?/g;
  const matches = [...content.matchAll(importRegex)];

  if (matches.length > 1) {
    // Multiple imports found - keep only the first one in the proper location
    console.log(`🔧 ${component} - fixing duplicate imports (${matches.length} found)`);

    // Remove all DocsLayoutWrapper imports first
    content = content.replace(importRegex, '');
    modified = true;

    // Add the import in the correct location (after the last regular import, before export)
    // Find the position after all imports but before the export
    const lines = content.split('\n');
    let insertIndex = -1;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Skip 'use client' and empty lines
      if (line === "'use client'" || line === '"use client"' || line === '') {
        continue;
      }

      // If we find a line that starts with import
      if (line.startsWith('import ')) {
        insertIndex = i;
      }

      // If we find export or a non-import line after imports, stop
      if (insertIndex > -1 && !line.startsWith('import ') && line !== '' && !line.startsWith('//')) {
        break;
      }
    }

    // Insert the import after the last import
    if (insertIndex > -1) {
      lines.splice(insertIndex + 1, 0, "import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'");
      content = lines.join('\n');
      console.log(`✅ ${component} - import fixed at line ${insertIndex + 2}`);
    }
  } else if (matches.length === 1) {
    // Check if the single import is in a code block (inside backticks)
    const match = matches[0];
    const beforeMatch = content.substring(0, match.index);

    // Check if there's an unclosed backtick before this import
    const backticks = beforeMatch.match(/`/g);
    const isInCodeBlock = backticks && backticks.length % 2 === 1;

    if (isInCodeBlock) {
      console.log(`🔧 ${component} - import is inside code block, moving it`);

      // Remove the import from code block
      content = content.replace(match[0], '');
      modified = true;

      // Add the import in the correct location
      const lines = content.split('\n');
      let insertIndex = -1;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line === "'use client'" || line === '"use client"' || line === '') {
          continue;
        }

        if (line.startsWith('import ')) {
          insertIndex = i;
        }

        if (insertIndex > -1 && !line.startsWith('import ') && line !== '' && !line.startsWith('//')) {
          break;
        }
      }

      if (insertIndex > -1) {
        lines.splice(insertIndex + 1, 0, "import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'");
        content = lines.join('\n');
        console.log(`✅ ${component} - import moved to line ${insertIndex + 2}`);
      }
    } else {
      console.log(`✓ ${component} - import is correctly placed`);
      return;
    }
  }

  if (modified) {
    fs.writeFileSync(pagePath, content, 'utf8');
  }
});

console.log('\n🎉 Done! All imports have been fixed.');
