```js
import { SnackbarProvider, useSnackbar } from "./Snackbar";
function DisplaySnackbar() {
  const { addMessage } = useSnackbar();
  return (
    <>
      <button onClick={() => addMessage("Snackbar 1")}>
        Display snackbar 1
      </button>
      <button onClick={() => addMessage("Snackbar 2")}>
        Display snackbar 2
      </button>
    </>
  );
}
<SnackbarProvider>
  <DisplaySnackbar />
</SnackbarProvider>;
```
