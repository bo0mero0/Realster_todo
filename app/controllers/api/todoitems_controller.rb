class Api::TodoitemsController < ApplicationController

  def index

    @todos = [{name: "buy milk", description: "ran out of milk"},
      {name: "call john", description: "reminder"}]
  end

  def create
    @todos = [{name: "buy milk", description: "ran out of milk"},
              {name: "call john", description: "reminder"}]
  end

end
