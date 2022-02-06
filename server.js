
const env = require('react-dotenv')
const express = require("express");
const app = express();
const stripe = require("stripe")(env.SECRET_KEY);
app.use(express.static("."));
const DOMAIN =env.URL_GUAJO

// app.use(express.json());
// const calculateOrderAmount = (items) => {
//   return 1400;
// };

app.post("/create-checkout-session", async (req, res) => {
  
    const productos = JSON.parse(localStorage.getItem('Carrito'))
  // const { items } = req.body;

  const datosOrganizados =[];

  const organizarDatos = productos.forEach(ele => {
    let datos = {
        price_data:{
          currency:'mxn',
          product_data:{
            name: ele.nombre,
            imagem:ele.imagen
          },
          unit_amout: ele.precio,
      },
      quantity:ele.cantidad,
      }

      datosOrganizados.push(datos)
  });


  const session = await stripe.checkout.session.create({
    payment_method_types:('card'),
    line_items:datosOrganizados,
    mode: 'payment',
    success_url:`${DOMAIN}/pago_exitoso`,
    cancel_url: `${DOMAIN}/pago_fallido`,
  });

  res.json({id: session.id});
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));