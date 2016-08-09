class SavebrewController < ApplicationController
   def index

    render :json => Brew.all
  end

    def create

    @brew = Brew.create({

                      :name => params[:name],
                      :website => params[:website]
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
