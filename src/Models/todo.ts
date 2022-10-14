class ToDo {
  id: string;
  text: string;

  //the constructor makes sure the properties above receive e value
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default ToDo;
