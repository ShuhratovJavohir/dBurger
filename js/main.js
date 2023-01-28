const product = {
    Crazy: {
        id: 0,
        title: "Crazy",
        price: 31000,
        img: "./img/burger-1.png",
        amount: 0,
        cost: 0,
        summ(){
            return this.cost = this.amount * this.price
        },
        minus(){
            return this.cost =  this.cost / this.amount
        },
        addAmount(){
            return this.amount++
        },
        removeAmount(){
            return this.amount--
        }
    },
    Light: {
        id: 1,
        title: "Light",
        price: 26000,
        img: "./img/burger-2.png",
        amount: 0,
        cost: 0,
        summ(){
            return this.cost = this.amount * this.price
        },
        minus(){
            return this.cost = this.cost / this.amount
        },
        addAmount(){
            return this.amount++
        },
        removeAmount(){
            return this.amount--
        }
    },
    CheeseBurger: {
        id: 2,
        title: "CheeseBurger",
        price: 29000,
        img: "./img/burger-3.png",
        amount: 0,
        cost: 0,
        summ(){
            return this.cost = this.amount * this.price
        },
        minus(){
            return this.cost = this.cost / this.amount
        },
        addAmount(){
            return this.amount++
        },
        removeAmount(){
            return this.amount--
        }
    },
    dBurger: {
        id: 3,
        title: "dBurger",
        price: 24000,
        img: "./img/burger-4.png",
        amount: 0,
        cost: 0,
        summ(){
            return this.cost = this.amount * this.price
        },
        minus(){
            return this.cost = this.cost / this.amount
        },
        addAmount(){
            return this.amount++
        },
        removeAmount(){
            return this.amount--
        }
        
    }
}

const allElementCount = document.querySelector('.cart-current-btn')
const cost = document.querySelector('#cart-price')
const what = document.querySelector('.cart-empty')

function allAmount(){
    if(allElementCount.innerText > 0){
        allElementCount.classList.remove('none')
        what.classList.add('none')
    }
    if(allElementCount.innerText < 1){
        allElementCount.classList.add('none')
        what.classList.remove('none')
    }  
    const count = product.Crazy.amount + product.Light.amount + product.CheeseBurger.amount + product.dBurger.amount
    allElementCount.innerText = count
} 

const myInterval = setInterval(() => {
  allAmount() 
  calcCount()
}, 100);

// function calcCount(){
//     const cartitem = document.querySelectorAll('.add-burger-items')
//     const cost = document.querySelector('#cart-price')
    
//     cartitem.forEach(function (items) {
//         const amountElements = items.querySelector('[data-counter]').innerText
//         const priceElement = items.querySelector('.burger-price').innerText
//         cost.innerText = parseInt(amountElements) * parseInt(priceElement)
//         console.log(cost);
//     });
// }
function calcCount(){
	const cartItems = document.querySelectorAll('.add-burger-items')
	const cartPrice = document.querySelector('#cart-price')
	// const allAmountElement = document.querySelector('.cart-current-btn')
	
	let amountElement;
	let totalPrice = 0;
	
	cartItems.forEach(function(item){
		amountElement = item.querySelector('[data-counter]')
		const priceElement = item.querySelector('.burger-price')
		const correntPrice = parseInt(priceElement.innerText) * parseInt(amountElement.innerText)
		
		totalPrice += correntPrice
	})
	cartPrice.innerText = parseInt(totalPrice)
}
    

const openCart = document.querySelector('.cart-btn')
const closeCart = document.querySelector('.cart-list-close-btn')
const cartList = document.querySelector('.cart-list')

// открытие корзины
openCart.addEventListener('click', function(){
    cartList.classList.remove('none')
})

closeCart.addEventListener('click', function(){
    cartList.classList.add('none')
})


// добовление товара в корззину
const clickAddCart = document.querySelectorAll('.add-cart')
const cartAmount = document.querySelector('.cart-current-btn')
const addBurger = document.querySelector('.add-burger')

