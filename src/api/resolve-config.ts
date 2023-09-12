import path from 'path';

export type CuriousRouterConfig = {
  routesEntryFolderPath: string;
  appEntryFilePath: string;
};

const defaultValues: CuriousRouterConfig = {
  routesEntryFolderPath: 'screens',
  appEntryFilePath: 'App',
};

const validateConfig = (obj: Record<keyof CuriousRouterConfig, unknown>): CuriousRouterConfig => {
  if (typeof obj !== 'object' || obj === null) return defaultValues;
  if (!!obj.routesEntryFolderPath === false || typeof obj.routesEntryFolderPath !== 'string') obj.routesEntryFolderPath = defaultValues.routesEntryFolderPath;
  if (!!obj.appEntryFilePath === false || typeof obj.appEntryFilePath !== 'string') obj.appEntryFilePath = defaultValues.appEntryFilePath;
  const { routesEntryFolderPath, appEntryFilePath } = obj;
  return { routesEntryFolderPath, appEntryFilePath } as CuriousRouterConfig;
};

export const resolveConfig = (projectRootPath: string): CuriousRouterConfig => {
  try {
    const configJson = require(path.join(projectRootPath, 'curious-router.config.json'));
    const parsedConfig = JSON.parse(configJson);
    return validateConfig(parsedConfig);
  } catch (error) {
    return defaultValues;
  }
};
