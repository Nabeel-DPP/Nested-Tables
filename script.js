document.addEventListener('DOMContentLoaded', function() {
    const tableContainer = document.querySelector('#table-container');

    tableData.forEach((customerData, index) => {
        
        const customerRow = document.createElement('div');
        customerRow.className = 'row customer-row';
        customerRow.id = `customer-row-${index}`;
        customerRow.innerHTML = `
            <div class="col-md-1"><i class="fa-solid fa-greater-than toggle-icon"></i></div>
            <div class="col-md-4">${customerData.customer}</div>
            <div class="col-md-4">${customerData.location}</div>
            <div class="col-md-3">${customerData.total}</div>
        `;

        tableContainer.appendChild(customerRow);

       
        const ordersTableContainer = document.createElement('div');
        ordersTableContainer.id = `orders-table-container-${index}`;
        ordersTableContainer.className = 'orders-table-container'; // Apply the class for transition
        const ordersTable = document.createElement('table');
        ordersTable.className = 'table table-bordered mt-2';
        ordersTable.innerHTML = `
            <thead class="thead-light">
                <tr>
                    <th scope="col"></th>
                    <th scope="col">ORDER #</th>
                    <th scope="col">NBR ITEMS</th>
                    <th scope="col">DATE</th>
                    <th scope="col">TOTAL</th>
                </tr>
            </thead>
            <tbody>
                ${customerData.orders.map(order => `
                    <tr class="order-row">
                        <td><i class="fa-solid fa-greater-than toggle-icon"></i></td>
                        <td>${order.orderId}</td>
                        <td>${order.nbrItems}</td>
                        <td>${order.date}</td>
                        <td>${order.total}</td>
                    </tr>
                    <tr class="product-row">
                        <td colspan="5">
                            <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">PRODUCT</th>
                                        <th scope="col">QUANTITY</th>
                                        <th scope="col">PRICE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${order.products.map(product => `
                                        <tr>
                                            <td>${product.product}</td>
                                            <td>${product.quantity}</td>
                                            <td>${product.price}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        `;

        ordersTableContainer.appendChild(ordersTable);
        tableContainer.appendChild(ordersTableContainer);

        // Add click event listener to toggle order table
        const toggleIcon = customerRow.querySelector('.toggle-icon');
        toggleIcon.addEventListener('click', function() {
            const ordersTableContainer = document.getElementById(`orders-table-container-${index}`);
            const isVisible = ordersTableContainer.classList.contains('show');

            ordersTableContainer.classList.toggle('show', !isVisible);
            toggleIcon.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(90deg)';
        });

        // Add click event listener to toggle product rows
        ordersTable.querySelectorAll('.order-row').forEach(orderRow => {
            orderRow.addEventListener('click', function() {
                const nextRow = orderRow.nextElementSibling;
                if (nextRow && nextRow.classList.contains('product-row')) {
                    nextRow.classList.toggle('show', nextRow.classList.contains('show') ? false : true);
                    const productToggleIcon = orderRow.querySelector('.toggle-icon');
                    productToggleIcon.style.transform = nextRow.classList.contains('show') ? 'rotate(90deg)' : 'rotate(0deg)';
                }
            });
        });
    });
});



