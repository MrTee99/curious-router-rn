export interface Route {
  name: string;
  component: () => React.JSX.Element;
}

export const routes: Route[];
