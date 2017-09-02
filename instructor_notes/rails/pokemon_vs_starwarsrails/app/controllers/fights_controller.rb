class FightsController < ApplicationController
  def index
    @star_war = StarWar.generate rand(90)
  end
end