clickAddCart.forEach(element => {  
    element.addEventListener('click', function(event){
        const card = event.target.closest('.card-item')
        const cardItems = card.querySelector('.burger-name').innerText
        allAmount()
        calcCount()
        
        if(cardItems === 'Crazy'){
            const cardAmount = card.querySelector('.counter-burger')
            product.Crazy.addAmount()
            cardAmount.classList.remove('none')
            cardAmount.innerText = product.Crazy.amount
            const productInfo = {
                id: product.Crazy.id,
                img: product.Crazy.img,
                title: product.Crazy.title,
                price: product.Crazy.price,
                amount: product.Crazy.amount
            }
            
            const itemInCart = addBurger.querySelector(`[data-id="${product.Crazy.id}"]`)
            
            if(itemInCart){
                const counterElement = itemInCart.querySelector('[data-counter]')
                counterElement.innerText = parseInt(counterElement.innerText) + 1
            }
            else{
                const cardAddToCart = `
                    <div class="add-burger-items" data-id="${productInfo.id}">
                        <div class="cart-burger">
                                <img src="${productInfo.img}" alt="${productInfo.title}">
                                <div class="burger-info">
                                        <p class="burger-name">${productInfo.title}</p>
                                        <p class="burger-price">${productInfo.price} сум</p>
                                </div>
                        </div>
                        <div class="more-add">
                                <button data-action="minus">-</button>
                                <p data-counter>1</p>
                                <button data-action="plus">+</button>
                        </div>
                    </div>  
                `
            addBurger.insertAdjacentHTML('beforeend', cardAddToCart)
            const cardInCart = document.querySelector('[data-id="0"]')
            const plus = cardInCart.querySelector('[data-action="plus"]')
            const minus = cardInCart.querySelector('[data-action="minus"]')
            const count = cardInCart.querySelector('[data-counter]')
            plus.addEventListener('click', function(){
                product.Crazy.addAmount()
                count.innerText = product.Crazy.amount
                cardAmount.innerText =  product.Crazy.amount
                allAmount()
                calcCount()        
                product.Crazy.summ()
            })
            minus.addEventListener('click', function(){
                product.Crazy.removeAmount()
                count.innerText = product.Crazy.amount
                cardAmount.innerText =  product.Crazy.amount
                allAmount()
                calcCount()
                product.Crazy.minus()
                if(cardAmount.innerText < 1){
                    cardAmount.classList.add('none')
                }
                if(cardInCart.querySelector('[data-counter]').innerText < 1){
                    cardInCart.remove()
                }
            })      
        }
        }
        if(cardItems === 'Light'){
            const cardAmount = card.querySelector('.counter-burger')
            product.Light.addAmount()
            cardAmount.classList.remove('none')
            cardAmount.innerText = product.Light.amount
            const productInfo = {
                id: product.Light.id,
                img: product.Light.img,
                title: product.Light.title,
                price: product.Light.price,
                amount: product.Light.amount
            }
            
            const itemInCart = addBurger.querySelector(`[data-id="${product.Light.id}"]`)
            
            if(itemInCart){
                const counterElement = itemInCart.querySelector('[data-counter]')
                counterElement.innerText = parseInt(counterElement.innerText) + 1
            }
            else{
                const cardAddToCart = `
                    <div class="add-burger-items" data-id="${productInfo.id}">
                        <div class="cart-burger">
                                <img src="${productInfo.img}" alt="${productInfo.title}">
                                <div class="burger-info">
                                        <p class="burger-name">${productInfo.title}</p>
                                        <p class="burger-price">${productInfo.price} сум</p>
                                </div>
                        </div>
                        <div class="more-add">
                                <button data-action="minus">-</button>
                                <p data-counter>1</p>
                                <button data-action="plus">+</button>
                        </div>
                    </div>  
                `
            addBurger.insertAdjacentHTML('beforeend', cardAddToCart)
            const cardInCart = document.querySelector('[data-id="1"]')
            const plus = cardInCart.querySelector('[data-action="plus"]')
            const minus = cardInCart.querySelector('[data-action="minus"]')
            const count = cardInCart.querySelector('[data-counter]')
            plus.addEventListener('click', function(){
                product.Light.addAmount()
                count.innerText = product.Light.amount
                cardAmount.innerText =  product.Light.amount
                allAmount()
                calcCount()
            })
            minus.addEventListener('click', function(){
                product.Light.removeAmount()
                count.innerText = product.Light.amount
                cardAmount.innerText =  product.Light.amount
                allAmount()
                calcCount()
                if(cardAmount.innerText < 1){
                    console.log('add');
                    cardAmount.classList.add('none')
                }
                if(cardInCart.querySelector('[data-counter]').innerText < 1){
                    cardInCart.remove()
                }
            })
            }     
        }
        if(cardItems === 'CheeseBurger'){
            const cardAmount = card.querySelector('.counter-burger')
            product.CheeseBurger.addAmount()
            cardAmount.classList.remove('none')
            cardAmount.innerText = product.CheeseBurger.amount 
            const productInfo = {
                id: product.CheeseBurger.id,
                img: product.CheeseBurger.img,
                title: product.CheeseBurger.title,
                price: product.CheeseBurger.price,
                amount: product.CheeseBurger.amount
            }
            const itemInCart = addBurger.querySelector(`[data-id="${product.CheeseBurger.id}"]`)
            
            if(itemInCart){
                const counterElement = itemInCart.querySelector('[data-counter]')
                counterElement.innerText = parseInt(counterElement.innerText) + 1
            }
            else{
                const cardAddToCart = `
                    <div class="add-burger-items" data-id="${productInfo.id}">
                        <div class="cart-burger">
                                <img src="${productInfo.img}" alt="${productInfo.title}">
                                <div class="burger-info">
                                        <p class="burger-name">${productInfo.title}</p>
                                        <p class="burger-price">${productInfo.price} сум</p>
                                </div>
                        </div>
                        <div class="more-add">
                                <button data-action="minus">-</button>
                                <p data-counter>1</p>
                                <button data-action="plus">+</button>
                        </div>
                    </div>  
                `
            addBurger.insertAdjacentHTML('beforeend', cardAddToCart)
            const cardInCart = document.querySelector('[data-id="2"]')
            const plus = cardInCart.querySelector('[data-action="plus"]')
            const minus = cardInCart.querySelector('[data-action="minus"]')
            const count = cardInCart.querySelector('[data-counter]')
            plus.addEventListener('click', function(){
                product.CheeseBurger.addAmount()
                count.innerText = product.CheeseBurger.amount
                cardAmount.innerText =  product.CheeseBurger.amount
                allAmount()
                calcCount()
            })
            minus.addEventListener('click', function(){
                product.CheeseBurger.removeAmount()
                count.innerText = product.CheeseBurger.amount
                cardAmount.innerText =  product.CheeseBurger.amount
                allAmount()
                calcCount()
                if(cardAmount.innerText < 1){
                    console.log('add');
                    cardAmount.classList.add('none')
                }
                if(cardInCart.querySelector('[data-counter]').innerText < 1){
                    cardInCart.remove()
                }
            })
            }         
        }
        if(cardItems === 'dBurger'){
            const cardAmount = card.querySelector('.counter-burger')
            product.dBurger.addAmount()
            cardAmount.classList.remove('none')
            cardAmount.innerText = product.dBurger.amount
            const productInfo = {
                id: product.dBurger.id,
                img: product.dBurger.img,
                title: product.dBurger.title,
                price: product.dBurger.price,
                amount: product.dBurger.amount
            }
            
            const itemInCart = addBurger.querySelector(`[data-id="${product.dBurger.id}"]`)
            
            if(itemInCart){
                const counterElement = itemInCart.querySelector('[data-counter]')
                counterElement.innerText = parseInt(counterElement.innerText) + 1
            }
            else{
                const cardAddToCart = `
                    <div class="add-burger-items" data-id="${productInfo.id}">
                        <div class="cart-burger">
                                <img src="${productInfo.img}" alt="${productInfo.title}">
                                <div class="burger-info">
                                        <p class="burger-name">${productInfo.title}</p>
                                        <p class="burger-price">${productInfo.price} сум</p>
                                </div>
                        </div>
                        <div class="more-add">
                                <button data-action="minus">-</button>
                                <p data-counter>1</p>
                                <button data-action="plus">+</button>
                        </div>
                    </div>  
                `
            addBurger.insertAdjacentHTML('beforeend', cardAddToCart)
            const cardInCart = document.querySelector('[data-id="3"]')
            const plus = cardInCart.querySelector('[data-action="plus"]')
            const minus = cardInCart.querySelector('[data-action="minus"]')
            const count = cardInCart.querySelector('[data-counter]')
            plus.addEventListener('click', function(){
                product.dBurger.addAmount()
                count.innerText = product.dBurger.amount
                cardAmount.innerText =  product.dBurger.amount
                allAmount()
                calcCount()
            })
            minus.addEventListener('click', function(){
                product.dBurger.removeAmount()
                count.innerText = product.dBurger.amount
                cardAmount.innerText =  product.dBurger.amount
                allAmount()
                calcCount()
                if(cardAmount.innerText < 1){
                    console.log('add');
                    cardAmount.classList.add('none')
                }
                if(cardInCart.querySelector('[data-counter]').innerText < 1){
                    cardInCart.remove()
                }
            })
            }    
        }
    })
})











































