const fs = require("fs");
const readFiles = require("../utilities/readfile");
const saveFiles = require("../utilities/saveFile");

class Container {
  constructor(filename) {
    this._filename = `db/${filename}.txt`;
  }

  /**
   * Retorna ID
   * @param {object} product 
   */
  save(product){

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
      return await readFiles(this._filename);
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