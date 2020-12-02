import { isValid, sendData, FormHandler } from '../src/functions'

describe('Tests', () => {
  // units
  describe('isValid', () => {
    it('Empty string should be invalid', () => {
      expect(isValid('')).toBeFalsy()
      expect(isValid(' ')).toBeFalsy()
      expect(isValid()).toBeFalsy()
    })
    it('Should be valid', () => {
      expect(isValid('Alex')).toBeTruthy()
    })
    it('Only Alex should be valid', () => {
      expect(isValid('Alex')).toBeTruthy()
    })
    it('If no Alex should be invalid', () => {
      expect(isValid('John')).toBeFalsy()
    })
  })
  describe('sendData', () => {
    it('Should be called', () => {
      const mockSaveFn = jest.fn()
      sendData('alex', mockSaveFn)
      expect(mockSaveFn).toHaveBeenCalledWith('alex')
    })
  })
  // integration
  describe('FormHandler', () => {
    it('If valid, should be called send', () => {
      const isValidMock = jest.fn()
      const sendDataMock = jest.fn()
      isValidMock.mockReturnValue(true)
      const formHandler = new FormHandler(isValidMock, sendDataMock)
      formHandler.onSubmit('alex')
      expect(isValidMock).toHaveBeenCalledWith('alex')
      expect(sendDataMock).toHaveBeenCalledWith('alex')
    })
  })
})
