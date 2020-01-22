const recipes2 = {"type":"product","products":
[{"id":214146,"title":"La Yogurt Original Variety Pack Lowfat Yogurt - Strawberry & Peach Blended",
"image":"https://spoonacular.com/productImages/214146-312x231.jpg","imageType":"jpg"},
{"id":71784,"title":"Oikos Yogurt","image":"https://spoonacular.com/productImages/71784-312x231.jpg","imageType":"jpg"},
{"id":75544,"title":"noosa yogurt raspberry","image":"https://spoonacular.com/productImages/75544-312x231.jpg","imageType":"jpg"},
{"id":180024,"title":"Cabot Yogurt Greek-Style Lowfat Peach","image":"https://spoonacular.com/productImages/180024-312x231.jpg","imageType":"jpg"},
{"id":178490,"title":"Ahold Yogurt Light Strawberry Banana Nonfat","image":"https://spoonacular.com/productImages/178490-312x231.jpg","imageType":"jpg"},
{"id":213502,"title":"Kemps Yogurt - Light Strawberry Banana Nonfat","image":"https://spoonacular.com/productImages/213502-312x231.jpg","imageType":"jpg"},
{"id":213554,"title":"Kemps Yogurt - Greek Style Nonfat Black Cherry","image":"https://spoonacular.com/productImages/213554-312x231.jpg","imageType":"jpg"},
{"id":109621,"title":"Dannon Fruit on the Bottom Lowfat Yogurt Cherry","image":"https://spoonacular.com/productImages/109621-312x231.jpg","imageType":"jpg"},
{"id":110010,"title":"Dannon Yogurt","image":"https://spoonacular.com/productImages/110010-312x231.jpg","imageType":"jpg"},
{"id":150968,"title":"Dannon Yogurt","image":"https://spoonacular.com/productImages/150968-312x231.jpg","imageType":"jpg"}
],
"offset":0,"number":10,"totalProducts":2389,"processingTimeMs":137,"expires":1576951024786,"isStale":false}

const recipes = {"results":[{"id":215435,"title":"Three-Cheese Pizza (For Cheese Lovers)","readyInMinutes":45,"servings":8,"image":"three-cheese-pizza-for-cheese-lovers-215435.jpg","imageUrls":["three-cheese-pizza-for-cheese-lovers-215435.jpg"]},{"id":116679,"title":"Leek & Cheese Pie","readyInMinutes":75,"servings":4,"image":"leek-amp-cheese-pie-2-116679.jpg","imageUrls":["leek-amp-cheese-pie-2-116679.jpg","leek_amp_cheese_pie-116679.jpg"]},{"id":414947,"title":"Beef and Cheese Pie","readyInMinutes":60,"servings":8,"image":"Beef-and-Cheese-Pie-414947.jpg","imageUrls":["Beef-and-Cheese-Pie-414947.jpg"]},{"id":449798,"title":"Cauldron Cheese Ball","readyInMinutes":25,"servings":32,"image":"Cauldron-Cheese-Ball-449798.jpg","imageUrls":["Cauldron-Cheese-Ball-449798.jpg"]},{"id":475345,"title":"Bleu Cheese Dip","readyInMinutes":5,"servings":8,"image":"Bleu-Cheese-Dip-475345.jpg","imageUrls":["Bleu-Cheese-Dip-475345.jpg"]},{"id":510089,"title":"Stovetop Mac and Cheese","readyInMinutes":45,"servings":6,"image":"Stovetop-Mac-and-Cheese-510089.jpg","imageUrls":["Stovetop-Mac-and-Cheese-510089.jpg"]},{"id":587340,"title":"Pimento Cheese Spread","readyInMinutes":45,"servings":8,"image":"Pimento-Cheese-Spread-587340.jpg","imageUrls":["Pimento-Cheese-Spread-587340.jpg"]},{"id":589094,"title":"Cheese and veggie sandwich","readyInMinutes":25,"servings":4,"image":"Cheese-and-veggie-sandwich-589094.jpg","imageUrls":["Cheese-and-veggie-sandwich-589094.jpg"]},{"id":943857,"title":"Chili Mac and Cheese","readyInMinutes":20,"servings":6,"image":"chili-mac-and-cheese-943857.jpg","imageUrls":["chili-mac-and-cheese-943857.jpg"]},{"id":1001036,"title":"Blue Cheese Coleslaw","readyInMinutes":5,"servings":4,"image":"blue-cheese-coleslaw-1001036.jpg","imageUrls":["blue-cheese-coleslaw-1001036.jpg"]}],"baseUri":"https://spoonacular.com/recipeImages/","offset":0,"number":10,"totalResults":322,"processingTimeMs":456,"expires":1576943228978,"isStale":false}



const addKeys = (val, key) => ({key, ...val})

export default recipes.results.map(addKeys)