class AcmeDB{

constructor(obj){
    this.index = 1;
    this.users = [];
    this.addUser(obj);
  }

 addUser(obj){
    obj.id = this.index;
    this.users.push(obj);
    this.index++;
  }

  showUsers(){
    let str = "";
    for(var i = 0; i<this.users.length; i++){
      str += this.users[i].name + " ";
    }
    return str;
  }

  findById(id){
    for(var i = 0; i<this.users.length; i++){
      if(this.users[i].id == id){
        return this.users[i];
      }
    }
  }

  removeUserById(id){
    for(var i = 0; i< this.users.length; i++){
      if(this.users[i].id == id){
        for(var j=i; j < (this.users.length - 1); j++){
          this.users[j] = this.users[j+1];
        }
        this.users.pop();
      }
    }
  }

  editUser(obj){
    var user = this.findById(obj.id);
    user.name = obj.name;
  }
}

export default AcmeDB;
