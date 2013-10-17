json.array!(@performances) do |performance|
  json.extract! performance, :date, :location, :description
  json.url performance_url(performance, format: :json)
end
