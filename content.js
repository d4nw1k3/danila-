const data = JSON.parse(localStorage.getItem("tableData") || "[]");
const tbody = document.querySelector("#table tbody");

// 5. INFO LĪMENIS: Procesora sākums
console.info(`[INFO] [${new Date().toLocaleTimeString()}] Content page loaded. Found ${data.length} items.`);

if (data.length === 0) {
  // Brīdinājums, ja nav datu
  console.warn(`[WARN] [${new Date().toLocaleTimeString()}] localStorage is empty.`);
  tbody.innerHTML = `<tr><td colspan="3">No styles added yet.</td></tr>`;
} else {
  data.forEach((item, index) => {
    // DEBUG LĪMENIS: Konteksts par katru rindu
    console.debug(`[DEBUG] Rendering row ${index}`, { name: item.Name });

    // Svarīgi: Jāizmanto <tr> un <td> tagi
    tbody.innerHTML += `
      <tr>
        <td>${item.Name}</td>
        <td>${item.Price}</td>
        <td><img src="${item.Image}" width="120" style="border-radius:10px;"></td>
      </tr>`;
  });
}