// clickAddCart.forEach(element => {
//     element.addEventListener('click', function(event){

//         const cardItem = event.target.closest('.card-item')

//         const cardName = cardItem.querySelector('.burger-name').innerText
//         const activCardCount = cardItem.querySelector('.counter-burger')

//         const addBurger = document.querySelector('.add-burger')

        
//         if(cardName === 'Crazy'){
//             product.Crazy.addAmount()
//             activCardCount.innerText = parseInt(product.Crazy.amount)
//             amount()
//             if(activCardCount.innerText > 0){
//                 activCardCount.classList.remove('none')

//                 const productInfo = {
//                     id: product.Crazy.id,
//                     img: product.Crazy.img,
//                     title: product.Crazy.title,
//                     price: product.Crazy.price,
//                 }
                
//                 const itemInCart = addBurger.querySelector(`[data-id="${productInfo.id}"]`)
                
//                 if(itemInCart){
//                    }
//                 else{
//                     const addBurgerToCart = `
//                     <div class="add-burger-items" data-id="${productInfo.id}">
//                         <div class="cart-burger">
//                                 <img src="${productInfo.img}" alt="${productInfo.title}">
//                                 <div class="burger-info">
//                                         <p class="burger-name">${productInfo.title}</p>
//                                         <p class="burger-price">${productInfo.price} сум</p>
//                                 </div>
//                         </div>
//                         <div class="more-add">
//                                 <button data-action="minus">-</button>
//                                 <p data-counter>1</p>
//                                 <button data-action="plus">+</button>
//                         </div>
//                     </div>
//                     `
//                 addBurger.insertAdjacentHTML('beforeend', addBurgerToCart)
                
