document.addEventListener('DOMContentLoaded', () => {
  /* =========================
   * 1) Lista de productos (con persistencia)
   * ========================= */
  const DEFAULT_PRODUCTS = [
    { sku: 'TC80', name: 'Termostato Calor - Chapa Movible (80 Grados)', price: 2610 },
    { sku: 'TC85', name: 'Termostato Calor - Chapa Movible (85 Grados)', price: 3480 },
    { sku: 'TCF', name: 'Termostato Calor - Chapa Fija (85 Grados)', price: 3770 },
    { sku: 'RFP', name: 'Regulador de Frio(Con y Sin Rulo)', price: 12905 },
    { sku: 'R90', name: 'Resistencia de 09cm', price: 8700 },
    { sku: 'R100', name: 'Resistencia de 10cm', price: 8700 },
    { sku: 'R115', name: 'Resistencia de 11,5cm', price: 8700 },
    { sku: 'R120', name: 'Resistencia de 12cm', price: 8700 },
    { sku: 'R130', name: 'Resistencia de 13cm', price: 8700 },
    { sku: 'R140', name: 'Resistencia de 14cm', price: 8700 },
    { sku: 'R160', name: 'Resistencia de 16cm', price: 8700 },
    { sku: 'INT', name: 'Interruptor de Agua Caliente', price: 2175 },
    { sku: 'CMS', name: 'Canilla Macho Simple (x2 unid.)', price: 4350 },
    { sku: 'CMC', name: 'Canilla Macho Chopera (x2 unid.)', price: 4350 },
    { sku: 'CHS', name: 'Canilla Hembra Simple (x2 unid.)', price: 7250 },
    { sku: 'CON', name: 'Conector de Canilla 16mm (x1)', price: 1450 },
    { sku: 'CONUS', name: 'Conector de Canilla 18mm (x1)', price: 1450 },
    { sku: 'CONTC', name: 'Conector de Tanque Codo (x1)', price: 2538 },
    { sku: 'CONTR', name: 'Conector de Tanque Recto (x1)', price: 2538 },
    { sku: 'MSD', name: 'Manguera Siliconada 5mm (x1 metro)', price: 5800 },
    { sku: 'MS', name: 'Manguera Siliconada 10mm (x1 metro)', price: 7250 },
    { sku: 'MSF', name: 'Manguera Siliconada 15mm (x1 metro)', price: 10150 },
    { sku: 'CP', name: 'Cable Power 220v', price: 5075 },
    { sku: 'FUS', name: 'Fusible 8a/10a - 20mm/30mm (x10 unidades)', price: 4350 },
    { sku: 'PFA', name: 'Porta-Fusible Aereo Completo 20mm/30mm', price: 3625 },
    { sku: 'PFC', name: 'Porta-Fusible Chasis Completo 20mm/30mm', price: 4350 },
    { sku: 'KE', name: 'Kit Espadita', price: 2175 },
    { sku: 'ANTG', name: 'Antiderrame Non-Spill Genérico', price: 14500 },
    { sku: 'ANTTR', name: 'Antiderrame Non-Spill Tria', price: 14500 },
    { sku: 'ANTB', name: 'Antiderrame Non-Spill Bacope', price: 23200 },
    { sku: 'ANTLH', name: 'Antiderrame Non-Spill Livore Hermanos (LH)', price: 17400 },
    { sku: 'ANTUSH', name: 'Antiderrame Non-Spill Ushuaia', price: 21750 },
    { sku: 'CALD120', name: 'Caldera Completa 120mm', price: 47850 },
    { sku: 'CALD140', name: 'Caldera Completa 140mm', price: 62350 },
    { sku: 'PV', name: 'Porta-Vasos (Genérico)', price: 5800 },
    { sku: 'BUS', name: 'Bandeja / Gotero Ushuaia', price: 10875 },
    { sku: 'BND', name: 'Bandeja / Gotero Bacope ND10', price: 9425 },
    { sku: 'BB', name: 'Bandeja / Gotero Bacope Antares / Zafiro', price: 10005 },
    { sku: 'BTP', name: 'Bandeja / Gotero Termoplast', price: 10875 },
    { sku: 'BTR', name: 'Bandeja / Gotero Tria', price: 7975 },
    { sku: 'MOTH', name: 'Motor Dispenser Huayi 1/10HP', price: 72500 },
    { sku: 'PTC', name: 'Protector Térmico + Relay', price: 10875 },
    { sku: 'COND', name: 'Condensador Genérico de Pie/de Mesada', price: 13050 },
    { sku: 'FM', name: 'Filtro Molecular', price: 2900 },
    { sku: 'TSTP', name: 'Tapa Superior Termoplast Termoformada (Bidón)', price: 21750 },
    { sku: 'TSTR', name: 'Tapa Superior Tria Patagonia (Bidón)', price: 10150 },
    { sku: 'TSTRR', name: 'Tapa Superior Tria Patagonia (Red)', price: 10150 },
    { sku: 'FSTR', name: 'Frente Superior Tria', price: 11600 },
    { sku: 'TITR', name: 'Frente Inferior Tria', price: 12325 },
    { sku: 'LTR', name: 'Lateral Tria Patagonia', price: 17400 },
    { sku: 'TSU', name: 'Tapa Superior Ushuaia (Bidón)', price: 20300 },
    { sku: 'TSUR', name: 'Tapa Superior Ushuaia (Red)', price: 20300 },
    { sku: 'FUSH', name: 'Frente Completo Ushuaia', price: 55100 },
    { sku: 'TSBA', name: 'Tapa Superior Bacope Antares (Bidón)', price: 17400 },
    { sku: 'TSBZ', name: 'Tapa Superior Bacope Zafiro (Bidón)', price: 17400 },
    { sku: 'TSBAR', name: 'Tapa Superior Bacope Antares (Red)', price: 17400 },
    { sku: 'TSBZR', name: 'Tapa Superior Bacope Zafiro (Red)', price: 17400 },
    { sku: 'TAPC', name: 'Tapa Ciega 18cm Diámetro', price: 3625 },
    { sku: 'FLOT', name: 'Flotante Modelo Genérico 19mm', price: 21750 },
    { sku: 'RED', name: 'Reductor 1/2 a 1/4 Acople Rápido', price: 3625 },
    { sku: 'LLP', name: 'Llave de Paso 1/4\"', price: 3625 },
    { sku: 'MT', name: 'Manguera Tubo 1/4\" x1m', price: 2175 },
    { sku: 'EXT', name: 'Extensión Acople Rápido', price: 2538 },
    { sku: 'CODAR', name: 'Conector Codo Doble Acople Rápido', price: 2538 },
    { sku: 'CODF', name: 'Conector Codo Filtro Con Un Acople Rápido', price: 2538 },
    { sku: 'ARR', name: 'Acople Rápido Filtro', price: 2538 },
    { sku: 'KFIL', name: 'Par de filtros con (4) acoples rápido', price: 65250 },
    { sku: 'MP50', name: 'Filtro Dispenser de Red MP50', price: 70905 },
  ];

  const STORAGE_KEY = 'priceList';
  const loadPriceList = () => {
    const raw = localStorage.getItem(STORAGE_KEY);
    try {
      const parsed = raw ? JSON.parse(raw) : null;
      if (Array.isArray(parsed) && parsed.every(p => p.sku && p.name && typeof p.price === 'number')) {
        return parsed;
      }
    } catch {}
    return [...DEFAULT_PRODUCTS];
  };
  const savePriceList = (list) => localStorage.setItem(STORAGE_KEY, JSON.stringify(list));

  let productsData = loadPriceList(); // editable
  let quoteProducts = [];

  /* =========================
   * 2) Referencias DOM
   * ========================= */
  // Vistas
  const viewQuote = document.getElementById('view-quote');
  const viewProducts = document.getElementById('view-products');
  const sidebarLinks = document.querySelectorAll('.sidebar a[data-view]');

  // Cotización
  const quoteForm = document.getElementById('quote-form');
  const clientFormSection = document.getElementById('section-client-info');
  const productsSection = document.getElementById('section-products');

  const quoteNumberInput = document.getElementById('quote-number');
  const quoteDateInput = document.getElementById('quote-date');
  const clientNameInput = document.getElementById('client-name');
  const clientContactInput = document.getElementById('client-contact');
  const clientAddressInput = document.getElementById('client-address');
  const clientLocationInput = document.getElementById('client-location');

  const productSearchInput = document.getElementById('product-search');
  const suggestionsList = document.getElementById('suggestions-list');
  const addProductBtn = document.getElementById('add-product-btn');
  const productsListTableBody = document.getElementById('products-list-table')?.getElementsByTagName('tbody')[0];

  const subtotalEl = document.getElementById('subtotal-value');
  const discountInput = document.getElementById('discount-input');
  const discountEl = document.getElementById('discount-value');
  const finalTotalEl = document.getElementById('final-total-value');

  const generatePdfBtn = document.getElementById('generate-pdf-btn');

  // Gestor de productos
  const pmTableBody = document.querySelector('#pm-table tbody');
  const pmSearch = document.getElementById('pm-search');
  const pmAddBtn = document.getElementById('pm-add-btn');
  const pmResetBtn = document.getElementById('pm-reset-btn');

  const pmModal = document.getElementById('pm-modal');
  const pmModalTitle = document.getElementById('pm-modal-title');
  const pmSku = document.getElementById('pm-sku');
  const pmName = document.getElementById('pm-name');
  const pmPrice = document.getElementById('pm-price');
  const pmError = document.getElementById('pm-error');
  const pmSave = document.getElementById('pm-save-btn');
  const pmDelete = document.getElementById('pm-delete-btn');
  const pmCancel = document.getElementById('pm-cancel-btn');
  const pmClose = document.getElementById('pm-modal-close');

  let pmEditingSku = null; // null = alta, string = edición

  /* =========================
   * 3) Navegación entre vistas
   * ========================= */
  function showView(id) {
    viewQuote.hidden = id !== 'view-quote';
    viewProducts.hidden = id !== 'view-products';
    sidebarLinks.forEach(a => a.classList.toggle('active', a.dataset.view === id));
    if (id === 'view-products') renderProductsAdmin();
  }

  sidebarLinks.forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = a.dataset.view;
      if (id === 'view-history') return; // aún no implementado
      showView(id);
    });
  });

  /* =========================
   * 4) Cotización
   * ========================= */
  const toggleSectionEnabled = (sectionElement, isEnabled) => {
    if (!sectionElement) return;
    sectionElement.classList.toggle('disabled', !isEnabled);
    const allInputs = sectionElement.querySelectorAll('input, button');
    allInputs.forEach(el => el.disabled = !isEnabled);
  };

  const updateFormSectionsUI = () => {
    const quoteInfoIsValid = quoteNumberInput?.value?.trim() !== '' && quoteDateInput?.value?.trim() !== '';
    toggleSectionEnabled(clientFormSection, quoteInfoIsValid);

    const clientInfoIsValid =
      clientNameInput?.value?.trim() !== '' &&
      clientContactInput?.value?.trim() !== '' &&
      clientAddressInput?.value?.trim() !== '' &&
      clientLocationInput?.value?.trim() !== '';
    toggleSectionEnabled(productsSection, quoteInfoIsValid && clientInfoIsValid);

    const productsAdded = quoteProducts.length > 0;
    generatePdfBtn.disabled = !productsAdded;
    calculateTotal();
  };

  // Fecha por defecto: hoy
  if (quoteDateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    quoteDateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  quoteForm?.addEventListener('input', updateFormSectionsUI);

  // Buscador con sugerencias (dinámico con productsData)
  productSearchInput?.addEventListener('input', () => {
    const term = productSearchInput.value.toLowerCase().trim();
    suggestionsList.innerHTML = '';
    addProductBtn.disabled = true;
    delete addProductBtn.dataset.selectedSku;

    if (!term) {
      suggestionsList.style.display = 'none';
      return;
    }

    const filtered = productsData.filter(
      (p) => p.sku.toLowerCase().includes(term) || p.name.toLowerCase().includes(term)
    );

    filtered.forEach((product) => {
      const li = document.createElement('li');
      li.classList.add('suggestions-list-item');
      li.textContent = `${product.sku} - ${product.name}`;
      li.dataset.sku = product.sku;
      suggestionsList.appendChild(li);
    });

    suggestionsList.style.display = filtered.length ? 'block' : 'none';
  });

  suggestionsList?.addEventListener('click', (event) => {
    const li = event.target.closest('.suggestions-list-item');
    if (!li) return;
    const selected = productsData.find((p) => p.sku === li.dataset.sku);
    if (!selected) return;

    productSearchInput.value = `${selected.sku} - ${selected.name}`;
    suggestionsList.style.display = 'none';
    addProductBtn.dataset.selectedSku = selected.sku;
    addProductBtn.disabled = false;
  });

  productSearchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!addProductBtn.disabled) addProductBtn.click();
    }
  });

  addProductBtn?.addEventListener('click', () => {
    const selectedSku = addProductBtn.dataset.selectedSku;
    if (!selectedSku) return;
    const productToAdd = productsData.find((p) => p.sku === selectedSku);
    if (!productToAdd) return;

    const existing = quoteProducts.find((p) => p.sku === selectedSku);
    if (existing) {
      existing.quantity += 1;
      existing.price = productToAdd.price; // asegura precio actualizado
      existing.name = productToAdd.name;
    } else {
      quoteProducts.push({
        sku: productToAdd.sku,
        name: productToAdd.name,
        quantity: 1,
        price: productToAdd.price,
      });
    }

    updateProductsTable();
    updateFormSectionsUI();
    productSearchInput.value = '';
    addProductBtn.disabled = true;
    delete addProductBtn.dataset.selectedSku;
  });

  // Tabla de cotización → etiquetas para mobile
  function labelizeCells(row, labels){
    Array.from(row.children).forEach((td, i) => td.setAttribute('data-label', labels[i] || ''));
  }

  function updateProductsTable() {
    if (!productsListTableBody) return;
    productsListTableBody.innerHTML = '';
    const labels = ['SKU','Nombre del Producto','Cantidad','P. Unidad','P. Total','Acción'];

    quoteProducts.forEach((product, index) => {
      const row = productsListTableBody.insertRow();
      row.innerHTML = `
        <td>${product.sku}</td>
        <td>${product.name}</td>
        <td><input type="number" value="${product.quantity}" min="1" class="quantity-input" data-index="${index}" /></td>
        <td>$${product.price.toLocaleString('es-AR')}</td>
        <td>$${(product.price * product.quantity).toLocaleString('es-AR')}</td>
        <td><button type="button" class="remove-btn" data-index="${index}">Eliminar</button></td>
      `;
      labelizeCells(row, labels);
    });
  }

  productsListTableBody?.addEventListener('input', (event) => {
    const input = event.target.closest('.quantity-input');
    if (!input) return;
    const index = Number(input.dataset.index);
    const newQty = parseInt(input.value, 10);
    if (!isNaN(newQty) && newQty > 0) {
      quoteProducts[index].quantity = newQty;
      updateProductsTable();
      calculateTotal();
    }
  });

  productsListTableBody?.addEventListener('click', (event) => {
    const btn = event.target.closest('.remove-btn');
    if (!btn) return;
    const index = Number(btn.dataset.index);
    quoteProducts.splice(index, 1);
    updateProductsTable();
    calculateTotal();
    updateFormSectionsUI();
  });

  const calculateTotal = () => {
    const subtotal = quoteProducts.reduce((acc, p) => acc + p.price * p.quantity, 0);
    let discountPercentage = 0;
    if (discountInput) {
      discountPercentage = parseFloat(discountInput.value) || 0;
      if (discountPercentage < 0 || discountPercentage > 100) {
        discountPercentage = 0;
        discountInput.value = 0;
      }
    }
    const discountAmount = subtotal * (discountPercentage / 100);
    const finalTotal = Math.max(subtotal - discountAmount, 0);

    subtotalEl.textContent = `$${subtotal.toLocaleString('es-AR')}`;
    discountEl.textContent = `${discountPercentage}%`;
    finalTotalEl.textContent = `$${finalTotal.toLocaleString('es-AR')}`;
  };

  discountInput?.addEventListener('input', calculateTotal);

  // PDF
  document.getElementById('generate-pdf-btn')?.addEventListener('click', () => {
    const pdfTemplate = document.getElementById('pdf-template');
    if (!pdfTemplate) return;

    pdfTemplate.querySelector('#pdf-quote-number').textContent = quoteNumberInput.value || '';
    pdfTemplate.querySelector('#pdf-quote-date').textContent = quoteDateInput.value || '';
    pdfTemplate.querySelector('#pdf-client-name').textContent = clientNameInput.value || '';
    pdfTemplate.querySelector('#pdf-client-contact').textContent = clientContactInput.value || '';
    pdfTemplate.querySelector('#pdf-client-address').textContent = clientAddressInput.value || '';
    pdfTemplate.querySelector('#pdf-client-location').textContent = clientLocationInput.value || '';
    pdfTemplate.querySelector('#pdf-subtotal').textContent = subtotalEl.textContent;
    pdfTemplate.querySelector('#pdf-discount').textContent = `${parseFloat(discountInput.value) || 0}%`;
    pdfTemplate.querySelector('#pdf-final-total').textContent = finalTotalEl.textContent;

    const productsBody = pdfTemplate.querySelector('#pdf-products-body');
    productsBody.innerHTML = '';
    quoteProducts.forEach((p) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${p.sku}</td>
        <td>${p.name}</td>
        <td>${p.quantity}</td>
        <td>$${p.price.toLocaleString('es-AR')}</td>
        <td>$${(p.price * p.quantity).toLocaleString('es-AR')}</td>
      `;
      productsBody.appendChild(tr);
    });

    pdfTemplate.style.display = 'block';
    html2canvas(pdfTemplate, { backgroundColor: '#ffffff', scale: 2 }).then((canvas) => {
      const { jsPDF } = window.jspdf;
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      const clientNameSan = (clientNameInput?.value || 'cliente').replace(/[^a-zA-Z0-9_-]/g, '');
      const quoteNumberSan = (quoteNumberInput?.value || 'presupuesto').replace(/[^a-zA-Z0-9_-]/g, '');
      pdf.save(`${quoteNumberSan}-${clientNameSan}-Presupuesto.pdf`);
      pdfTemplate.style.display = 'none';
    });
  });

  /* =========================
   * 5) Gestor de productos (CRUD)
   * ========================= */
  function renderProductsAdmin(list = productsData){
    pmTableBody.innerHTML = '';
    const labels = ['SKU','Nombre','Precio','Acciones'];

    list.forEach(p => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${p.sku}</td>
        <td>${p.name}</td>
        <td>$${p.price.toLocaleString('es-AR')}</td>
        <td>
          <button type="button" class="pm-edit" data-sku="${p.sku}">Editar</button>
          <button type="button" class="remove-btn pm-del" data-sku="${p.sku}">Borrar</button>
        </td>
      `;
      Array.from(tr.children).forEach((td, i) => td.setAttribute('data-label', labels[i]));
      pmTableBody.appendChild(tr);
    });
  }

  function openModal({ mode, product }){
    pmError.hidden = true;
    if (mode === 'create'){
      pmModalTitle.textContent = 'Nuevo producto';
      pmSku.value = '';
      pmName.value = '';
      pmPrice.value = '';
      pmDelete.hidden = true;
      pmEditingSku = null;
    } else {
      pmModalTitle.textContent = 'Editar producto';
      pmSku.value = product.sku;
      pmName.value = product.name;
      pmPrice.value = product.price;
      pmDelete.hidden = false;
      pmEditingSku = product.sku;
    }
    pmModal.hidden = false;
    pmSku.focus();
  }
  function closeModal(){ pmModal.hidden = true; }

  pmAddBtn?.addEventListener('click', () => openModal({mode:'create'}));
  pmCancel?.addEventListener('click', closeModal);
  pmClose?.addEventListener('click', closeModal);

  pmSave?.addEventListener('click', () => {
    const sku = pmSku.value.trim().toUpperCase();
    const name = pmName.value.trim();
    const price = Number(pmPrice.value);

    if (!sku || !name || isNaN(price) || price < 0){
      pmError.textContent = 'Completá SKU, Nombre y un Precio válido.';
      pmError.hidden = false;
      return;
    }

    if (!pmEditingSku){
      // Alta
      if (productsData.some(p => p.sku === sku)){
        pmError.textContent = 'Ya existe un producto con ese SKU.';
        pmError.hidden = false;
        return;
      }
      productsData.push({ sku, name, price });
    } else {
      // Edición (permite cambiar SKU)
      if (sku !== pmEditingSku && productsData.some(p => p.sku === sku)){
        pmError.textContent = 'Ya existe un producto con ese nuevo SKU.';
        pmError.hidden = false;
        return;
      }
      const idx = productsData.findIndex(p => p.sku === pmEditingSku);
      if (idx >= 0){
        productsData[idx] = { sku, name, price };
        // sincronizar productos ya agregados a la cotización
        quoteProducts = quoteProducts.map(qp => qp.sku === pmEditingSku
          ? { ...qp, sku, name, price }
          : qp
        );
        updateProductsTable();
        calculateTotal();
      }
    }

    savePriceList(productsData);
    renderProductsAdmin();
    closeModal();
  });

  pmTableBody?.addEventListener('click', (e) => {
    const editBtn = e.target.closest('.pm-edit');
    const delBtn  = e.target.closest('.pm-del');
    if (editBtn){
      const sku = editBtn.dataset.sku;
      const product = productsData.find(p => p.sku === sku);
      if (product) openModal({mode:'edit', product});
    }
    if (delBtn){
      const sku = delBtn.dataset.sku;
      if (!confirm(`¿Eliminar producto ${sku}?`)) return;
      productsData = productsData.filter(p => p.sku !== sku);
      quoteProducts = quoteProducts.filter(qp => qp.sku !== sku);
      updateProductsTable();
      calculateTotal();
      savePriceList(productsData);
      renderProductsAdmin();
    }
  });

  pmResetBtn?.addEventListener('click', () => {
    if (!confirm('Esto restaurará la lista por defecto y perderás cambios.')) return;
    productsData = [...DEFAULT_PRODUCTS];
    savePriceList(productsData);
    renderProductsAdmin();
  });

  pmSearch?.addEventListener('input', () => {
    const t = pmSearch.value.toLowerCase().trim();
    const filtered = !t ? productsData
      : productsData.filter(p => p.sku.toLowerCase().includes(t) || p.name.toLowerCase().includes(t));
    renderProductsAdmin(filtered);
  });

  /* =========================
   * 6) Estado inicial
   * ========================= */
  updateFormSectionsUI();
  renderProductsAdmin(productsData);
  showView('view-quote'); // sólo Cotización visible al inicio
});
