import * as actions from './actions' 

// test('add food returns action', ()=> {
// 	expect(actions.addFood({name: 'potatoe', amount: 1})).toEqual({
// 		type: actions.ADD_ITEM,
// 		payload: {name: 'potatoe', amount: 1},
// 	})
// })

	// test('add food returns action when passed unit', ()=> {
	// 	expect(actions.addFood({name: 'potatoe', amount: 1, unit: 'ct'})).toMatchSnapshot()
	// })

describe('update food returns actions', () => {
	it('returns action', ()=> {
		expect(actions.addFood({name: 'potatoe', amount: 1})).toMatchSnapshot()
	})
	it('handles unit', ()=> {
		expect(actions.addFood({name: 'potatoe', amount: 1, unit: 'ct'})).toMatchSnapshot()
	})
})
