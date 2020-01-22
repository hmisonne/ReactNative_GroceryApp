import reducer from './reducer'
import * as actions from './actions'

const DEFAULT_STATE = {
	food: [],
}
describe('food reducer', () => {
	it('successfully adds new food', () => {
		expect(reducer(DEFAULT_STATE, actions.addFood({
			name: 'potatoe', 
			amount: 1, 
			unit: 'ct',
		}))).toMatchSnapshot()
	})
})