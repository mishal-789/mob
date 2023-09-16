document.addEventListener("DOMContentLoaded", function() {
    const brandSelect = document.getElementById("brand");
    const modelSelect = document.getElementById("model");
    const mobileForm = document.getElementById("mobileForm");
    const dataBody = document.getElementById("dataBody");

    // Brands and models data (customize this data as needed)
    const models = {
        "Apple": ["iPhone 12", "iPhone 13", "iPhone SE"],
        "Samsung": ["Galaxy S21", "Galaxy Note 20", "Galaxy A52"],
        "Google": ["Pixel 5", "Pixel 4a", "Pixel 3a"],
    };

    // Populate model options based on the selected brand
    brandSelect.addEventListener("change", () => {
        const selectedBrand = brandSelect.value;
        modelSelect.innerHTML = ""; // Clear existing options

        models[selectedBrand].forEach(model => {
            const option = document.createElement("option");
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    });

    // Handle form submission
    mobileForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const brand = brandSelect.value;
        const model = modelSelect.value;
        const usageYears = document.getElementById("usageYears").value;
        const futureModel = document.getElementById("futureModel").value;

        // Create a new row in the table
        const newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${brand}</td><td>${model}</td><td>${usageYears}</td><td>${futureModel}</td>`;
        dataBody.appendChild(newRow);

        // Clear the form
        mobileForm.reset();

        // Save data to CSV (you can use a library like PapaParse for more advanced CSV handling)
        const csvData = `${brand},${model},${usageYears},${futureModel}\n`;
        saveDataToCSV(csvData);
    });

    // Function to save data to CSV
    function saveDataToCSV(data) {
        const blob = new Blob([data], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "mobile_data.csv";
        a.click();
    }
});
