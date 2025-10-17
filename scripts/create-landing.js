import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const landingHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SolidBento - Cancer.gov Projects</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div class="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 flex items-center justify-center p-8">
    <div class="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-12">
      <h1 class="text-5xl font-bold text-blue-900 mb-4">
        SolidBento Projects
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        Select a project to explore cancer research data and resources
      </p>

      <!-- Demo Note -->
      <div class="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
        <div class="flex">
          <div class="ml-3">
            <p class="text-sm text-green-700">
              <strong>Note:</strong> This is an experiment to moving Bento to a modular, modern, responsive design using SolidJS and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>

      <!-- Project Links -->
      <div class="space-y-4">
        <!-- C3DC -->
        <a href="/SolidBento/c3dc/" class="block group">
          <div class="p-6 bg-gray-50 rounded-xl border-2 border-transparent hover:border-blue-900 hover:bg-blue-900 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg">
            <h2 class="text-2xl font-semibold text-gray-900 group-hover:text-white mb-2">
              C3DC
            </h2>
            <p class="text-sm text-gray-600 group-hover:text-blue-100">
              Childhood Cancer Clinical Data Commons
            </p>
          </div>
        </a>

        <!-- GC -->
        <a href="/SolidBento/gc/" class="block group">
          <div class="p-6 bg-gray-50 rounded-xl border-2 border-transparent hover:border-blue-900 hover:bg-blue-900 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg">
            <h2 class="text-2xl font-semibold text-gray-900 group-hover:text-white mb-2">
              General Commons
            </h2>
            <p class="text-sm text-gray-600 group-hover:text-blue-100">
              General cancer research data platform
            </p>
          </div>
        </a>

        <!-- CCDI Hub -->
        <a href="/SolidBento/ccdi-hub/" class="block group">
          <div class="p-6 bg-gray-50 rounded-xl border-2 border-transparent hover:border-blue-900 hover:bg-blue-900 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg">
            <h2 class="text-2xl font-semibold text-gray-900 group-hover:text-white mb-2">
              CCDI Hub
            </h2>
            <p class="text-sm text-gray-600 group-hover:text-blue-100">
              Childhood Cancer Data Initiative Hub
            </p>
          </div>
        </a>
      </div>

      <!-- Footer -->
      <div class="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
        Cancer.gov Research Data Platforms
      </div>
    </div>
  </div>
</body>
</html>`;

// Create dist directory if it doesn't exist
const distDir = path.resolve(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Write landing page
fs.writeFileSync(path.join(distDir, 'index.html'), landingHTML);
console.log('✓ Landing page created at dist/index.html');
