import fs from 'fs';
import path from 'path';

export type ComponentTypes = { page: string | null; layout: string | null };
const page = 'page';
const layout = 'layout';

export const resolvePaths = (routesFolderPath: string) => {
  const folders = fs.readdirSync(routesFolderPath);
  const paths: Record<string, ComponentTypes> = {};

  for (const folder of folders) {
    const folderPath = path.join(routesFolderPath, folder);
    const folderPathStat = fs.statSync(folderPath);

    if (folderPathStat.isFile()) continue;
    paths[folder] = { page: null, layout: null };

    const files = fs.readdirSync(folderPath);
    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const parsedFilePath = path.parse(filePath);
      const filePathStat = fs.statSync(filePath);

      if (filePathStat.isDirectory() || ['.js', '.ts', '.jsx', '.tsx'].includes(parsedFilePath.ext) === false) continue;

      const isPage = Boolean(parsedFilePath.name === page);
      const isLayout = Boolean(parsedFilePath.name === layout);
      const type = isPage ? page : isLayout ? layout : null;

      const filePathWithoutExtension = path.join(parsedFilePath.dir, parsedFilePath.name);
      if (type !== null) paths[folder][type] = filePathWithoutExtension;
    }
  }

  return paths;
};
