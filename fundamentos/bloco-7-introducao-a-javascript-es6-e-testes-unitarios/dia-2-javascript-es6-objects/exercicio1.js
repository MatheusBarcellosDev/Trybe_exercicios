const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const { deliveryPerson } = order.order.delivery;
    const { name, phoneNumber } = order;
    const { street, number, apartment } = order.address;

    return console.log(`Olá ${deliveryPerson}, entrega para ${name}, Telefone: ${phoneNumber}, R.${street}, N: ${number}, AP:${apartment} `)
  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {

    let { deliveryPerson } = order.order.delivery;
    deliveryPerson = 'Luiz Silva'
    let { total } = order.payment;
    total =  50;
    const pizzas = Object.keys(order.order.pizza);
    const { type } = order.order.drinks.coke;

    return console.log(`Olá ${deliveryPerson}, o total do seu pedido de ${pizzas} e ${type} é ${total}.`);
  
  }
  
  orderModifier(order);
  


  
    


