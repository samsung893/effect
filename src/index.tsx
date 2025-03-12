import { AppUiProvider } from "@canva/app-ui-kit";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "@canva/app-ui-kit/styles.css";
import { AppI18nProvider } from "@canva/app-i18n-kit";
import { AppProvider } from "./context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = createRoot(document.getElementById("root") as Element);
const queryClient = new QueryClient();

function render() {
  root.render(
    <AppI18nProvider>
      <AppUiProvider>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <App />
          </AppProvider>
        </QueryClientProvider>
      </AppUiProvider>
    </AppI18nProvider>,
  );
}

render();

if (module.hot) {
  module.hot.accept("./app", render);
}
