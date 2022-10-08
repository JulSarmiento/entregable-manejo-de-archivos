const fs = require("fs");
const readFiles = require("../utilities/readfile");
const saveFiles = require("../utilities/saveFile");

class Container {
  constructor(filename) {
    this.filename = `db/${filename}.txt`;
  }

  /**
   * Retorna ID
   * @param {object} product 
   */
  async saveProduct(product){
    const array = await this.getAll();
    product.id = array.length > 0 ? array[array.length -1].id + 1 : 1;

    try{
      array.push(product);
      saveFiles(this.filename, array);
      return product.id;
    }
    catch (err) {
      console.error(err);
    }
  };

  /**
   * returb product object
   * @param {number} productId 
   */
  getbyId(productId){

  };

  /**
   * 
   * @returns array
   */
  async getAll(){
    try{
      return await readFiles(this.filename);
    }
    catch (err) {
      console.error(err);
    }
    
  };

  /**
   * no return
   * @param {number} productId 
   */
  deleteById(productId){

  };

  /**
   * No return
   */
  deleteAll(){

  };
}


module.exports = Container;