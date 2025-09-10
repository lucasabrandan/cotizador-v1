document.addEventListener('DOMContentLoaded', () => {
    // Datos de productos
    const productsData = [
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
        { sku: 'RED', name: 'Reductor $1/2$ a 1/4 Acople Rápido', price: 3625 },
        { sku: 'LLP', name: 'Llave de Paso 1/4"', price: 3625 },
        { sku: 'MT', name: 'Manguera Tubo 1/4" x1m', price: 2175 },
        { sku: 'EXT', name: 'Extensión Acople Rápido', price: 2538 },
        { sku: 'CODAR', name: 'Conector Codo Doble Acople Rápido', price: 2538 },
        { sku: 'CODF', name: 'Conector Codo Filtro Con Un Acople Rápido', price: 2538 },
        { sku: 'ARR', name: 'Acople Rápido Filtro', price: 2538 },
        { sku: 'KFIL', name: 'Par de filtros con (4) acoples rápido', price: 65250 },
        { sku: 'MP50', name: 'Filtro Dispenser de Red MP50', price: 70905 }
    ];

    let quoteProducts = [];

    // Elementos del DOM. Se usa `?` para evitar errores si no se encuentran los elementos.
    const quoteForm = document.getElementById('quote-form');
    const quoteInfoSection = document.getElementById('section-quote-info');
    const clientFormSection = document.getElementById('section-client-info');
    const productsSection = document.getElementById('section-products');
    const totalsSection = document.getElementById('section-totals');

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

    /**
     * Habilita/deshabilita una sección completa del formulario.
     * @param {HTMLElement} sectionElement - La sección del formulario.
     * @param {boolean} isEnabled - True para habilitar, false para deshabilitar.
     */
    const toggleSectionEnabled = (sectionElement, isEnabled) => {
        if (!sectionElement) return;
        sectionElement.classList.toggle('disabled', !isEnabled);
        const allInputs = sectionElement.querySelectorAll('input, button');
        allInputs.forEach(el => el.disabled = !isEnabled);
    };

    /**
     * Actualiza el estado de las secciones del formulario.
     */
    const updateFormSectionsUI = () => {
        const quoteInfoIsValid = quoteNumberInput?.value?.trim() !== '' && quoteDateInput?.value?.trim() !== '';
        toggleSectionEnabled(clientFormSection, quoteInfoIsValid);

        const clientInfoIsValid = clientNameInput?.value?.trim() !== '' && clientContactInput?.value?.trim() !== '' && clientAddressInput?.value?.trim() !== '' && clientLocationInput?.value?.trim() !== '';
        toggleSectionEnabled(productsSection, quoteInfoIsValid && clientInfoIsValid);

        const productsAdded = quoteProducts.length > 0;
        toggleSectionEnabled(totalsSection, productsAdded);
        if (generatePdfBtn) {
            generatePdfBtn.disabled = !productsAdded;
        }

        calculateTotal();
    };

    // Escucha los cambios en todo el formulario para actualizar la UI
    if (quoteForm) {
        quoteForm.addEventListener('input', updateFormSectionsUI);
    }

    // Lógica para el campo de búsqueda con sugerencias
    if (productSearchInput) {
        productSearchInput.addEventListener('input', () => {
            const searchTerm = productSearchInput.value.toLowerCase();
            if (suggestionsList) {
                suggestionsList.innerHTML = '';
                if (searchTerm.length > 0) {
                    const filteredProducts = productsData.filter(product =>
                        product.sku.toLowerCase().includes(searchTerm) ||
                        product.name.toLowerCase().includes(searchTerm)
                    );
                    filteredProducts.forEach(product => {
                        const li = document.createElement('li');
                        li.classList.add('suggestions-list-item');
                        li.textContent = `${product.sku} - ${product.name}`;
                        li.dataset.sku = product.sku;
                        suggestionsList.appendChild(li);
                    });
                    suggestionsList.style.display = 'block';
                } else {
                    suggestionsList.style.display = 'none';
                }
            }
        });
    }

    if (suggestionsList) {
        suggestionsList.addEventListener('click', (event) => {
            const selectedSku = event.target.dataset.sku;
            if (selectedSku) {
                const selectedProduct = productsData.find(product => product.sku === selectedSku);
                productSearchInput.value = `${selectedProduct.sku} - ${selectedProduct.name}`;
                suggestionsList.style.display = 'none';
                if (addProductBtn) {
                    addProductBtn.dataset.selectedSku = selectedProduct.sku;
                }
            }
        });
    }

    // Lógica para agregar productos a la tabla
    if (addProductBtn) {
        addProductBtn.addEventListener('click', () => {
            const selectedSku = addProductBtn.dataset.selectedSku;
            if (selectedSku) {
                const productToAdd = productsData.find(p => p.sku === selectedSku);
                if (productToAdd) {
                    const existingProduct = quoteProducts.find(p => p.sku === selectedSku);
                    if (existingProduct) {
                        existingProduct.quantity += 1;
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
                    
                    if (productSearchInput) {
                        productSearchInput.value = '';
                    }
                    delete addProductBtn.dataset.selectedSku;
                }
            }
        });
    }

    /**
     * Renderiza la tabla de productos de la cotización.
     */
    function updateProductsTable() {
        if (!productsListTableBody) return;
        productsListTableBody.innerHTML = '';
        quoteProducts.forEach((product, index) => {
            const row = productsListTableBody.insertRow();
            row.innerHTML = `
                <td>${product.sku}</td>
                <td>${product.name}</td>
                <td><input type="number" value="${product.quantity}" min="1" class="quantity-input" data-index="${index}"></td>
                <td>$${product.price.toLocaleString('es-AR')}</td>
                <td>$${(product.price * product.quantity).toLocaleString('es-AR')}</td>
                <td><button type="button" class="remove-btn" data-index="${index}">Eliminar</button></td>
            `;
        });
    }

    if (productsListTableBody) {
        productsListTableBody.addEventListener('input', (event) => {
            if (event.target.classList.contains('quantity-input')) {
                const index = event.target.dataset.index;
                const newQuantity = parseInt(event.target.value);
                if (!isNaN(newQuantity) && newQuantity > 0) {
                    quoteProducts[index].quantity = newQuantity;
                    updateProductsTable();
                    calculateTotal();
                }
            }
        });

        productsListTableBody.addEventListener('click', (event) => {
            if (event.target.classList.contains('remove-btn')) {
                const index = event.target.dataset.index;
                quoteProducts.splice(index, 1);
                updateProductsTable();
                calculateTotal();
                updateFormSectionsUI();
            }
        });
    }

    /**
     * Calcula y actualiza los totales de la cotización, incluyendo el descuento.
     */
    const calculateTotal = () => {
        let subtotal = 0;
        quoteProducts.forEach(product => subtotal += product.price * product.quantity);
        
        let discountPercentage = 0;
        // Check if the discountInput element exists before trying to read its value
        if (discountInput) {
            discountPercentage = parseFloat(discountInput.value) || 0;
            if (discountPercentage < 0 || discountPercentage > 100) {
                discountPercentage = 0;
                discountInput.value = 0;
            }
        }

        const discountAmount = subtotal * (discountPercentage / 100);
        let finalTotal = subtotal - discountAmount;
        
        if (finalTotal < 0) finalTotal = 0;

        if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString('es-AR')}`;
        if (discountEl) discountEl.textContent = `${discountPercentage}%`;
        if (finalTotalEl) finalTotalEl.textContent = `$${finalTotal.toLocaleString('es-AR')}`;
    };

    // Lógica para el campo de descuento
    if (discountInput) {
        discountInput.addEventListener('input', calculateTotal);
    }
    
    // Lógica para generar PDF
    if (generatePdfBtn) {
        generatePdfBtn.addEventListener('click', () => {
            const pdfTemplate = document.getElementById('pdf-template');
            if (!pdfTemplate) {
                console.error('PDF template not found.');
                return;
            }
            
            // Populate the PDF template with current data
            const pdfQuoteNumber = pdfTemplate.querySelector('#pdf-quote-number');
            const pdfQuoteDate = pdfTemplate.querySelector('#pdf-quote-date');
            const pdfClientName = pdfTemplate.querySelector('#pdf-client-name');
            const pdfClientContact = pdfTemplate.querySelector('#pdf-client-contact');
            const pdfClientAddress = pdfTemplate.querySelector('#pdf-client-address');
            const pdfClientLocality = pdfTemplate.querySelector('#pdf-client-locality');
            const pdfSubtotal = pdfTemplate.querySelector('#pdf-subtotal');
            const pdfDiscount = pdfTemplate.querySelector('#pdf-discount');
            const pdfFinalTotal = pdfTemplate.querySelector('#pdf-final-total');

            if (pdfQuoteNumber && quoteNumberInput) pdfQuoteNumber.textContent = quoteNumberInput.value;
            if (pdfQuoteDate && quoteDateInput) pdfQuoteDate.textContent = quoteDateInput.value;
            if (pdfClientName && clientNameInput) pdfClientName.textContent = clientNameInput.value;
            if (pdfClientContact && clientContactInput) pdfClientContact.textContent = clientContactInput.value;
            if (pdfClientAddress && clientAddressInput) pdfClientAddress.textContent = clientAddressInput.value;
            if (pdfClientLocality && clientLocationInput) pdfClientLocality.textContent = clientLocationInput.value;
            if (pdfSubtotal && subtotalEl) pdfSubtotal.textContent = subtotalEl.textContent;
            if (pdfDiscount && discountInput) pdfDiscount.textContent = `${parseFloat(discountInput.value) || 0}%`;
            if (pdfFinalTotal && finalTotalEl) pdfFinalTotal.textContent = finalTotalEl.textContent;

            const productsBody = pdfTemplate.querySelector('#pdf-products-body');
            if (productsBody) {
                productsBody.innerHTML = '';
                quoteProducts.forEach(p => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${p.sku}</td>
                        <td>${p.name}</td>
                        <td>${p.quantity}</td>
                        <td>$${p.price.toLocaleString('es-AR')}</td>
                        <td>$${(p.price * p.quantity).toLocaleString('es-AR')}</td>
                    `;
                    productsBody.appendChild(row);
                });
            }
            
            pdfTemplate.style.display = 'block';

            html2canvas(pdfTemplate, {
                backgroundColor: '#121212',
                scale: 2
            }).then(canvas => {
                const { jsPDF } = window.jspdf;
                const imgData = canvas.toDataURL('image/jpeg');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgWidth = 210;
                const pageHeight = 297;  
                const imgHeight = canvas.height * imgWidth / canvas.width;
                let heightLeft = imgHeight;
                let position = 0;

                pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;

                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }

                const clientName = clientNameInput?.value?.replace(/[^a-zA-Z0-9]/g, '') || 'cliente';
                const quoteNumber = quoteNumberInput?.value?.replace(/[^a-zA-Z0-9]/g, '') || 'presupuesto';
                const filename = `${quoteNumber}-${clientName}-Presupuesto.pdf`;
                
                pdf.save(filename);
                pdfTemplate.style.display = 'none';
            });
        });
    }

    // Estado inicial de la UI
    updateFormSectionsUI();
});