
document.addEventListener('DOMContentLoaded', function() {
    const tableContainer = document.querySelector('#table-container');

    tableData.forEach((customerData, index) => {
        
        const customerRow = document.createElement('div');
        customerRow.className = 'row  customer-row table-bordered';
        customerRow.id = `customer-row-${index}`;
        customerRow.innerHTML = `
            
            <div class="col-md-1"><i class="fa-solid fa-caret-right toggle-icon"></i></div>
            <div class="col-md-4">${customerData.customer}</div>
            <div class="col-md-4">${customerData.location}</div>
            <div class="col-md-3" align="right">${customerData.total}</div>
            
        `;

        tableContainer.appendChild(customerRow);

        const ordersTableContainer = document.createElement('div');
        ordersTableContainer.id = `orders-table-container-${index}`;
        ordersTableContainer.className = 'orders-table-container';
        const ordersTable = document.createElement('table');
        ordersTable.className = 'table  table-bordered mt-2';
        ordersTable.innerHTML = `
            <thead class="thead-light">
                <tr>
                    <th scope="col"><input type='checkbox'/></th>
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
                        <td><input type='checkbox'/></td>
                        <td><i class="fa-solid fa-caret-right toggle-icon"></i></td>
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
                                        <th scope="col"><input type='checkbox'/></th>
                                        <th scope="col">PRODUCT</th>
                                        <th scope="col">QUANTITY</th>
                                        <th scope="col">PRICE</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody class="product-items">
                                    ${order.products.map(product => `
                                        <tr>
                                            <td><input type='checkbox'/></td>
                                            <td>${product.product}</td>
                                            <td><i class="fa-regular fa-square-plus quality-icon "> &nbsp;&nbsp; </i>${product.quantity}&nbsp;&nbsp;<i class="fa-regular fa-square-minus quality-icon "></i></td>
                                            <td>${product.price}</td>
                                            <td><i class="fa-solid fa-trash"></i></td>
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

        const toggleIcon = customerRow.querySelector('.toggle-icon');
        toggleIcon.addEventListener('click', function() {
            const ordersTableContainer = document.getElementById(`orders-table-container-${index}`);
            const isVisible = ordersTableContainer.classList.contains('show');

            ordersTableContainer.classList.toggle('show', !isVisible);
            toggleIcon.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(90deg)';
        });

        ordersTable.querySelectorAll('.order-row').forEach(orderRow => {
            orderRow.addEventListener('click', function() {
                const nextRow = orderRow.nextElementSibling;
                if (nextRow && nextRow.classList.contains('product-row')) {
                    const isVisible = nextRow.classList.contains('show');
                    nextRow.classList.toggle('show', !isVisible);
                    const productToggleIcon = orderRow.querySelector('.toggle-icon');
                    productToggleIcon.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(90deg)';
                }
            });
        });
    });
});








