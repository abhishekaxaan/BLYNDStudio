const fs = require('fs');
const path = require('path');

const components = [
    'HeroSection',
    'CapabilitiesTeaser',
    'TechMatrix',
    'PhilosophySection',
    'ResultsSection',
    'ShowcaseSection',
    'ProcessSection',
    'FAQSection'
];

const srcDir = path.join(__dirname, 'components', 'sections');
const destDir = path.join(__dirname, 'app', 'home-demo', 'components');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

for (const comp of components) {
    const srcPath = path.join(srcDir, `${comp}.tsx`);
    const destPath = path.join(destDir, `${comp}Skeuo.tsx`);

    if (fs.existsSync(srcPath)) {
        let content = fs.readFileSync(srcPath, 'utf8');
        // Replace component definition and export
        content = content.replace(`export const ${comp} =`, `export const ${comp}Skeuo =`);
        // Simple heuristic: adjust card backgrounds & shadows to skeuomorphic
        // Replace bg-white with skeuo bg and shadows for LiquidGlass or standard cards
        content = content.replace(/bg-white/g, 'bg-[#ebf0f5]');
        content = content.replace(/bg-neutral-50/g, 'bg-[#ebf0f5]');

        // Add skeuomorphic shadows to LiquidGlass or other rounded elements
        // This is a bit brute-force but saves 50 separate tool calls
        content = content.replace(/shadow-sm/g, 'shadow-[10px_10px_20px_#d1d9e6,-10px_-10px_20px_#ffffff]');
        content = content.replace(/shadow-md/g, 'shadow-[10px_10px_20px_#d1d9e6,-10px_-10px_20px_#ffffff]');

        fs.writeFileSync(destPath, content, 'utf8');
        console.log(`Copied and converted ${comp} to ${comp}Skeuo`);
    } else {
        console.log(`Source not found: ${srcPath}`);
    }
}
