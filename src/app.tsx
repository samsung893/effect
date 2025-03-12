import { useContext } from "react";
import * as styles from "styles/components.css";
import { UploadImage } from "./components";
import { ListEffect } from "./components/ListEffect";
import AppContext from "./context/AppProvider";

export const App = () => {
  const { previewImage } =
    useContext(AppContext);

  return (
    <>
      <div className={styles.scrollContainer}>
        {/* <Box
        display="flex"
        flexDirection="column"
        height="full"
        className={styles.boxGap2u}
      > */}
        {/* {message && (
            <Alert tone="critical" onDismiss={resetMessage}>
              {message}
            </Alert>
          )} */}

        <UploadImage />
        {previewImage && <ListEffect />}
      </div>
    </>
  );
};
