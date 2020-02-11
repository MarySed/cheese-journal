exports.up = function(knex) {
  return knex.schema.createTable("cheese_table", table => {
    table
      .increments()
      .index()
      .primary();

    //cheese name
    table.text("cheese_name_en");
    table.text("cheese_name_fr");

    //cheese manufacturer
    table.text("manufacturer_name_en");

    table.text("flavor_en");
    table.text("characteristics_en");

    table.text("category_type");
    table.text("milk_type");
    table.text("rind_type");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("cheese_table");
};
