import fs from 'fs';
import path from 'path';
import { ComponentTypes } from './resolve-paths';

export const generateRoutes = (generatedRoutesFolderName: string, generatedRoutesFileName: string, resolvedPaths: Record<string, ComponentTypes>) => {
  const filteredPagePaths = Object.keys(resolvedPaths).filter((key) => Boolean(resolvedPaths[key]['page'] !== null));

  const routesFileContent = [];
  routesFileContent.push('const routes = [];\n');
  filteredPagePaths.forEach((pathKey) => resolvedPaths[pathKey]['page'] !== null && routesFileContent.push(handleImportStatements(pathKey, resolvedPaths[pathKey]['page'])));
  routesFileContent.push('module.exports = { routes };');

  const generatedRoutesFolderPath = path.join(__dirname, `../${generatedRoutesFolderName}`);
  const generatedRoutesFilePath = path.join(generatedRoutesFolderPath, generatedRoutesFileName);
  if (!fs.existsSync(generatedRoutesFolderPath)) fs.mkdirSync(generatedRoutesFolderPath); // Create the directory
  fs.writeFileSync(generatedRoutesFilePath, routesFileContent.join('\n')); // Create the file inside the directory
};

const handleImportStatements = (key: string, value: string | null) => {
  if (value === null) return '';
  return `try {
  const ${key} = require('${value}').default;
  routes.push({ name: '${key}', component: ${key} });
} catch (error) {}
`;
};
