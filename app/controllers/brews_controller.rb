class BrewsController < ApplicationController
  # def index
  #   @brew = Brew.all
  #   render :json => @brew
  # end

  def index
    url = "http://api.brewerydb.com/v2/breweries/?key=af615971211072ad76079cf7115a47e4&name=#{params[:name]}"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end

  def show
  end
end
