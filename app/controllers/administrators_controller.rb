class AdministratorsController < ApplicationController
  before_action :is_admin?

  def purchase
      @purchase = Purchase.find(params[:id])
      render json: @purchase
  end 

  def purchase_index
      @purchases = Purchase.all.order(created_at: :desc)
      render json: @purchases
  end 

  def record_index
      @records = Record.all.order(created_at: :desc)
      render json: @records
  end 

  def users_index
      @users = User.order(:username)
  end
  
  def admin_destroy
      User.find(params[:id]).destroy
      head :no_content
  end 

  def genre_index
      @genres = Genre.all
      render json: @genres
  end


end
