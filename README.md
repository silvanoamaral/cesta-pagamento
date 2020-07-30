## Redis

Ambiente de desenvolvimento para salvar e consulta com Redis

* Javascript
* NodeJS
* Redis

```bash

# Salvar Registro
# endpoint:
http://localhost:3001/basket/addItem

{
    "uuid": "uuid1234",
    "basket": [
        {
            "itemID": "id102938"
        }
    ]
}

# Consulta Registro
# endpoint:
http://localhost:3001/basket/getBasket/uuid1234


```

Ref: [Link](https://medium.com/@george.af.field/create-an-ecommerce-basket-solution-using-redis-node-js-react-and-cookies-2a5d85390726)