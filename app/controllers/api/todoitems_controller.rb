class Api::TodoitemsController < ApplicationController

  def index
    @todos = [{name: "Text Landlord", description: "Home #", done: "false"},
      {name: "Meeting with Tom", description: "5th Ave.", done: "false"},
      {name: "Call John", description: "Office 212-555-5566", done: "true"},
      {name: "Buy Milk", description: "Supermarket", done: "false"}]
  end

  def create
    @todos = params[:todos]
  end

end
