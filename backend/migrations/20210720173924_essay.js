
exports.up = async function(knex) {
    await knex.schema.createTable('essay', function(table){
        table.increments("essay_id").primary();
        table.string('title');
        table.string('author');
        table.text('body', ['longtext']);
        table.datetime('created_at')
    })
  
};

exports.down = async function(knex) {
    await knex.dropTable('essay')
  
};
