import reducer from '../reducers';

describe('Reducer', () => {
  it('should return the initial state', () => {
      expect(JSON.stringify(reducer(undefined, {}))).toEqual(JSON.stringify(
          {
            products:{}
          }
      ))
  })

  it('reducer test for GET_PRODUCTS',() => {
      let state ={
        products:[]
      }
      state = reducer(state, {
          action: "GET_PRODUCTS"
      })
      expect(state).toEqual({
        products:[]
      })
  })
})
