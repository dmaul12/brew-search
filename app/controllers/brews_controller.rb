class BrewsController < ApplicationController
   # before_action :require_user, only: [:index, :show]
  def index
    @brew = Brew.all
    render :json => @brew
  end

  def index
    #to hide api key
    Rails.application.secrets.brew_key
    # if params established is empty than use names
  if params[:name] && (params[:established] == "")
    # puts "in name"
    url = "http://api.brewerydb.com/v2/breweries/?key=#{Rails.application.secrets.brew_key}&name=#{params[:name]}"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
    #if params name is empty than use established
  elsif params[:established] && (params[:name] == "")
    # puts "in date"
    url = "http://api.brewerydb.com/v2/breweries/?key=#{Rails.application.secrets.brew_key}&established=#{params[:established]}"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  else
    #some warning flash message

  end

  end


  #   def create

  #   @brew = Brew.create({

  #                     :name => params[:name],
  #                     :website => params[:website]
  #                   })
  #   render :json => @brew
  #   puts :name
  # end

  # def show
  #   @brew = Brew.find(params[:id])
  #   render :json => @brew
  # end

  #   def destroy
  #   @brew = Brew.find(params[:id])
  #   if @brew
  #     @brew.destroy
  #     render :json => {:deleted => true} if @brew
  #   else
  #     render :json => {:deleted => false}
  #   end
  # end
  # def new
  # end
end
