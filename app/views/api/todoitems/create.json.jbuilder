@todos.each do |key, value|
  json.set! key do
    json.name value[:name]
    json.description value[:description]
    json.done value[:done]
  end
end
