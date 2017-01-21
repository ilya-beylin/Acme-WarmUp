class AcmeDB{

constructor(obj){//call this users
    this.index = 1;//i don't think you need this
    this.users = [];//loop over all passed in users and call addUser
    this.addUser(obj);
  }

 addUser(obj){//call this user
    //use reduce to find the maxI
    obj.id = this.index;
    this.users.push(obj);
    this.index++;
  }

  showUsers(){
    //use map and join instead of concatenation
    //also in es6 you can use backticks instead of concatenation
    let str = "";
    for(var i = 0; i<this.users.length; i++){
      str += this.users[i].name + " ";
    }
    return str;
  }

  findById(id){
    //give operators some space
    //you could also use filter here.
    for(var i = 0; i < this.users.length; i++){
      if(this.users[i].id == id){
        return this.users[i];
      }
    }
  }

  removeUserById(id){
    //too complicated.. use filter
    //also a for loop within a for loop is probably not needed
    for(var i = 0; i< this.users.length; i++){
      if(this.users[i].id == id){
        for(var j=i; j < (this.users.length - 1); j++){
          this.users[j] = this.users[j+1];
        }
        this.users.pop();
      }
    }
  }

  editUser(obj){//call this user
    var user = this.findById(obj.id);//i like this!
    user.name = obj.name;//what if you obj had other edited properties...
  }
}

export default AcmeDB;
