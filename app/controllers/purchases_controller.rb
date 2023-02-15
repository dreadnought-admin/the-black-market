class PurchasesController < ApplicationController

    def user_purchases
        purchases = Purchase.all.where(:user_id => params[:user_id]).order(id: :desc)
        render json: purchases
    end 

    def update
        @purchase = Purchase.find(params[:id])
        @purchase.update!(status: params[:status])
        render json: @purchase, status: :accepted
    end 
    
end
