// Klik biasa ditangani aplikasi; ctrl/cmd/shift-klik tetap membuka tab baru.
export function plainClick(handler) {
  return (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    handler();
  };
}
