class Api::TodoitemsController < ApplicationController

  def index
    @todos = [{name: "Buy Milk", description: "Supermarket"},
      {name: "Call John", description: "Office 212-555-5566"},
      {name: "Meeting with Tom", description: "5th Ave."},
      {name: "Text Landlord", Descriotion: "Home #"}]
  end

  def create
    @todos = params[:todos]
  end

end
