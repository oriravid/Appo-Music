# class Api::UserSavesController < ApplicationController
#   def create
#     @user_save = UserSave.new(user_id: params[:user_id], track_id: params[:track_id])
#     if @user_save.save
#       render json: @user_save
#     else
#       render json: @user_save.errors.full_messages, status: 422
#     end
#   end

#   def destroy
#     @user_save = UserSave.find_by(user_id: params[:user_id], track_id: params[:track_id])
#     if @user_save
#       @user_save.destroy
#       render json: @UserSave.track_id
#     else
#       render json: ['Save not found']
#     end
#   end
# end
