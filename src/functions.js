export const isValid = (name = '') => {
  return name.trim() !== ''
}

export const sendData = (name, save) => {
  save(name)
}

export class FormHandler {
  constructor (validateFn, sendDataFn) {
    this.validateFn = validateFn;
    this.sendDataFn = sendDataFn;
  }

  onSubmit (name) {
    if (this.validateFn(name)) {
      this.sendDataFn(name)
    }
  }
}