//                 const count = document.querySelector('.more-add')
//                 const addCount = count.querySelector('[data-action="plus"]')
//                 const removeCount = count.querySelector('[data-action="minus"]')
                
//                 addCount.addEventListener('click', function(){
//                     const countInCart = count.querySelector('[data-counter]')
//                     product.Crazy.addAmount()
//                     product.Crazy.summ()
//                     countInCart.innerText = product.Crazy.amount
//                     const updateCardCount = cardItem.querySelector('.counter-burger')
//                     updateCardCount.innerText = product.Crazy.amount
//                     console.log(product.Crazy.summ());
//                     cartAmount.innerText = product.Crazy.amount
//                   })
//                   removeCount.addEventListener('click', function(){
//                     const countInCart = count.querySelector('[data-counter]')
//                     product.Crazy.minus()
//                     product.Crazy.removeAmount()
//                     countInCart.innerText = product.Crazy.amount
//                     const updateCardCount = cardItem.querySelector('.counter-burger')
//                     updateCardCount.innerText = product.Crazy.amount
//                     cartAmount.innerText = product.Crazy.amount
//                 })
                
//             }
//             const count = document.querySelector('.more-add')
//             const cartCount = count.querySelector('[data-counter]')
//             cartCount.innerText = product.Crazy.amount
//             cartAmount.innerText = product.Crazy.amount
//         }
//         }
//     })
// });
