const unitOptions = [
    { id: 1, units: 1, discount: "10% OFF", price: 10.00, originalPrice: 24.00 },
    { id: 2, units: 2, discount: "20% OFF", price: 18.00, originalPrice: 24.00, mostPopular: true },
    { id: 3, units: 3, discount: "30% OFF", price: 24.00, originalPrice: 24.00 }
];

const container = document.getElementById("product-options");



function renderOptions() {
    container.innerHTML = "";
    unitOptions.forEach(option => {
        const optionDiv = document.createElement("div");
        optionDiv.classList.add(`unit${option.id}`);
        optionDiv.setAttribute("onclick", `selectOption(${option.id}, ${option.price})`);

        optionDiv.innerHTML = `
            <div class="first">
                <div class="unit">
                    <span>${option.units} Unit</span>
                    <span class="offer"> ${option.discount}</span>
                </div>
                <div>
                    <div class="price">$<span>${option.price.toFixed(2)}</span> USD</div>
                    <div class="cancelprice">$ ${option.originalPrice.toFixed(2)} USD</div>
                </div>
            </div>
            <div class="second">
                ${Array.from({ length: option.units }, (_, i) => `
                    <div class="detailshidden hidden" id="details${option.id}-${i + 1}">
                        <span class="srNo"> #${i + 1} </span>
                        <div>
                            <label class="optionSelector">Size <select>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select></label>
                        </div>
                        <div>
                            <label class="optionSelector">Color <select>
                                <option>Black</option>
                                <option>White</option>
                                <option>Red</option>
                                <option>Blue</option>
                            </select></label>
                        </div>
                    </div>
                `).join("")}
            </div>
        `;

        container.appendChild(optionDiv);
    });
}



function selectOption(units, price) {

    document.querySelectorAll(".detailshidden").forEach(det => det.classList.add("hidden"));
    document.querySelectorAll(`[id^=details${units}-]`).forEach(det => det.classList.remove("hidden"));
    document.querySelectorAll(".first").forEach(el => el.style.border = "none");
    document.querySelector(`.unit${units}`).style.border = "1px solid #FF6B82";

    document.getElementById("total-price").textContent = price.toFixed(2);
}

renderOptions();
