const tableData = [
    {
      customer: 'John Smith',
      location: 'New York, USA',
      total: '150.25$',
      orders: [
        {
          orderId: 125874,
          nbrItems: 8,
          date: '2024-07-20',
          total: '150.25$',
          products: [
            { product: 'Bread', quantity: 4, price: '2.50$' },
            { product: 'Butter', quantity: 2, price: '3.50$' },
            { product: 'Eggs', quantity: 2, price: '5.00$' },
            { product: 'Cheese', quantity: 1, price: '6.00$' },
            { product: 'Ham', quantity: 3, price: '7.00$' }
          ]
        }
      ]
    },
    {
      customer: 'Alice Johnson',
      location: 'London, UK',
      total: '89.45$',
      orders: [
        {
          orderId: 563412,
          nbrItems: 5,
          date: '2024-06-30',
          total: '89.45$',
          products: [
            { product: 'Tea', quantity: 3, price: '4.00$' },
            { product: 'Sugar', quantity: 1, price: '1.50$' },
            { product: 'Biscuits', quantity: 4, price: '2.00$' },
            { product: 'Chips', quantity: 2, price: '3.00$' },
            { product: 'Chocolate', quantity: 5, price: '1.95$' }
          ]
        }
      ]
    },
    {
      customer: 'Mark Lee',
      location: 'Toronto, Canada',
      total: '75.30$',
      orders: [
        {
          orderId: 895214,
          nbrItems: 6,
          date: '2024-07-15',
          total: '75.30$',
          products: [
            { product: 'Juice', quantity: 2, price: '4.99$' },
            { product: 'Water', quantity: 5, price: '1.50$' },
            { product: 'Bread', quantity: 3, price: '2.00$' },
            { product: 'Yogurt', quantity: 4, price: '2.50$' },
            { product: 'Granola', quantity: 1, price: '5.00$' }
          ]
        }
      ]
    },
    {
      customer: 'Emma Brown',
      location: 'Sydney, Australia',
      total: '64.80$',
      orders: [
        {
          orderId: 675893,
          nbrItems: 7,
          date: '2024-08-01',
          total: '64.80$',
          products: [
            { product: 'Pasta', quantity: 3, price: '3.50$' },
            { product: 'Tomato Sauce', quantity: 2, price: '2.50$' },
            { product: 'Parmesan', quantity: 1, price: '6.00$' },
            { product: 'Chicken', quantity: 2, price: '8.00$' },
            { product: 'Basil', quantity: 5, price: '1.50$' }
          ]
        }
      ]
    },
    {
      customer: 'Liam Garcia',
      location: 'Madrid, Spain',
      total: '93.20$',
      orders: [
        {
          orderId: 124579,
          nbrItems: 9,
          date: '2024-08-03',
          total: '93.20$',
          products: [
            { product: 'Olive Oil', quantity: 1, price: '10.00$' },
            { product: 'Garlic', quantity: 3, price: '1.00$' },
            { product: 'Bread', quantity: 4, price: '2.50$' },
            { product: 'Cheese', quantity: 2, price: '5.00$' },
            { product: 'Ham', quantity: 5, price: '6.00$' }
          ]
        }
      ]
    },
    {
      customer: 'Sophia Martinez',
      location: 'Berlin, Germany',
      total: '110.40$',
      orders: [
        {
          orderId: 784512,
          nbrItems: 10,
          date: '2024-07-25',
          total: '110.40$',
          products: [
            { product: 'Beer', quantity: 6, price: '3.00$' },
            { product: 'Sausages', quantity: 4, price: '4.50$' },
            { product: 'Sauerkraut', quantity: 3, price: '2.00$' },
            { product: 'Bread', quantity: 2, price: '2.50$' },
            { product: 'Mustard', quantity: 5, price: '1.20$' }
          ]
        }
      ]
    },
    {
      customer: 'Ahmed Khan',
      location: 'Karachi, Pakistan',
      total: '1200.50 PKR',
      orders: [
        {
          orderId: 234567,
          nbrItems: 10,
          date: '2024-08-05',
          total: '1200.50 PKR',
          products: [
            { product: 'Basmati Rice', quantity: 5, price: '200.00 PKR' },
            { product: 'Chicken Karahi', quantity: 1, price: '600.00 PKR' },
            { product: 'Naan', quantity: 10, price: '50.00 PKR' },
            { product: 'Yogurt', quantity: 2, price: '70.00 PKR' },
            { product: 'Ghee', quantity: 1, price: '80.00 PKR' }
          ]
        }
      ]
    },
    {
      customer: 'Fatima Ali',
      location: 'Lahore, Pakistan',
      total: '850.75 PKR',
      orders: [
        {
          orderId: 345678,
          nbrItems: 8,
          date: '2024-07-20',
          total: '850.75 PKR',
          products: [
            { product: 'Chapati Flour', quantity: 2, price: '150.00 PKR' },
            { product: 'Lassi', quantity: 3, price: '90.00 PKR' },
            { product: 'Potatoes', quantity: 4, price: '100.00 PKR' },
            { product: 'Onions', quantity: 2, price: '60.00 PKR' },
            { product: 'Coriander', quantity: 1, price: '20.00 PKR' }
          ]
        }
      ]
    },
    {
      customer: 'Bilal Hussain',
      location: 'Islamabad, Pakistan',
      total: '950.00 PKR',
      orders: [
        {
          orderId: 456789,
          nbrItems: 9,
          date: '2024-08-03',
          total: '950.00 PKR',
          products: [
            { product: 'Beef Kebab', quantity: 3, price: '150.00 PKR' },
            { product: 'Raita', quantity: 2, price: '80.00 PKR' },
            { product: 'Biryani', quantity: 2, price: '300.00 PKR' },
            { product: 'Fruit Chaat', quantity: 1, price: '120.00 PKR' },
            { product: 'Mango Juice', quantity: 1, price: '100.00 PKR' }
          ]
        }
      ]
    },
    {
      customer: 'Sara Ahmed',
      location: 'Faisalabad, Pakistan',
      total: '670.40 PKR',
      orders: [
        {
          orderId: 567890,
          nbrItems: 6,
          date: '2024-07-10',
          total: '670.40 PKR',
          products: [
            { product: 'Chicken Biryani', quantity: 1, price: '500.00 PKR' },
            { product: 'Salad', quantity: 1, price: '70.00 PKR' },
            { product: 'Tea Leaves', quantity: 1, price: '50.00 PKR' },
            { product: 'Sugar', quantity: 2, price: '25.00 PKR' },
            { product: 'Milk', quantity: 2, price: '25.00 PKR' }
          ]
        }
      ]
    },
    {
      customer: 'Usman Tariq',
      location: 'Rawalpindi, Pakistan',
      total: '540.90 PKR',
      orders: [
        {
          orderId: 678901,
          nbrItems: 7,
          date: '2024-06-30',
          total: '540.90 PKR',
          products: [
            { product: 'Kofta Curry', quantity: 1, price: '350.00 PKR' },
            { product: 'Roti', quantity: 10, price: '100.00 PKR' },
            { product: 'Pulses', quantity: 3, price: '70.00 PKR' },
            { product: 'Cucumber', quantity: 2, price: '20.00 PKR' },
            { product: 'Tomatoes', quantity: 5, price: '50.00 PKR' }
          ]
        }
      ]
    },
    {
      customer: 'Nida Rehman',
      location: 'Quetta, Pakistan',
      total: '730.60 PKR',
      orders: [
        {
          orderId: 789012,
          nbrItems: 8,
          date: '2024-08-01',
          total: '730.60 PKR',
          products: [
            { product: 'Lamb Chops', quantity: 1, price: '500.00 PKR' },
            { product: 'Mint Chutney', quantity: 1, price: '50.00 PKR' },
            { product: 'Pita Bread', quantity: 5, price: '60.00 PKR' },
            { product: 'Sliced Cheese', quantity: 3, price: '60.00 PKR' },
            { product: 'Fruits', quantity: 3, price: '60.00 PKR' }
          ]
        }
      ]
    }
  ];
  