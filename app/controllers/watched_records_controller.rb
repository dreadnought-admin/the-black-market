# class WatchedRecordsController < ApplicationController
#     skip_before_action :authorized_user
#     before_action :set_record

#     def index
#         @watches = current_user.watched_records
#     end

#     def create
#         if Watch.create(watched: @record, user: current_user)
#             redirect_to @record, notice: 'Record has been favorited'
#         else 
#             redirect_to @record, alert: 'Something went wrong'
#         end 
#     end

#     def destroy
#         Watch.were(watched_id: @record.is, user_id: current_user.id).first.destroy
#         redirect_to @record, notice: 'Record removed from your favorites'
#     end 

#     private

#     def set_record
#         @record = Record.find(params[:record_id]) || params[:id]
#     end
# end
