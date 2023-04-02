<template>
    <v-container>
        <h1>Products</h1>
        <v-card v-for="product in products" :key="product.id">
    <v-layout>
        <v-flex xs3>
            <v-img :src="product.imgsrc" contain height="125px"></v-img>
        </v-flex>
        <v-layout column>
            <v-card-title><h1>{{ product.title }}</h1></v-card-title>
            <v-card-text>{{ `$ ${product.price} (Inventory: 
                          ${product.inventory})` }}</v-card-text>
            <v-card-actions>
                <v-btn :disabled="product.inventory <= 0"
                       @click="addToCart(product)">Add Cart</v-btn>
            </v-card-actions>
        </v-layout>
    </v-layout>
  </v-card>
        <v-spacer/>
        <h1>My Cart Items ($ {{totalAmount}}) </h1>
        <v-card v-for="cartItem in cartItems" :key="'C' + cartItem.id">
    <v-layout>
        <v-flex xs3>
            <v-img :src="cartItem.imgsrc" contain height="125px"></v-img>
        </v-flex>
        <v-layout column>
            <v-card-title><h1>{{ cartItem.title }}</h1><br/></v-card-title>
            <v-card-text>{{ `$ ${cartItem.price} x ${cartItem.quantity}
                             = ${cartItem.subsum}` }}</v-card-text>
    </v-layout>
    </v-layout>
</v-card>
    </v-container>
</template>

<script lang="js">
    export default {
        data() {
            return {
                products: [
                   {
        id: 1,
        title: 'Apple iPad (Wi-Fi, 32GB) - Space Gray',
        price: 350,
        inventory: 7,
        imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/51x4j48wCpL._SL1024_.jpg'
    },
    {
        id: 2,
        title: 'Apple iPhone XR (64GB) - RED',
        price: 749,
        inventory: 5,
        imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/51YXG1bDM5L._SL1024_.jpg'
    },
    {
        id: 3,
        title: 'Apple Macbook Retina Display Laptop',
        price: 949,
        inventory: 2,
        imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/819zx3uAjhL._SL1500_.jpg'
    },  
                ],
                cartItems: [
                ],
                totalAmount: 0
            }
        },
        methods: {
         addToCart: function (product) {
  // STEP01 - products 배열에서 id 를 기준으로 필터링하고 필터링된 
  //아이템에서 inventory 값을 -1 한다.
      this.products.filter(function (p) {
          return p.id === product.id
      })
      .map(function (p) {
          return p.inventory--
      });

  // STEP02 - cartItems 배열에서 id 를 기준으로 필터링하고...
  var _cartItem = this.cartItems.filter(function (p) {
      return p.id === product.id
  });
  if (_cartItem.length > 0) {
      // 필터링 된 아이템이 존재하면 quantity 값을 +1 한다.
      _cartItem.map(function (p) {
          return p.quantity++
      });
  } else {
      // 필터링 된 아이템이 없으면 새로운 객체를 생성해서 추가한다.
      this.cartItems.push({
          "id": product.id,
          "title": product.title,
          "price": product.price,
          "quantity": 1,
          "imgsrc": product.imgsrc
      });
  }

  // STEP03 - cartItems 배열에서 "소계 = 가격 x 수량" 을 계산하여 
  // 아이템의 subsum 속성 값으로 대입한다.
  this.cartItems.map(function (p) {
      p.subsum = p.price * p.quantity;
      return p;
  });
  // STEP4 - cartItems 배열에서 REDUCE 하여 "총계" 값을 구해서
  // totalAmount 변수에 대입한다.
  this.totalAmount = this.cartItems.reduce(function 
                                     (previousSum, currentItem) {
      return previousSum + currentItem.price * currentItem.quantity;
    }, 0);
  }
        }//methods
    }
</script>