let cheeseData = require("../data/canadianCheeseDirectoryEdit.json");

const cheeseInfo = cheeseData.CheeseDirectory.map(cheese => {
  const insertInfo = {};

  //insertInfo.cheese_id = cheese.CheeseId;
  insertInfo.cheese_name_en = cheese.CheeseNameEn;
  insertInfo.cheese_name_fr = cheese.CheeseNameFr;

  insertInfo.manufacturer_name_en = cheese.ManufacturerNameEn;

  insertInfo.flavor_en = cheese.FlavourEn;
  insertInfo.characteristics_en = cheese.CharacteristicsEn;

  insertInfo.category_type = cheese.CategoryTypeEn;
  insertInfo.milk_type = cheese.MilkTypeEn;
  insertInfo.rind_type = cheese.RindTypeEn;

  return insertInfo;
});

exports.seed = function(knex) {
  return knex("cheese_table")
    .del()
    .then(() => {
      return knex("cheese_table").insert(cheeseInfo);
    });
};
