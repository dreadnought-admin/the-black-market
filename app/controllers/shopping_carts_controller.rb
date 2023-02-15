class ShoppingCartsController < ApplicationController
    def new
        record = ShoppingCart.create(:user_id => params[:user_id], :record_id => params[:record_id])
        render json: Record.find(params[:record_id]), status: :created
    end

    def delete_all
        ShoppingCart.where(user_id: params[:user_id]).destroy_all
        head :no_content
    end

    def delete_cart_item
        ShoppingCart.where(user_id: params[:user_id], record_id: params[:record_id]).destroy_all
        head :no_content
    end


end
