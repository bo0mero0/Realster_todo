idx = 0
@todos.each do |todo|
  idx += 1
  json.set! idx do
    json.name todo[:name]
    json.description todo[:description]
    json.done todo[:done]
  end
end
