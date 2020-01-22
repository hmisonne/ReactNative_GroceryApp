const DATA = 
[{name:'Chicken', type:'meat'}, 
      {name:'Pork', type:'meat'}, 
      {name:'Beef', type:'meat'},
      {name:'Lamb', type:'meat'},
      {name:'Cheese', type:'dairy'}, 
      {name:'Almond Milk', type:'dairy'}, 
      {name:'Butter', type:'dairy'},
      {name:'Salad', type:'veggies'},
      {name:'Kale', type:'veggies'},
      {name:'Leek', type:'veggies'},
      {name:'Sunflower Seeds', type:'grains'},
      {name:'Oats', type:'grains'},
    ]

const addKeys = (val, key) => 
  ({key, ...val, amount:'5', unit:'lb', checked: false})

export default DATA.map(addKeys)