export * from './engine';
export type { CuriousRouterConfig } from './resolve-config';

// {
//   "filename": "App.tsx",
//   "options": {
//     "customTransformOptions": {},
//     "dev": true,
//     "hot": true,
//     "inlinePlatform": true,
//     "minify": false,
//     "platform": "ios",
//     "unstable_transformProfile": "default",
//     "experimentalImportSupport": false,
//     "unstable_disableES6Transforms": false,
//     "nonInlinedRequires": [],
//     "type": "module",
//     "inlineRequires": false,
//     "enableBabelRCLookup": true,
//     "enableBabelRuntime": true,
//     "globalPrefix": "",
//     "hermesParser": false,
//     "projectRoot": "/Users/tahir/Desktop/react-native-library/usage",
//     "publicPath": "/assets"
//   },
//   "plugins": [
//     null
//   ],
//   "src": "/**\n * Sample React Native App\n * https://github.com/facebook/react-native\n *\n * @format\n */\n\nimport React from 'react';\nimport type {PropsWithChildren} from 'react';\nimport {\n  SafeAreaView,\n  ScrollView,\n  StatusBar,\n  StyleSheet,\n  Text,\n  useColorScheme,\n  View,\n} from 'react-native';\n\nimport {\n  Colors,\n  DebugInstructions,\n  Header,\n  LearnMoreLinks,\n  ReloadInstructions,\n} from 'react-native/Libraries/NewAppScreen';\nimport { Home } from './pages/home/pages';\n\ntype SectionProps = PropsWithChildren<{\n  title: string;\n}>;\n\nfunction Section({children, title}: SectionProps): JSX.Element {\n  const isDarkMode = useColorScheme() === 'dark';\n  return (\n    <View style={styles.sectionContainer}>\n      <Text\n        style={[\n          styles.sectionTitle,\n          {\n            color: isDarkMode ? Colors.white : Colors.black,\n          },\n        ]}>\n        {title}\n      </Text>\n      <Text\n        style={[\n          styles.sectionDescription,\n          {\n            color: isDarkMode ? Colors.light : Colors.dark,\n          },\n        ]}>\n        {children}\n      </Text>\n    </View>\n  );\n}\n\nfunction App(): JSX.Element {\n  const isDarkMode = useColorScheme() === 'dark';\n\n  const backgroundStyle = {\n    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,\n  };\n\n  return (\n    <SafeAreaView style={backgroundStyle}>\n      <StatusBar\n        barStyle={isDarkMode ? 'light-content' : 'dark-content'}\n        backgroundColor={backgroundStyle.backgroundColor}\n      />\n      <ScrollView\n        contentInsetAdjustmentBehavior=\"automatic\"\n        style={backgroundStyle}>\n        <Header />\n        <View\n          style={{\n            backgroundColor: isDarkMode ? Colors.black : Colors.white,\n          }}>\n          <Section title=\"Step One\">\n            Edit <Text style={styles.highlight}>App.tsx</Text> to change this\n            screen and then come back to see your edits.sss\n          </Section>\n          <Section title=\"See Your Changes\">\n            <ReloadInstructions />\n          </Section>\n          <Section title=\"Debug\">\n            <DebugInstructions />\n          </Section>\n          <Section title=\"Learn More\">\n            Read the docs to discover what to do next:\n          </Section>\n          <LearnMoreLinks />\n        </View>\n      </ScrollView>\n      <Home />\n    </SafeAreaView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  sectionContainer: {\n    marginTop: 32,\n    paddingHorizontal: 24,\n  },\n  sectionTitle: {\n    fontSize: 24,\n    fontWeight: '600',\n  },\n  sectionDescription: {\n    marginTop: 8,\n    fontSize: 18,\n    fontWeight: '400',\n  },\n  highlight: {\n    fontWeight: '700',\n  },\n});\n\nexport default App;\n"
// }
