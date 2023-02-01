class AddInStocktoRecords < ActiveRecord::Migration[7.0]
  def change
    add_column :records, :in_stock, :boolean
  end
end
