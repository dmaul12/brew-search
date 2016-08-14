class SavebrewController < ApplicationController
   def index
##only want to show the saved data from the unique user "session" matches users_id
    render :json => Brew.where(users_id: session[:user_id])
  end

    def create

    @brew = Brew.create({

                      :name => params[:name],
                      :website => params[:website],
                      :users_id => session[:user_id]
                    })
    render :json => @brew
    puts :name
  end

  def show
    @brew = Brew.find(params[:id])
    render :json => @brew
  end

    def destroy
    @brew = Brew.find(params[:id])
    if @brew
      @brew.destroy
      render :json => {:deleted => true} if @brew
    else
      render :json => {:deleted => false}
    end
  end
  def new
  end
end
