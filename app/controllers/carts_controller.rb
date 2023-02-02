class CartsController < ApplicationController

        #create a new instance of cart 
        def new
            record = Cart.create!(:user_id => params[:user_id], :record_id => params[:record_id])
            render json: Record.find(params[:record_id]), status: :created
        end
        
        #delete all instances of carts associated with user
        def delete_all
            Cart.where(user_id: params[:user_id]).destroy_all
            head :no_content
        end

        #delete specific item in cart/remove item from cart
        def delete_cart_item
            Cart.where(user_id: params[:user_id], record_id: params[:record_id]).destroy_all
            head :no_content
        end
    
    
    end
    