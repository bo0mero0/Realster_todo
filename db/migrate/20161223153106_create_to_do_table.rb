class CreateToDoTable < ActiveRecord::Migration
  def change
    create_table :to_do_tables do |t|
      t.string :todo, null:false
      t.string :decription

      t.timestamps
    end
  end
end
