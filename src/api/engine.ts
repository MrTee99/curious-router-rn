// @ts-ignore: No type definitions for 'metro-react-native-babel-transformer'
import metroTransformer from 'metro-react-native-babel-transformer';
import path from 'path';
import { generateRoutes } from './generate-routes';
import { resolveConfig } from './resolve-config';
import { resolvePaths } from './resolve-paths';

export type TransformerProps = {
  filename: string;
  plugins: (string | null)[];
  src: string;
  options: {
    customTransformOptions: Record<string, unknown>;
    dev: boolean;
    hot: boolean;
    inlinePlatform: boolean;
    minify: boolean;
    platform: string;
    unstable_transformProfile: string;
    experimentalImportSupport: boolean;
    unstable_disableES6Transforms: boolean;
    nonInlinedRequires: string[];
    type: string;
    inlineRequires: boolean;
    enableBabelRCLookup: boolean;
    enableBabelRuntime: boolean;
    globalPrefix: string;
    hermesParser: boolean;
    projectRoot: string;
    publicPath: string;
  };
};

export function transform(props: TransformerProps) {
  const engineConfig = resolveConfig(props.options.projectRoot);
  if (props.filename.startsWith(engineConfig.appEntryFilePath) || props.filename.startsWith(engineConfig.routesEntryFolderPath)) {
    const routesFolderPath = path.join(props.options.projectRoot, engineConfig.routesEntryFolderPath);
    const resolvedPaths = resolvePaths(routesFolderPath);
    generateRoutes('generated', 'routes.js', resolvedPaths);
  }
  return metroTransformer.transform(props);
}
