module.exports = (sequelize, Sequelize) => {
    const Dog = sequelize.define("Dog", {
      name: {
        type: Sequelize.STRING
      },
      breed: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      
    });
  
    return Dog;
  };