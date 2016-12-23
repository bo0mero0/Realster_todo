class Api::TodoItemsController < ApplicationController


  def create
    @todos = [{todo: "buy milk", description: "ran out of milk"},
              {todo: "call john", description: "reminder"}]
    render "api/todo/index"
  end

  def index
    @todos = [{todo: "buy milk", description: "ran out of milk"},
              {todo: "call john", description: "reminder"}]
    render "api/todo/index"
  end
end
