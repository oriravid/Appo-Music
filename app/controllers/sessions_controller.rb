class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      flash.now[:errors] = ['Invalid username or password.']
      render :new
    else
      login!(@user)
      redirect_to user_url(@user)
    end

  end

  def destroy
    logout!
    redirect_to new_session_url
  end
end
